import {createSelector} from 'reselect';

import NameSpace from '../name-spaces';
import {Film} from "../../models/Film";


const NAME_SPACE = NameSpace.DATA;

const getActiveGenre = (state): string => state[NAME_SPACE].genre;
const getFavorites = (state) => state[NAME_SPACE].favorites;
const getFilmById = (state, id: number): Film => state[NAME_SPACE].films.find((film: Film) => film.id === id);
const getFilms = (state): Film[] => state[NAME_SPACE].films;
const getPromo = (state) => state[NAME_SPACE].promo;
const getRelatedFilms = (state, currentFilm: Film, count: number) => state[NAME_SPACE].films
  .filter((film: Film) => film.id !== currentFilm.id && film.genre === currentFilm.genre)
  .slice(0, count);
const getReviews = (state) => state[NAME_SPACE].reviews;

const getGenres = createSelector(
    getFilms,
    (films) => {
      const genresSet = new Set();

      films.forEach((film) => {
        genresSet.add(film.genre);
      });

      const genres = Array.from(genresSet);
      genres.sort();
      genres.unshift(`All genres`);

      return genres;
    }
);

const getFilteredFilms = createSelector(
    [getActiveGenre, getFilms],
    (genre, films) => {
      return genre === `All genres`
        ? films
        : films.filter((film) => film.genre === genre);
    }
);


export {
  getActiveGenre,
  getFavorites,
  getFilteredFilms,
  getFilmById,
  getFilms,
  getGenres,
  getPromo,
  getRelatedFilms,
  getReviews,
};

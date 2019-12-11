import {createSelector} from 'reselect';

import NameSpace from '../name-spaces';
import {Film} from "../../models/Film";


const NAME_SPACE = NameSpace.DATA;

const getFavorites = (state) => state[NAME_SPACE].favorites;
const getFilmById = (state, id: number): Film => state[NAME_SPACE].films.find((film: Film) => film.id === id);
const getFilms = (state) => state[NAME_SPACE].films;
const getPromo = (state) => state[NAME_SPACE].promo;
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


export {
  getFavorites,
  getFilmById,
  getFilms,
  getGenres,
  getPromo,
  getReviews,
};

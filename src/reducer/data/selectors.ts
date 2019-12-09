import {createSelector} from 'reselect';

import NameSpace from '../name-spaces';


const NAME_SPACE = NameSpace.DATA;

const getFavorites = (state) => state[NAME_SPACE].favorites;
const getFilms = (state) => state[NAME_SPACE].films;
const getPromo = (state) => state[NAME_SPACE].promo;
const getUserInfo = (state) => state[NAME_SPACE].user;

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
  getFilms,
  getGenres,
  getPromo,
  getUserInfo,
};

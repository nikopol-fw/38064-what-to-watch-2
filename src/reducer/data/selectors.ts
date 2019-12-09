import {createSelector} from 'reselect';

import NameSpace from '../name-spaces';


const NAME_SPACE = NameSpace.DATA;

const getFilms = (state) => state[NAME_SPACE].films;

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

const getUserInfo = (state) => state[NAME_SPACE].user;


export {
  getFilms,
  getGenres,
  getUserInfo,
};

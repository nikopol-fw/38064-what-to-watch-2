import {Film} from "../../models/film";


export const updateFilm = (films: Film[], updatedFilm: Film) => {
  const updatedFilms = films.slice();
  const index = updatedFilms.findIndex((film) => film.id === updatedFilm.id);
  updatedFilms.splice(index, 1, updatedFilm);
  return updatedFilms;
};

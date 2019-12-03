import React from 'react';
import PropTypes from 'prop-types';

import MainPage from '../main-page/main-page';
import {FilmPage} from '../film-page/film-page';

const getPageScreen = (props) => {
  const {films, film} = props;

  switch (location.pathname) {
    case `/`:
      return <MainPage films={films}/>;
    case `/films`:
      return <FilmPage
        title={film.title}
        genre={film.genre}
        releaseYear={film.releaseYear}
        posterImg={film.posterImg}
        coverImg={film.coverImg}
      />;
    default:
      return <MainPage films={films}/>;
  }
};


export const App = (props) => {
  return <React.Fragment>{getPageScreen(props)}</React.Fragment>;
};


getPageScreen.propTypes = {
  films: PropTypes.array.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.string.isRequired,
    posterImg: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
  })
};

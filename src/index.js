import React from 'react';
import ReactDOM from 'react-dom';

import {films} from './mocks/films';
import {film} from './mocks/film';

import {App} from './components/app/app';

const init = () => {
  ReactDOM.render(
      <App
        films={films}
        film={film}
      />,
      document.getElementById(`root`)
  );
};

init();

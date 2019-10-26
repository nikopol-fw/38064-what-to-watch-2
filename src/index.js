import React from 'react';
import ReactDOM from 'react-dom';

import {films} from './mocks/films';

import {App} from './components/app/app';

const init = () => {
  ReactDOM.render(
      <App
        films={films}
      />,
      document.getElementById(`root`)
  );
};

init();

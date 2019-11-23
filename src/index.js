import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {films} from './mocks/films';
import {film} from './mocks/film';

import {reducer} from './reducer';

import {App} from './components/app/app';


const init = () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );

  ReactDOM.render(<Provider store={store}>
    <App
      films={films}
      film={film}
    />
  </Provider>,
  document.getElementById(`root`)
  );
};

init();

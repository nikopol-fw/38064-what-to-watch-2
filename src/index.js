import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import {createAPI} from './api';
import {Operation, reducer} from './reducer';
import {App} from './components/app/app';


const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  store.dispatch(Operation.loadFilms());

  ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById(`root`)
  );
};

init();

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";

import {createAPI} from './api';
import reducer from './reducer';
import {Operation as DataOperation} from './reducer/data/data';
import App from './components/app/app';


const init = (): void => {

  const api = createAPI((...args) => store.dispatch(...args));

  const store = createStore(reducer,
      composeWithDevTools(
          applyMiddleware(thunk.withExtraArgument(api)),
      )
  );

  // TODO добавить хранение store в sessionStorage
  store.dispatch(DataOperation.authenticate());
  store.dispatch(DataOperation.loadFilms());

  ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById(`root`)
  );
};

init();

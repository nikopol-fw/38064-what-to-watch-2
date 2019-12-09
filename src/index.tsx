import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {BrowserRouter as Router} from 'react-router-dom';

import {createAPI} from './api';
import reducer from './reducer';
import {Operation as DataOperation} from './reducer/data/data';
import App from './components/app/app';


const init = (): void => {

  const api = createAPI();

  const store = createStore(reducer,
      composeWithDevTools(
          applyMiddleware(thunk.withExtraArgument(api)),
      )
  );

  store.dispatch(DataOperation.authenticate());
  store.dispatch(DataOperation.loadFilms());

  ReactDOM.render(<Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById(`root`)
  );
};

init();

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store/store';
import {Operation as DataOperation} from './reducer/data/data';
import App from './components/app/app';


const init = (): void => {
  store.dispatch(DataOperation.loadFilms());

  ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById(`root`)
  );
};

init();

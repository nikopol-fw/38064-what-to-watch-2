import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import throttle from 'lodash-es/throttle';

import NameSpace from '../reducer/name-spaces';
import {createAPI} from '../api';
import reducer from '../reducer';
import {loadState, saveState} from './session';


const UPDATE_SESSION_STORE_THROTTLE = 1000;

const preloadedState = loadState();
// eslint-disable-next-line @typescript-eslint/no-use-before-define
const api = createAPI((argument) => store.dispatch(argument));

const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

store.subscribe(throttle(() => {
  saveState({
    [NameSpace.USER]: store.getState()[NameSpace.USER]
  });
}, UPDATE_SESSION_STORE_THROTTLE));


export default store;

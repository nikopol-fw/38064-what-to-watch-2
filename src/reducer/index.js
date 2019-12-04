import {combineReducers} from 'redux';

import NameSpace from './name-spaces';
import {reducer as data} from './data/data';
import {reducer as user} from './user/user';


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});

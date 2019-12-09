import {AxiosInstance, AxiosResponse} from "axios";

import {keysToCamel} from '../../lib/keys-to-camel/keys-to-camel';
import {FormLogin} from "../../models/FormLogin";
import {LoginApiData} from "../../models/ApiLoginData";
import {User} from "../../models/User";


const initialState = {
  user: {},
  films: [],
};


const ActionType = {
  AUTHENTICATE: `AUTHENTICATE`,
  AUTHORIZE: `AUTHORIZE`,
  LOAD_FILMS: `LOAD_FILMS`,
};


const ActionCreator = {
  authentication: (is) => ({
    type: ActionType.AUTHENTICATE,
    // payload: userData,
  }),
  authorize: (data: User) => ({
    type: ActionType.AUTHORIZE,
    payload: data,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
};


const Operation = {
  authenticate: () => (dispatch, _getState, api: AxiosInstance) => {
    return api.get(`/login`)
      .then((response) => {
        console.log(response);
      });
  },
  authorize: (formData: FormLogin) => (dispatch, _getState, api: AxiosInstance) => {
    return api.post(`/login`, formData)
      .then((response: AxiosResponse<LoginApiData>) => {
        if (response.status === 200) {
          const data = response.data;
          const UserInfo: User = {
            avatar: data[`avatar_url`],
            email: data[`email`],
            id: data[`id`],
            name: data[`name`],
          };
          dispatch(ActionCreator.authorize(UserInfo));
        }
      });
  },
  loadFilms: () => (dispatch, _getState, api: AxiosInstance) => {
    return api.get(`/films`)
      .then((response) => {
        response.data = response.data.map((film) => keysToCamel(film));
        dispatch(ActionCreator.loadFilms(response.data));
      });
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTHENTICATE:
      return Object.assign({}, state, {
        // isAuth: action.
      });

    case ActionType.AUTHORIZE:
      return Object.assign({}, state, {
        user: action.payload,
      });

    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload,
      });
  }

  return state;
};


export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};

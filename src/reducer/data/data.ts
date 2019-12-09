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
  LOAD_FILMS: `LOAD_FILMS`,
  UPDATE_USER_INFO: `UPDATE_USER_INFO`,
};


const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  updateUserInfo: (userData: User) => ({
    type: ActionType.UPDATE_USER_INFO,
    payload: userData,
  }),
};


const Operation = {
  authenticate: () => (dispatch, _getState, api: AxiosInstance) => {
    return api.get(`/login`)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          const UserInfo: User = {
            avatar: data[`avatar_url`],
            email: data[`email`],
            id: data[`id`],
            name: data[`name`],
          };
          dispatch(ActionCreator.updateUserInfo(UserInfo));
        }
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
          dispatch(ActionCreator.updateUserInfo(UserInfo));
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
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload,
      });

    case ActionType.UPDATE_USER_INFO:
      return Object.assign({}, state, {
        user: action.payload,
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

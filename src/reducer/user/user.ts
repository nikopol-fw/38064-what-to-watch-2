import {User} from "../../models/User";
import {AxiosInstance, AxiosResponse} from "axios";
import {FormLogin} from "../../models/FormLogin";
import {LoginApiData} from "../../models/ApiLoginData";


const initialState = {
  genre: `All genres`,
  info: {},
};


const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  UPDATE_USER_INFO: `UPDATE_USER_INFO`,
};


const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
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
        if (response && response.status === 200) {
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
        if (response && response.status === 200) {
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
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign({}, state, {
        genre: action.payload,
      });

    case ActionType.UPDATE_USER_INFO:
      return Object.assign({}, state, {
        info: action.payload,
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

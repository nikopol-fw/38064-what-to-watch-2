import {User} from "../../models/user";
import {AxiosInstance, AxiosResponse} from "axios";
import {FormLogin} from "../../models/form-login";
import {LoginApiData} from "../../models/api-login-data";


const initialState = {
  info: {},
};


const ActionType = {
  RESET_USER: `RESET_USER`,
  UPDATE_USER_INFO: `UPDATE_USER_INFO`,
};


const ActionCreator = {
  resetUserInfo: () => ({
    type: ActionType.RESET_USER,
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
    case ActionType.RESET_USER:
      return Object.assign({}, state, {
        info: initialState.info,
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

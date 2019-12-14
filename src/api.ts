import axios, {AxiosInstance} from 'axios';
import history from "./history";

import {ActionCreator} from "./reducer/user/user";


export const createAPI = (dispatch): AxiosInstance => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onError = (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      dispatch(ActionCreator.resetUserInfo());
      history.push(`/login`);
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

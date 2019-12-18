import axios, {AxiosInstance} from 'axios';
import history from './history';

import {ActionCreator} from './reducer/user/user';


const API_TIMEOUT = 5000;

export const createAPI = (dispatch): AxiosInstance => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: API_TIMEOUT,
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

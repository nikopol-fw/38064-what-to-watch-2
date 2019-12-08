import axios, {AxiosInstance} from 'axios';


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  api.interceptors.response.use(onSuccess);

  return api;
};

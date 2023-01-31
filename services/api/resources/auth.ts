import qs from 'querystring';
import { fetchApi } from '../utils';

const endpoints = {
  login(email: string, password: string) {
    return fetchApi(`/login`, {
      data: qs.stringify({ email, password }),
      method: 'POST',
      isUrlEncoded: true,
    });
  },
};

export default endpoints;

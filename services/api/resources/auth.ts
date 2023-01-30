import { fetchApi } from '../utils';

const endpoints = {
  login(email: string, password: string) {
    const params = new URLSearchParams();

    params.append('email', email);
    params.append('password', password);

    return fetchApi(`/login`, {
      params,
      method: 'POST',
    });
  },
};

export default endpoints;

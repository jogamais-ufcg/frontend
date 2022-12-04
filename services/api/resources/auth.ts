import { fetchApi } from '../utils';

const endpoints = {
  login(email: string, password: string) {
    return fetchApi(`/auth`, 'POST', { email, password });
  },
};

export default endpoints;

import { fetchApi } from '../utils';

const endpoints = {
  login(email: string, password: string) {
    return fetchApi(`/auth`, {
      data: { email, password },
      method: 'POST',
    });
  },
};

export default endpoints;

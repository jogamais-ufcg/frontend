import { CreateUser } from 'schemas/user';
import { fetchApi } from '../utils';

const endpoints = {
  get(id: string) {
    return fetchApi(`/users/${id}`);
  },
  create(user: CreateUser) {
    return fetchApi(`/users`, {
      method: 'POST',
      data: user,
    });
  },
};

export default endpoints;

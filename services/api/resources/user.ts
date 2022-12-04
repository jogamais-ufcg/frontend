import { fetchApi } from '../utils';

interface UserCreation {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  isMemberUFCG: boolean;
  cpf: string;
}

const endpoints = {
  get(id: string) {
    return fetchApi(`/users/${id}`, 'GET');
  },
  create(user: UserCreation) {
    return fetchApi(`/users`, 'POST', user);
  },
};

export default endpoints;

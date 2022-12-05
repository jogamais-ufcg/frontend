import { fetchApi } from '../utils';

interface CreateUser {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  cpf: string;
  documentFront?: string;
  documentBack?: string;
  isUFCGMember?: boolean;
  enrollment?: string;
  enrollmentDocument?: string;
}

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

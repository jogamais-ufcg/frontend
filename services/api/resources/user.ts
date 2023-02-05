import { fetchApi } from '../utils';

interface CreateUser {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  cpf: string;
  documentFront: File;
  documentBack?: File;
  isUFCGMember?: boolean;
  isStudent?: boolean;
  enrollment?: string;
}

interface EditUser {
  name: string | undefined;
  cellphone: string | undefined;
  id: number | undefined;
}

const endpoints = {
  get(email: string) {
    return fetchApi(`/users/${email}`);
  },
  create(user: CreateUser) {
    const formData = new FormData();

    formData.append('name', user.name);
    formData.append('password', user.password);
    formData.append('email', user.email);
    formData.append('phoneNumber', user.cellphone);
    formData.append('cpf', user.cpf);
    formData.append('isUFCGMember', user.isUFCGMember ? 'true' : 'false');
    formData.append('isStudent', user.isStudent ? 'true' : 'false');
    formData.append('fileFront', user.documentFront);
    if (user.documentBack) {
      formData.append('fileBack', user.documentBack);
    }
    if (user.enrollment) {
      formData.append('enrollment', user.enrollment);
    }

    return fetchApi(`/users`, {
      method: 'POST',
      data: formData,
    });
  },
  editUser(user: EditUser) {
    const data = {
      name: user.name,
      phoneNumber: user.cellphone,
    };

    return fetchApi(`/users/${user.id}`, {
      method: 'PATCH',
      data,
    });
  },
};

export default endpoints;

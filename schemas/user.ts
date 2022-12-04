export interface CreateUser {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  cpf: string;
  documentFront?: File;
  documentBack?: File;
  isUFCGMember: boolean;
  enrollment?: string;
  enrollmentDocument?: File;
}

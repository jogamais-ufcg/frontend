export interface CreateUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cellphone: string;
  cpf: string;
  documentFront: File | null;
  documentBack: File | null;
  isUFCGMember: boolean;
}

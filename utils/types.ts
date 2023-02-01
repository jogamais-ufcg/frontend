export interface User {
  id: number;
  cpf: string;
  name: string;
  email: string;
  isStudent: boolean;
  isUFCGMember: boolean;
  isAdmin?: boolean;
  phoneNumber: string;
  validUntil: string;
}

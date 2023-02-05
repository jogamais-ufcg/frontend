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

export interface CourtRules {
  idCourtRules: number;
  openingHour: number;
  closingHour: number;
  appointmentDuration: number;
  appointmentPeriod: string;
  recurrenceIntervalPeriod: number;
  availableDays: string;
  onlyUfcg: boolean;
}

export interface Court {
  id: number;
  name: string;
  photo: string;
  description: string;
  courtRules: CourtRules;
}

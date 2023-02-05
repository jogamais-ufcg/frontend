import { imagesMapping } from 'utils/images';

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

export type ImageMapping = typeof imagesMapping;

export interface Court {
  idCourt: number;
  name: string;
  photo: keyof ImageMapping;
  description: string;
  courtRules: CourtRules;
}

export interface UserAppointment {
  id: number;
  startAppointmentDate: string;
  endAppointmentDate: string;
  playerList: string;
}

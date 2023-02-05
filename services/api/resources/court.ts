import { fetchApi } from '../utils';

interface CreateCourt {
  appointmentDuration: number;
  appointmentPeriod: string;
  availableDays: string;
  closingHour: number;
  description: string;
  isOnlyUfcg: boolean;
  name: string;
  openingHour: number;
  photo: string;
  recurrenceIntervalDate: number;
}

const endpoints = {
  get(name: string) {
    return fetchApi(`/courts/${name}`);
  },
  getAll() {
    return fetchApi(`/courts?page=0`);
  },
  create(court: CreateCourt) {
    return fetchApi(`/courts`, {
      method: 'POST',
      data: court,
    });
  },
};

export default endpoints;

import { fetchApi } from '../utils';
import { getYearMonthDay } from 'utils/strings';

const endpoints = {
  getByDateAndCourt(date: Date, courtId: number) {
    return fetchApi(
      `/appointments/users/courts/${courtId}/available-appointments-day-and-court?date=${getYearMonthDay(
        date
      )}`
    );
  },
};

export default endpoints;

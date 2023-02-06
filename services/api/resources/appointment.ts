import { fetchApi } from '../utils';
import { getYearMonthDay } from 'utils/strings';

interface CreateForUserPayload {
  courtId: number;
  userId: number;
  date: Date;
  playersList: string;
}

const endpoints = {
  getAvailableHoursByDateAndCourt(date: Date, courtId: number) {
    return fetchApi(
      `/appointments/users/courts/${courtId}/available-appointments-day-and-court?date=${getYearMonthDay(
        date
      )}`
    );
  },
  createForUser({ courtId, userId, date, playersList }: CreateForUserPayload) {
    return fetchApi(`/appointments/users?idCourt=${courtId}&idUser=${userId}`, {
      method: 'POST',
      data: {
        startAppointmentDate: date.toISOString(),
        playerList: playersList,
      },
    });
  },
};

export default endpoints;

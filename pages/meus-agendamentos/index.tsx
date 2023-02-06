/* eslint-disable @typescript-eslint/no-explicit-any */
import BackHeader from 'components/BackHeader';
import PageContainer from 'components/PageContainer';
import ScheduleItem from 'components/ScheduleItem';
import { usePrivateRoute } from 'hooks/session';
import { useCallback, useEffect, useState } from 'react';
import { getReadableDate } from 'utils/strings';
import { useAuth } from 'contexts/auth';
import { fetchApi } from 'services/api/utils';

export default function UserSchedules() {
  const [appointments, setAppointments] = useState([]);
  usePrivateRoute();
  const auth = useAuth();

  const getAppointments = useCallback(async () => {
    const id = auth.user?.id;
    const response = await fetchApi(
      `/appointments/users/my-appointments?id=${id}`,
      {
        method: 'GET',
      }
    );

    setAppointments(response.data);
  }, [auth]);

  useEffect(() => {
    getAppointments();
  }, [getAppointments]);

  return (
    <PageContainer headTitle="Agendamentos">
      <BackHeader title="Meus agendamentos" />

      {appointments.map((schedule: any) => (
        <ScheduleItem
          key={schedule.startAppointmentDate}
          title={schedule.id.court.name}
          subtitle={getReadableDate(new Date(schedule.startAppointmentDate))}
        />
      ))}
    </PageContainer>
  );
}

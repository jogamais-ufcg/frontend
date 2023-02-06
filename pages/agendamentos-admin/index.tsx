/* eslint-disable @typescript-eslint/no-explicit-any */
import BackHeader from 'components/BackHeader';
import PageContainer from 'components/PageContainer';
import ScheduleItem from 'components/ScheduleItem';
import { usePrivateRoute } from 'hooks/session';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { fetchApi } from 'services/api/utils';
import { getReadableDate } from 'utils/strings';

export default function AdminSchedules() {
  usePrivateRoute(true);
  const router = useRouter();
  const [appointments, setAppointments] = useState([]);

  const getAppointments = useCallback(async () => {
    const { courtId, selectedDate } = router.query;

    const response = await fetchApi(
      `/appointments/users/courts/${courtId}/day-and-court?date=${selectedDate}`,
      {
        method: 'GET',
      }
    );

    setAppointments(response.data);
  }, [router]);

  useEffect(() => {
    getAppointments();
  }, [getAppointments]);

  return (
    <PageContainer headTitle="Agendamentos">
      <BackHeader title="Agendamentos" subtitle="19/02/2023" />

      {appointments.map((schedule: any) => (
        <ScheduleItem
          key={schedule.startAppointmentDate}
          title={schedule.id.user.name}
          subtitle={getReadableDate(new Date(schedule.startAppointmentDate))}
          expandedInformation={{
            title: 'Lista de jogadores',
            body: schedule.playerList,
          }}
        />
      ))}
    </PageContainer>
  );
}

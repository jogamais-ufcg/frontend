import BackHeader from 'components/BackHeader';
import PageContainer from 'components/PageContainer';
import ScheduleItem from 'components/ScheduleItem';
import { usePrivateRoute } from 'hooks/session';
import { useEffect } from 'react';
import { getReadableDate } from 'utils/strings';
import { useAuth } from 'contexts/auth';
import { fetchApi } from 'services/api/utils';

const mockedSchedules = [
  {
    court: 'Quadra de Futsal',
    date: new Date('2021-02-19T09:30:00.000Z'),
  },
  {
    court: 'Quadra de Tênis',
    date: new Date('2021-02-19T10:30:00.000Z'),
  },
  {
    court: 'Quadra de Vôlei',
    date: new Date('2021-02-19T11:30:00.000Z'),
  },
  {
    court: 'Quadra de Beach Tennis',
    date: new Date('2021-02-19T12:30:00.000Z'),
  },
];

export default function UserSchedules() {
  usePrivateRoute();
  const auth = useAuth();

  useEffect(() => {
    const eixe = auth.user?.id;
    const response = fetchApi(
      `/appointments/users/my-appointments?id=${eixe}`,
      {
        method: 'GET',
      }
    );
    console.log(response);
  }, []);

  return (
    <PageContainer headTitle="Agendamentos">
      <BackHeader title="Meus agendamentos" />

      {mockedSchedules.map((schedule) => (
        <ScheduleItem
          key={schedule.court}
          title={schedule.court}
          subtitle={getReadableDate(schedule.date)}
          onDelete={() => console.log('delete')}
        />
      ))}
    </PageContainer>
  );
}

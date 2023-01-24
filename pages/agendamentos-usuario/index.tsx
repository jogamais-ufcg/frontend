import BackHeader from 'components/BackHeader';
import PageContainer from 'components/PageContainer';
import ScheduleItem from 'components/ScheduleItem';

const mockedSchedules = [
  {
    name: 'Quadra de Futsal',
    schedule: '26/11/2022 às 9h30',
  },
  {
    name: 'Quadra de Tênis',
    schedule: '02/11/2022 às 10h30',
  },
  {
    name: 'Quadra de Vôlei',
    schedule: '26/11/2022 às 08h00',
  },
  {
    name: 'Quadra de Beach Tênis',
    schedule: '26/11/2022 às 14h30',
  },
];

export default function UserSchedules() {
  return (
    <PageContainer headTitle="Agendamentos">
      <BackHeader title="Meus Agendamentos" />

      {mockedSchedules.map((schedule) => (
        <ScheduleItem
          key={schedule.name}
          title={schedule.name}
          subtitle={schedule.schedule}
          onDelete={() => console.log('delete')}
          expandedInformation={{
            title: 'Lista de Jogadores',
            body: 'Davi, João, Gabriel, Davi, Davi',
          }}
        />
      ))}
    </PageContainer>
  );
}

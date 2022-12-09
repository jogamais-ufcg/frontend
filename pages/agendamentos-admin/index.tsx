import BackHeader from 'components/BackHeader';
import PageContainer from 'components/PageContainer';
import ScheduleItem from 'components/ScheduleItem';

const mockedSchedules = [
  {
    name: 'Davi Gomes Passos',
    schedule: '8h00 às 9h00',
  },
  {
    name: 'João da Silva',
    schedule: '9h00 às 9h30',
  },
  {
    name: 'Gabriel Gomes Passos de Lacerda',
    schedule: '11h00 às 11h30',
  },
  {
    name: 'Davi Gomes Passos Sousa',
    schedule: '12h00 às 13h00',
  },
  {
    name: 'Davi Gomes Passos Sousa',
    schedule: '14h00 às 15h00',
  },
];

export default function AdminSchedules() {
  return (
    <PageContainer headTitle="Agendamentos">
      <BackHeader title="Agendamentos" subtitle="19/02/2023" />

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

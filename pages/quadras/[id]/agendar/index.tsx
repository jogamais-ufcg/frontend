import {
  faInfoCircle,
  faClock,
  faBookOpen,
  faPrint,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import Button from 'components/Button';
import PageContainer from 'components/PageContainer';
import BackHeader from 'components/BackHeader';
import { Calendar } from 'react-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DateHour() {
  const router = useRouter();

  return (
    <PageContainer headTitle="Data e Hora">
      <BackHeader title="Escolher data e horário"></BackHeader>

      <Calendar></Calendar>

      <div className={styles.textArea}>
        <p className={styles.selectedDateLabel}>
          <FontAwesomeIcon icon={faClock} color="38B6FF" />
          <p>
            Horários disponíveis para o dia{' '}
            <span className={styles.dateValue}>25/12/2022</span>
          </p>
        </p>
      </div>

      <div className={styles.buttonGrid}>
        {['8h00', '9h30', '11h00', '12h30', '14h00', '15h30'].map((time) => (
          <Button key={time} type="button" label={time} color="secondary" />
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <Button
          icon={faInfoCircle}
          onClick={() => router.push('/quadras/detalhes')} // TODO: ajustar rota!
          type="button"
          label="Show, vamos aos detalhes!"
          color="primary"
        />

        <Button
          icon={faBookOpen}
          onClick={() => router.push('/quadras/detalhes')} // TODO: ajustar rota!
          type="button"
          label="Listar agendamentos"
          color="secondary"
        />

        <Button
          icon={faPrint}
          onClick={() => router.push('/quadras/detalhes')} // TODO: ajustar rota!
          type="button"
          label="Imprimir Agendamentos"
          color="secondary"
        />
      </div>
    </PageContainer>
  );
}

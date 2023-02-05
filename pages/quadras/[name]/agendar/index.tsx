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
import { useCourts } from 'hooks/courts';
import { useCallback, useEffect, useMemo, useState } from 'react';
import api from 'services/api';
import { useAuth } from 'contexts/auth';
import { getReadableDate } from 'utils/strings';
import { toast } from 'react-toastify';
import { usePrivateRoute } from 'hooks/session';

export default function DateHour() {
  usePrivateRoute();

  const { user } = useAuth();
  const router = useRouter();
  const { name: courtName } = router.query;
  const { selectedCourt, getCourtByName } = useCourts();
  const [selectedDay, setSelectedDay] = useState(new Date());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [availableAppointments, setAvailableAppointments] = useState([]);

  const isAdmin = useMemo(() => user?.isAdmin, [user]);

  const getAvailableAppointments = useCallback(async () => {
    if (selectedCourt) {
      const { data, error } = await api.appointment.getByDateAndCourt(
        selectedDay,
        selectedCourt.idCourt
      );

      if (error) {
        toast.error(error);
        return;
      }

      console.log(data);
      setAvailableAppointments(data);
    }
  }, [selectedCourt, selectedDay]);

  useEffect(() => {
    if (courtName) {
      getCourtByName(courtName as string);
    }
  }, [getCourtByName, courtName]);

  useEffect(() => {
    getAvailableAppointments();
  }, [selectedCourt, selectedDay, getAvailableAppointments]);

  return (
    <PageContainer headTitle="Data e Hora">
      <BackHeader title="Escolher data e horário"></BackHeader>

      <Calendar value={selectedDay} onClickDay={setSelectedDay} locale="pt" />

      <div className={styles.textArea}>
        <div className={styles.selectedDateLabel}>
          <FontAwesomeIcon icon={faClock} color="38B6FF" />
          <p>
            Horários disponíveis para o dia{' '}
            <span className={styles.dateValue}>
              {getReadableDate(selectedDay, false)}
            </span>
          </p>
        </div>
      </div>

      <div className={styles.buttonGrid}>
        {['8h00', '9h30', '11h00', '12h30', '14h00', '15h30'].map((time) => (
          <Button key={time} type="button" label={time} color="secondary" />
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <Button
          icon={faInfoCircle}
          onClick={() => router.push(`/quadras/${courtName}/agendar/detalhes`)}
          type="button"
          label="Show, vamos aos detalhes!"
          color="primary"
        />

        {isAdmin && (
          <Button
            icon={faBookOpen}
            onClick={() => router.push('/quadras/detalhes')} // TODO: ajustar rota!
            type="button"
            label="Listar agendamentos"
            color="secondary"
          />
        )}

        {isAdmin && (
          <Button
            icon={faPrint}
            onClick={() => router.push('/quadras/detalhes')} // TODO: ajustar rota!
            type="button"
            label="Imprimir Agendamentos"
            color="secondary"
          />
        )}
      </div>
    </PageContainer>
  );
}

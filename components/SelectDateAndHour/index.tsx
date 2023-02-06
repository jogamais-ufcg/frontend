import {
  faInfoCircle,
  faClock,
  faBookOpen,
  faPrint,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import Button from 'components/Button';
import PageContainer from 'components/PageContainer';
import BackHeader from 'components/BackHeader';
import { Calendar } from 'react-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useMemo, useState } from 'react';
import api from 'services/api';
import { useAuth } from 'contexts/auth';
import { getPaddedNumber, getReadableDate } from 'utils/strings';
import { toast } from 'react-toastify';
import { usePrivateRoute } from 'hooks/session';
import { Court } from 'utils/types';

interface SelectDateAndHourProps {
  onNextStep: () => void;
  selectedCourt: Court | null;
}

export function SelectDateAndHour({
  onNextStep,
  selectedCourt,
}: SelectDateAndHourProps) {
  usePrivateRoute();

  const { user } = useAuth();
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [availableAppointments, setAvailableAppointments] = useState<number[]>(
    []
  );

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

      setAvailableAppointments(data);
    }
  }, [selectedCourt, selectedDay]);

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
        {availableAppointments.map((hour) => (
          <Button
            key={String(hour)}
            type="button"
            label={`${getPaddedNumber(hour)}h00`}
            color="secondary"
          />
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <Button
          icon={faInfoCircle}
          onClick={onNextStep}
          type="button"
          label="Show, vamos aos detalhes!"
          color="primary"
        />

        {isAdmin && (
          <Button
            icon={faBookOpen}
            type="button"
            label="Listar agendamentos"
            color="secondary"
          />
        )}

        {isAdmin && (
          <Button
            icon={faPrint}
            type="button"
            label="Imprimir Agendamentos"
            color="secondary"
          />
        )}
      </div>
    </PageContainer>
  );
}

import {
  faInfoCircle,
  faClock,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import Button from 'components/Button';
import PageContainer from 'components/PageContainer';
import BackHeader from 'components/BackHeader';
import { Calendar, CalendarTileProperties } from 'react-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useMemo, useState } from 'react';
import api from 'services/api';
import { useAuth } from 'contexts/auth';
import { getPaddedNumber, getReadableDate } from 'utils/strings';
import { toast } from 'react-toastify';
import { usePrivateRoute } from 'hooks/session';
import { Court } from 'utils/types';
import { getTomorrowDate } from 'utils/dates';
import { useRouter } from 'next/router';

interface SelectDateAndHourProps {
  onNextStep: (selectedDateAndHour: Date) => void;
  selectedCourt: Court | null;
}

export function SelectDateAndHour({
  onNextStep,
  selectedCourt,
}: SelectDateAndHourProps) {
  usePrivateRoute();

  const router = useRouter();
  const { user } = useAuth();

  const [selectedDay, setSelectedDay] = useState(getTomorrowDate());
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [availableAppointments, setAvailableAppointments] = useState<number[]>(
    []
  );

  const isAdmin = useMemo(() => user?.isAdmin, [user]);

  const getAvailableAppointments = useCallback(async () => {
    if (selectedCourt) {
      const { data, error } =
        await api.appointment.getAvailableHoursByDateAndCourt(
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

  const confirmDateAndHour = () => {
    if (!selectedHour) {
      toast.error('Selecione um horário');
      return;
    }

    const selectedDateAndHour = new Date(selectedDay);
    selectedDateAndHour.setHours(selectedHour);
    selectedDateAndHour.setMinutes(0);
    onNextStep(selectedDateAndHour);
  };

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
    setSelectedHour(null);
  };

  const isTileDisabled = ({ date }: CalendarTileProperties) => {
    const brWeekDays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

    const availableDays = selectedCourt?.courtRules.availableDays?.split(',');
    const isUnavailableDay = !availableDays?.includes(
      brWeekDays[date.getDay()]
    );

    const isTodayOrBefore = date.getTime() <= new Date().getTime();

    return isTodayOrBefore || isUnavailableDay;
  };

  const onListSchedulesClick = () => {
    router.push(
      `/agendamentos-admin?courtId=${selectedCourt?.idCourt}&selectedDate=${
        selectedDay.toISOString().split('T')[0]
      }`
    );
  };

  useEffect(() => {
    getAvailableAppointments();
  }, [selectedCourt, selectedDay, getAvailableAppointments]);

  return (
    <PageContainer headTitle="Data e Hora">
      <BackHeader title="Escolher data e horário"></BackHeader>

      <Calendar
        tileDisabled={isTileDisabled}
        value={selectedDay}
        onClickDay={handleDayClick}
        locale="pt"
      />

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
            onClick={() => setSelectedHour(hour)}
            label={`${getPaddedNumber(hour)}h00`}
            color="secondary"
            isClicked={selectedHour === hour}
          />
        ))}
      </div>

      <div className={styles.buttonContainer}>
        {!isAdmin && (
          <Button
            icon={faInfoCircle}
            onClick={confirmDateAndHour}
            type="button"
            label="Show, vamos aos detalhes!"
            color="primary"
          />
        )}

        {isAdmin && (
          <Button
            icon={faBookOpen}
            type="button"
            label="Listar agendamentos"
            color="secondary"
            onClick={onListSchedulesClick}
          />
        )}

        {/* {isAdmin && (
          <Button
            icon={faPrint}
            type="button"
            label="Imprimir Agendamentos"
            color="secondary"
          />
        )} */}
      </div>
    </PageContainer>
  );
}

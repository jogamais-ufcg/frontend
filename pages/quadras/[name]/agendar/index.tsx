import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { SelectDateAndHour } from 'components/SelectDateAndHour';
import { usePrivateRoute } from 'hooks/session';
import { useCourts } from 'hooks/courts';
import ProvideMoreScheduleInfo from 'components/ProvideMoreScheduleInfo';

export default function DateHour() {
  usePrivateRoute();
  const router = useRouter();
  const { name: courtName } = router.query;
  const { selectedCourt, getCourtByName } = useCourts();

  const [isSecondStep, setIsSecondStep] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    if (courtName) {
      getCourtByName(courtName as string);
    }
  }, [getCourtByName, courtName]);

  if (!isSecondStep) {
    return (
      <SelectDateAndHour
        selectedCourt={selectedCourt}
        onNextStep={(date) => {
          setSelectedDate(date);
          setIsSecondStep(true);
        }}
      />
    );
  }

  return (
    <ProvideMoreScheduleInfo
      selectedDate={selectedDate}
      selectedCourt={selectedCourt}
    />
  );
}

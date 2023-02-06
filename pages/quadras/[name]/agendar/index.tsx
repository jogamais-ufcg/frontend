import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { SelectDateAndHour } from 'components/SelectDateAndHour';
import { usePrivateRoute } from 'hooks/session';
import { useCourts } from 'hooks/courts';

export default function DateHour() {
  usePrivateRoute();
  const router = useRouter();
  const { selectedCourt, getCourtByName } = useCourts();

  const [isSecondStep, setIsSecondStep] = useState(false);
  const { name: courtName } = router.query;

  useEffect(() => {
    if (courtName) {
      getCourtByName(courtName as string);
    }
  }, [getCourtByName, courtName]);

  if (!isSecondStep) {
    return (
      <SelectDateAndHour
        selectedCourt={selectedCourt}
        onNextStep={() => setIsSecondStep(true)}
      />
    );
  }

  return <div></div>;
}

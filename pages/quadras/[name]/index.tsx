/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import {
  faCancel,
  faClock,
  faGraduationCap,
  faInfoCircle,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FreeBackHeader from 'components/FreeBackHeader';
import { useCourts } from 'hooks/courts';
import { imagesMapping } from 'utils/images';
import { StaticImageData } from 'next/image';
import { useAuth } from 'contexts/auth';
import { toast } from 'react-toastify';

export default function SeeCourt() {
  const router = useRouter();
  const { name: courtName } = router.query;
  const [isUser] = useState(true);
  const { selectedCourt, getCourtByName } = useCourts();
  const [image, setImage] = useState<StaticImageData | undefined>(undefined);
  const { user } = useAuth();

  useEffect(() => {
    if (selectedCourt) {
      setImage(imagesMapping[selectedCourt.photo]);
    }
  }, [selectedCourt, courtName]);

  useEffect(() => {
    if (courtName) {
      getCourtByName(courtName as string);
    }
  }, [getCourtByName, courtName]);

  const handleSchedule = () => {
    if (user) {
      router.push(`/quadras/${courtName}/agendar`);
    } else {
      toast.info('Você precisa estar logado para agendar uma quadra.');
      router.push('/login');
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.imgContainer}
        style={{
          backgroundImage: `url(${image?.src || ''})`,
        }}
      >
        <FreeBackHeader></FreeBackHeader>
      </div>

      <div className={styles.pageContainer}>
        <div className={styles.mainInformation}>
          <h2>{selectedCourt?.name}</h2>

          <p>{selectedCourt?.description}</p>
        </div>

        <div className={styles.infoContainer}>
          {selectedCourt?.courtRules.onlyUfcg && (
            <div className={styles.info}>
              <FontAwesomeIcon icon={faGraduationCap} />
              <span>Exclusivo para membros da UFCG</span>
            </div>
          )}

          <div className={styles.info}>
            <FontAwesomeIcon icon={faClock} />
            <span>
              Abre as {selectedCourt?.courtRules.openingHour || 8}h, fecha às{' '}
              {selectedCourt?.courtRules.closingHour || 18}h
            </span>
          </div>

          <div className={styles.info}>
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>
              {selectedCourt?.courtRules.appointmentDuration || 60}min de
              duração do agendamento
            </span>
          </div>
        </div>

        {isUser ? (
          <>
            <div className={styles.buttonContainer}>
              <Button
                onClick={handleSchedule}
                icon={faClock}
                type="button"
                label="Beleza, quero agendar!"
                color="primary"
              />
            </div>
          </>
        ) : (
          <>
            <div className={styles.buttonContainer}>
              <Button
                onClick={() => router.push(`/quadras/${courtName}/agendar`)}
                icon={faClock}
                type="button"
                label="Escolher data e horário"
                color="primary"
              />
            </div>

            <div className={styles.buttonContainer}>
              <Button
                onClick={() => router.push('/redefinir-senha/sucesso')}
                icon={faPen}
                type="button"
                label="Editar informações"
                color="secondary"
              />
            </div>

            <div className={styles.buttonContainer}>
              <Button
                onClick={() => router.push('/redefinir-senha/sucesso')}
                icon={faCancel}
                type="button"
                label="Gerenciar desativações"
                color="secondary"
              />
            </div>

            <div className={styles.buttonContainer}>
              <Button
                onClick={() => router.push('/redefinir-senha/sucesso')}
                icon={faTrash}
                type="button"
                label="Excluir quadra"
                color="danger"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

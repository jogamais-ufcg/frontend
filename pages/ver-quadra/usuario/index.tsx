import {
  faClock,
  faGraduationCap,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FreeBackHeader from 'components/FreeBackHeader';

export default function ResetPassword() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <FreeBackHeader></FreeBackHeader>
      </div>

      <div className={styles.pageContainer}>
        <div className={styles.mainInformation}>
          <h2>Quadra de Tenis</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta
            efficitur pulvinar. Ut eget ipsum eget odio viverra auctor auctor ut
            felis. Cras egestas dictum nibh, et porta purus fermentum vitae.
          </p>
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <FontAwesomeIcon icon={faGraduationCap} />
            <span>Exclusivo para membros da UFCG</span>
          </div>

          <div className={styles.info}>
            <FontAwesomeIcon icon={faClock} />
            <span>Abre as 8h30, fecha às 17h</span>
          </div>

          <div className={styles.info}>
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>1h30 de duração do agendamento</span>
          </div>

          <div className={styles.info}>
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>Possui agendamento recorrente</span>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <Button
            onClick={() => router.push('/redefinir-senha/sucesso')}
            icon={faClock}
            type="button"
            label="Beleza, quero agendar!"
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}

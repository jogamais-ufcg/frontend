import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

function FreeBackHeader() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button onClick={() => router.back()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
}

export default FreeBackHeader;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

interface BackHeaderProps {
  title: string;
}

function BackHeader({ title }: BackHeaderProps) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button onClick={() => router.back()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <h1>{title}</h1>
    </div>
  );
}

export default BackHeader;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

interface BackHeaderProps {
  title: string;
  subtitle?: string;
}

function BackHeader({ title, subtitle }: BackHeaderProps) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button onClick={() => router.back()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <div>
        <h1>{title}</h1>
        {subtitle && <h3>{subtitle}</h3>}
      </div>
    </div>
  );
}

export default BackHeader;

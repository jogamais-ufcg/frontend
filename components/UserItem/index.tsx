
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

interface UserItemProps {
  title: string;
  subtitle: string;
  aluno: boolean;
}

function UserItem({
  title,
  subtitle,
}: UserItemProps) {

  return (
    <div className={styles.container}>
      <div>
        <button
          className={styles.infos}>
          <h2>{title}</h2>
          <div className={styles.textSubtitle}>
            <p>{subtitle}</p>
          </div>
          <div className={styles.textColor}>
            <FontAwesomeIcon icon={faGraduationCap} />

            <p >Faço parte da UFCG</p>
          </div>
        </button>
      </div>

    </div>
  );
}

export default UserItem;

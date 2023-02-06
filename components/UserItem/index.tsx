import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import { User } from 'utils/types';

interface UserItemProps {
  user: User;
}

function UserItem({ user }: UserItemProps) {
  return (
    <Link href={`/usuarios/${user.email}`} className={styles.container}>
      <div>
        <button className={styles.infos}>
          <h2>{user.name}</h2>
          <div className={styles.textSubtitle}>
            <p>{user.email}</p>
          </div>
          {user.isUFCGMember && (
            <div className={styles.textColor}>
              <FontAwesomeIcon icon={faGraduationCap} />
              <p>Faço parte da UFCG</p>
            </div>
          )}
        </button>
      </div>
    </Link>
  );
}
export default UserItem;

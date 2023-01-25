import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

interface ScheduleItemProps {
  title: string;
  subtitle: string;
  onDelete?: () => void;
  expandedInformation?: {
    title: string;
    body: string;
  };
}

function ScheduleItem({
  title,
  subtitle,
  onDelete,
  expandedInformation,
}: ScheduleItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.container}>
      <div>
        <button
          className={`${styles.infos} ${
            !isExpanded && styles.infosRoundedNotExpanded
          } ${!isExpanded && !onDelete && styles.infosRoundedStandard}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2>{title}</h2>

          <div>
            <FontAwesomeIcon icon={faClock} />

            <p>{subtitle}</p>
          </div>
        </button>

        {onDelete && (
          <button
            className={`${styles.deleteBtn} ${
              !isExpanded && styles.deleteBtnRounded
            }`}
            onClick={() => onDelete()}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </div>

      {expandedInformation && isExpanded && (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          <h3>{expandedInformation.title}</h3>
          <p>{expandedInformation.body}</p>
        </button>
      )}
    </div>
  );
}

export default ScheduleItem;

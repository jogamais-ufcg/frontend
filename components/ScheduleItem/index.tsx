import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTimes } from '@fortawesome/free-solid-svg-icons';

interface ScheduleItemProps {
  title: string;
  subtitle: string;
  onDelete: () => void;
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
    <div>
      <div>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          <h1>{title}</h1>

          <div>
            <FontAwesomeIcon icon={faClock} />

            {subtitle}
          </div>
        </button>

        <button onClick={() => onDelete()}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
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

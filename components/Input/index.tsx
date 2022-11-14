import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';

interface InputProps {
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'password';
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: FontAwesomeIconProps['icon'];
}

function Input({
  label,
  placeholder,
  type,
  value,
  onChange,
  icon,
}: InputProps) {
  return (
    <div className={styles.container}>
      <label>{label}</label>

      <div>
        {icon && <FontAwesomeIcon icon={icon} />}

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Input;

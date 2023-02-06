import { MouseEvent } from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';

interface ButtonProps {
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  color?: 'primary' | 'secondary' | 'danger';
  type?: 'button' | 'submit' | 'reset';
  icon?: FontAwesomeIconProps['icon'];
  disabled?: boolean;
  isClicked?: boolean;
}

const buttonColors = {
  primary: styles.primaryColor,
  secondary: styles.secondaryColor,
  danger: styles.dangerColor,
};

function Button({
  type,
  label,
  onClick,
  color = 'primary',
  icon,
  disabled,
  isClicked,
}: ButtonProps) {
  return (
    <button
      className={`${styles.container} ${buttonColors[color]} ${
        isClicked && styles.selectedBorder
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
    </button>
  );
}

export default Button;

import { MouseEvent } from 'react';
import styles from './styles.module.css';

interface ButtonProps {
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  color?: 'primary' | 'secondary' | 'danger';
  type?: 'button' | 'submit' | 'reset';
}

const buttonColors = {
  primary: styles.primaryColor,
  secondary: styles.secondaryColor,
  danger: styles.dangerColor,
};

function Button({ type, label, onClick, color = 'primary' }: ButtonProps) {
  return (
    <button
      className={`${styles.container} ${buttonColors[color]}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;

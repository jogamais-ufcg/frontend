import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo } from 'react';
import { useFileInput, InputProps } from './hooks';
import styles from './styles.module.css';

function Input(props: InputProps) {
  const { type, label, placeholder, value } = props;
  const isFileInput = useMemo(() => type === 'file', [type]);

  const { renderedIcon, fileInputId, handleInputChange, fileInputLabel } =
    useFileInput(props);

  return (
    <div
      className={`${styles.container} ${
        isFileInput ? styles.isFileInput : undefined
      }`}
    >
      <label>{label}</label>

      <div>
        {renderedIcon && !isFileInput && (
          <FontAwesomeIcon icon={renderedIcon} />
        )}

        {isFileInput && (
          <label htmlFor={fileInputId}>
            {renderedIcon && <FontAwesomeIcon icon={renderedIcon} />}
            {fileInputLabel}
          </label>
        )}
        <input
          id={fileInputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default Input;

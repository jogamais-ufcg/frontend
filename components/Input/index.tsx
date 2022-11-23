import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo } from 'react';
import InputMask from 'react-input-mask';
import { useFileInput, InputProps } from './hooks';
import styles from './styles.module.css';

function Input(props: InputProps) {
  const { type, label, placeholder, value, mask } = props;
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

        {mask ? (
          <InputMask
            mask={mask}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={handleInputChange}
          />
        ) : (
          <input
            id={fileInputId}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
          />
        )}
      </div>
    </div>
  );
}

export default Input;

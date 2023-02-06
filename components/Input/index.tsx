import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import { useMemo, useState } from 'react';
import InputMask from 'react-input-mask';
import styles from './styles.module.css';

type OnChangeEvent = React.ChangeEvent<HTMLInputElement> &
  React.ChangeEvent<HTMLTextAreaElement>;

interface InputComponentProps {
  onChange?: (event: OnChangeEvent) => void;
  value?: string;
  type: 'text' | 'email' | 'password' | 'number' | 'file' | 'tel' | 'textarea';
  placeholder: string;
  fileInputId?: string;
  disabled?: boolean;
}

type InputProps = InputComponentProps & {
  label?: string;
  mask?: string | (string | RegExp)[];
  icon?: FontAwesomeIconProps['icon'];
  disabled?: boolean;
};

function InputComponent({
  type,
  onChange,
  value,
  placeholder,
  fileInputId,
  disabled,
}: InputComponentProps) {
  if (type === 'textarea') {
    return (
      <textarea placeholder={placeholder} value={value} onChange={onChange} />
    );
  }

  return (
    <input
      id={fileInputId}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

function Input(props: InputProps) {
  const { type, label, placeholder, value, mask, icon, onChange } = props;
  const isFileInput = useMemo(() => type === 'file', [type]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const renderedIcon = useMemo(() => {
    if (type === 'file') {
      return faUpload;
    }

    return icon;
  }, [icon, type]);

  const handleInputChange = (event: OnChangeEvent) => {
    if (isFileInput && 'files' in event.target) {
      const file = event.target.files?.[0];

      if (file) {
        setSelectedFile(file.name);
      } else {
        setSelectedFile(null);
      }
    }

    onChange?.(event);
  };

  const fileInputId = useMemo(() => {
    if (isFileInput) {
      const labelValue = label || placeholder;
      return labelValue.replaceAll(' ', '-').toLowerCase();
    }

    return undefined;
  }, [isFileInput, label, placeholder]);

  const fileInputLabel = useMemo(() => {
    if (selectedFile) {
      return 'Documento selecionado.';
    }

    return placeholder;
  }, [selectedFile, placeholder]);

  return (
    <div
      className={`${styles.container} ${isFileInput ? styles.isFileInput : ''}`}
    >
      {label && <label>{label}</label>}

      <div
        className={`${
          type === 'textarea' ? styles.textareaContainer : styles.inputContainer
        }`}
      >
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
            disabled={props.disabled}
          />
        ) : (
          <InputComponent
            fileInputId={fileInputId}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={handleInputChange}
            disabled={props.disabled}
          />
        )}
      </div>
    </div>
  );
}

export default Input;

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useMemo, useState } from 'react';
import styles from './styles.module.css';

interface InputProps {
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'password' | 'number' | 'file';
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
  const isFileInput = useMemo(() => type === 'file', [type]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const renderedIcon = useMemo(() => {
    if (type === 'file') {
      return faUpload;
    }

    return icon;
  }, [icon, type]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isFileInput) {
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
      return label.replaceAll(' ', '-').toLowerCase();
    }

    return undefined;
  }, [isFileInput, label]);

  return (
    <div
      className={`${styles.container} ${
        isFileInput ? styles.isFileInput : undefined
      }`}
    >
      <label>{label}</label>

      <div>
        {renderedIcon && <FontAwesomeIcon icon={renderedIcon} />}

        {isFileInput && (
          <label htmlFor={fileInputId}>
            {selectedFile ? 'Documento selecionado.' : placeholder}
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

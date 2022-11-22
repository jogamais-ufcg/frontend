import { faUpload } from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { useMemo, useState } from 'react';

export interface InputProps {
  value?: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'file';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: FontAwesomeIconProps['icon'];
  placeholder: string;
}

export function useFileInput({ onChange, icon, type, label, placeholder }: InputProps) {
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

  const fileInputLabel = useMemo(() => {
    if (selectedFile) {
      return 'Documento selecionado.';
    }

    return placeholder
  }, [selectedFile, placeholder]);

  return {
    renderedIcon,
    fileInputId,
    handleInputChange,
    fileInputLabel
  }
}
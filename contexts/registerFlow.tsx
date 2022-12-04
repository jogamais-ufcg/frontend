import { createContext, useState, useContext } from 'react';
import { CreateUser } from 'schemas/user';
import api from 'services/api';

type RegisterFlowContextType =
  | (CreateUser & {
      setName: (name: string) => void;
      setEmail: (email: string) => void;
      setPassword: (password: string) => void;
      setConfirmPassword: (confirmPassword: string) => void;
      setCellphone: (cellphone: string) => void;
      setCpf: (cpf: string) => void;
      setDocumentFront: (documentFront: File | null) => void;
      setDocumentBack: (documentBack: File | null) => void;
      setIsUFCGMember: (isUFCGMember: boolean) => void;
      onSubmit: (payload: CreateUser, onSuccess: () => void) => Promise<void>;
      error: string | null;
      loading: boolean;
    })
  | undefined;

const RegisterFlowContext = createContext<RegisterFlowContextType>(undefined);

interface RegisterFlowProviderProps {
  children: React.ReactNode;
}

export function RegisterFlowProvider({ children }: RegisterFlowProviderProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [cpf, setCpf] = useState('');
  const [documentFront, setDocumentFront] = useState<File | null>(null);
  const [documentBack, setDocumentBack] = useState<File | null>(null);
  const [isUFCGMember, setIsUFCGMember] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (payload: CreateUser, onSuccess: () => void) => {
    setLoading(true);
    const { error: errorMessage } = await api.user.create(payload);
    setLoading(false);

    if (errorMessage) {
      setError(errorMessage);
    } else {
      onSuccess();
    }
  };

  return (
    <RegisterFlowContext.Provider
      value={{
        name,
        email,
        password,
        confirmPassword,
        cellphone,
        cpf,
        documentFront,
        documentBack,
        isUFCGMember,
        setName,
        setEmail,
        setPassword,
        setConfirmPassword,
        setCellphone,
        setCpf,
        setDocumentFront,
        setDocumentBack,
        setIsUFCGMember,
        error,
        loading,
        onSubmit,
      }}
    >
      {children}
    </RegisterFlowContext.Provider>
  );
}

export function useRegisterFlow() {
  const context = useContext(RegisterFlowContext);

  if (context === undefined) {
    throw new Error(
      'useRegisterFlow must be used within a RegisterFlowProvider'
    );
  }

  return context;
}

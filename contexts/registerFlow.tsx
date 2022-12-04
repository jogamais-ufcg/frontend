import { createContext, useState, useContext } from 'react';
import api from 'services/api';

interface FirstStepData {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  isUFCGMember: boolean;
}

type SecondStepData =
  | {
      cpf: string;
      documentFront: File;
      documentBack: File;
    }
  | {
      cpf: string;
      enrollment: string;
      enrollmentDocument: File;
    };

type RegisterFlowContextType =
  | {
      firstStepData?: FirstStepData;
      confirmFirstStep: (data: FirstStepData) => void;
      confirmRegistration: (data: SecondStepData) => Promise<boolean>;
      error: string | null;
      loading: boolean;
    }
  | undefined;

const RegisterFlowContext = createContext<RegisterFlowContextType>(undefined);

interface RegisterFlowProviderProps {
  children: React.ReactNode;
}

export function RegisterFlowProvider({ children }: RegisterFlowProviderProps) {
  const [firstStepData, setFirstStepData] = useState<FirstStepData>();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const confirmRegistration = async (data: SecondStepData) => {
    if (!firstStepData || !data) {
      return false;
    }

    setError(null);
    setLoading(true);
    const { error: errorMessage } = await api.user.create({
      ...firstStepData,
      ...data,
    });
    setLoading(false);

    if (errorMessage) {
      setError(errorMessage);
      return false;
    }

    setFirstStepData(undefined);
    return true;
  };

  return (
    <RegisterFlowContext.Provider
      value={{
        firstStepData,
        confirmFirstStep: setFirstStepData,
        confirmRegistration,
        error,
        loading,
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

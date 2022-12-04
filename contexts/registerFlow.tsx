import { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from 'services/api';
import {
  FirstStepData,
  rgStepSchema,
  SecondStepData,
  studentStepSchema,
} from 'schemas/registration';
import { isValid } from 'utils/yup';

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
    if (!firstStepData) {
      return false;
    }

    if ('enrollment' in data) {
      if (!isValid(studentStepSchema, data)) {
        return false;
      }
    } else if (!isValid(rgStepSchema, data)) {
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

  useEffect(() => {
    if (error) {
      toast.error(error);
      setError(null);
    }
  }, [error]);

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

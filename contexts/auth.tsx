import { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import api from 'services/api';
import * as storage from 'services/storage';

type AuthContextType =
  | {
      accessToken?: string;
      user?: unknown;
      loading: boolean;
      login: (email: string, password: string) => Promise<boolean>;
    }
  | undefined;

const AuthContext = createContext<AuthContextType>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string>();
  const [user, setUser] = useState<unknown>();

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);

      const loginResponse = await api.auth.login(email, password);
      const { access_token } = loginResponse.data;
      storage.setToken(access_token);

      const userResponse = await api.user.get(email);
      const user = userResponse.data;

      storage.login(access_token, user);
      setAccessToken(access_token);
      setUser(user);

      setLoading(false);
      return true;
    } catch (error) {
      setLoading(false);
      storage.logout();

      toast.error('Erro ao realizar login');
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        accessToken,
        user,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(
      'useRegisterFlow must be used within a RegisterFlowProvider'
    );
  }

  return context;
}

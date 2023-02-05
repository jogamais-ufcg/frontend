import { useRouter } from 'next/router';
import { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from 'services/api';
import * as storage from 'services/storage';
import { User } from 'utils/types';

type AuthContextType =
  | {
      accessToken?: string | null;
      user?: User | null;
      loading: boolean;
      login: (email: string, password: string) => Promise<boolean>;
      logout: () => void;
      updateUser: (user: User, accessToken: string) => void;
    }
  | undefined;

const AuthContext = createContext<AuthContextType>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = storage.getUser();
    const savedToken = storage.getToken();

    if (savedToken && savedUser) {
      setAccessToken(savedToken);
      setUser(savedUser);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);

      const loginResponse = await api.auth.login(email, password);
      const { access_token } = loginResponse.data;
      storage.setToken(access_token);

      const { data: userReponse } = await api.user.get(email);

      const permissions = userReponse.permissions.map(
        (permission: { id: number; description: string }) =>
          permission.description
      );

      userReponse.isAdmin = permissions.includes('ADMIN');

      storage.login(access_token, userReponse);
      setAccessToken(access_token);
      setUser(userReponse);

      setLoading(false);
      return true;
    } catch (error) {
      storage.logout();
      setLoading(false);

      toast.error('Erro ao realizar login, verifique suas credenciais!');
      return false;
    }
  };

  const logout = () => {
    router.push('/login');
    storage.logout();
    setAccessToken(null);
    setUser(null);

    toast.success('Logout realizado com sucesso!');
  };

  const updateUser = (user: User, accessToken: string) => {
    setUser(user);
    storage.login(accessToken, user);
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        accessToken,
        user,
        login,
        logout,
        updateUser,
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

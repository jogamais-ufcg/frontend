import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import * as storage from 'services/storage';

export function usePrivateRoute(onlyAdmin = false) {
  const router = useRouter();

  useEffect(() => {
    const user = storage.getUser();
    const notLogged = !user;
    const notAdmin = user && !user.isAdmin;

    if (notLogged || (onlyAdmin && notAdmin)) {
      router.replace('/');
      toast.warning('Você não tem permissão para acessar essa página');
    }
  }, [router, onlyAdmin]);
}

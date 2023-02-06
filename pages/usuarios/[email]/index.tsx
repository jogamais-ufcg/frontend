import {
  faEnvelope,
  faCircleUser,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import Input from '../../../components/Input';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import Button from '../../../components/Button';
import PageContainer from '../../../components/PageContainer';
import BackHeader from '../../../components/BackHeader';
import { usePrivateRoute } from 'hooks/session';
import { useCallback, useEffect, useState } from 'react';
import api from 'services/api';
import { User } from 'utils/types';

export default function Login() {
  usePrivateRoute();

  const router = useRouter();
  const { email } = router.query;
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const getSelectedUser = useCallback(async () => {
    if (email) {
      const { data } = await api.user.get(email as string);
      setSelectedUser(data);
    }
  }, [email]);

  useEffect(() => {
    getSelectedUser();
  }, [getSelectedUser]);

  return (
    <PageContainer headTitle="Login">
      <BackHeader title="Ver Detalhes"></BackHeader>

      <div className={styles.inputContainer}>
        <Input
          icon={faCircleUser}
          label="Nome Completo"
          placeholder="Nome Completo"
          type="text"
          value={selectedUser?.name}
          disabled
        />

        <Input
          icon={faEnvelope}
          label="Email"
          placeholder="meumelhor@email.com"
          type="email"
          value={selectedUser?.email}
          disabled
        />

        <Input
          icon={faPhone}
          label="Número do Whatsapp"
          mask="(99) 9 9999-9999"
          placeholder="(99) 9 9999-9999"
          type="tel"
          value={selectedUser?.phoneNumber}
          disabled
        />
      </div>

      <div className={styles.buttonContainer}>
        <Button
          icon={faPhone}
          onClick={() =>
            window.open(`https://wa.me/${selectedUser?.phoneNumber}`, '_blank')
          }
          type="button"
          label="Enviar mensagem"
          color="primary"
        />
      </div>

      <div className={styles.redefinir}>
        <p>Não garantimos que o Whatsapp esteja disponível</p>
      </div>

      {/* <div className={styles.buttonContainer}>
        <Button
          icon={faBan}
          onClick={() => router.push('/login')} //ajustar rota!
          type="button"
          label="Bloquear"
          color="secondary"
        />
      </div> */}
    </PageContainer>
  );
}

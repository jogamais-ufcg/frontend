import {
  faEnvelope,
  faCircleUser,
  faPhone,
  faBan,
} from '@fortawesome/free-solid-svg-icons';
import Input from '../../../components/Input';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import Button from '../../../components/Button';
import PageContainer from '../../../components/PageContainer';
import BackHeader from '../../../components/BackHeader';

export default function Login() {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { email } = router.query;

  return (
    <PageContainer headTitle="Login">
      <BackHeader title="Ver Detalhes"></BackHeader>

      <div className={styles.inputContainer}>
        <Input
          icon={faCircleUser}
          label="Nome Completo"
          placeholder="Nome Completo"
          type="text"
        />

        <Input
          icon={faEnvelope}
          label="Email"
          placeholder="meumelhor@email.com"
          type="email"
        />

        <Input
          icon={faPhone}
          label="Número do Whatsapp"
          mask="(99) 9 9999-9999"
          placeholder="(99) 9 9999-9999"
          type="tel"
        />
      </div>

      <div className={styles.buttonContainer}>
        <Button
          icon={faPhone}
          onClick={() => router.push('/login')} //ajustar rota!
          type="button"
          label="Enviar mensagem"
          color="primary"
        />
      </div>

      <div className={styles.redefinir}>
        <p>Não garantimos que o Whatsapp esteja disponível</p>
      </div>

      <div className={styles.buttonContainer}>
        <Button
          icon={faBan}
          onClick={() => router.push('/login')} //ajustar rota!
          type="button"
          label="Bloquear "
          color="secondary"
        />
      </div>
    </PageContainer>
  );
}

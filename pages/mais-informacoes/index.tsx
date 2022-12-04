import {
  faCheck,
  faEnvelope,
  faCircleUser,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/Input';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import PageContainer from '../../components/PageContainer';
import BackHeader from 'components/BackHeader';

export default function Login() {
  const router = useRouter();

  return (
    <PageContainer headTitle="Login">
      <BackHeader title="Mais informações"></BackHeader>

      <div className={styles.inputsContainer}>
        <Input
          icon={faEnvelope}
          label="Email"
          placeholder="meumelhor@email.com"
          type="email"
        />

        <Input
          icon={faCircleUser}
          label="Nome Completo"
          placeholder="Nome Completo"
          type="text"
        />

        <Input
          icon={faPhone}
          label="Número do Whatsapp"
          mask="(99) 9 9999-9999"
          placeholder="(99) 9 4002-8922"
          type="tel"
        />

        <Input
          label="Lista de Jogadores"
          placeholder="Preencher com espaços separados por vírgulas ou adicionando novas linhas."
          type="textarea"
        />
      </div>

      <div className={styles.buttonContainer}>
        <Button
          icon={faCheck}
          onClick={() => router.push('/login')}
          type="button"
          label="Confirmar"
          color="primary"
        />
      </div>
    </PageContainer>
  );
}

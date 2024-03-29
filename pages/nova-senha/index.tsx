import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logo from '../../public/brand/logo.png';
import { faLock, faSignIn } from '@fortawesome/free-solid-svg-icons';
import PageContainer from '../../components/PageContainer';

export default function NewPassword() {
  const router = useRouter();
  return (
    <PageContainer headTitle="Redefinir senha">
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="Joga Mais UFCG" />
      </div>

      <div className={styles.mainInformation}>
        <h1>Redefinir Senha</h1>
      </div>

      <div className={styles.inputsContainer}>
        <Input
          icon={faLock}
          label="Nova senha"
          placeholder="Digite aqui sua senha"
          type="password"
        />

        <Input
          icon={faLock}
          label="Confirme sua nova senha"
          placeholder="Confirme sua senha"
          type="password"
        />
      </div>

      <div className={styles.button}>
        <Button
          icon={faSignIn}
          onClick={() => router.push('/nova-senha/sucesso')}
          type="button"
          label="Confirmar redefinição"
        />
      </div>
    </PageContainer>
  );
}

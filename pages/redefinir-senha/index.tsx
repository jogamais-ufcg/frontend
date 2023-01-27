import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import cellphone from '../../public/illustrations/cellphone.svg';
import Input from '../../components/Input';
import Image from 'next/image';
import Button from '../../components/Button';
import PageContainer from '../../components/PageContainer';
import styles from './styles.module.css';
import logo from '../../public/brand/logo.png';
import { useRouter } from 'next/router';

export default function ResetPassword() {
  const router = useRouter();

  return (
    <PageContainer headTitle="Redefinir senha">
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="Joga Mais UFCG" />
      </div>

      <div className={styles.mainInformation}>
        <h1>Redefinir Senha</h1>
      </div>

      <div className={styles.inputContainer}>
        <Input
          icon={faEnvelope}
          label="Email cadastrado"
          placeholder="meumelhor@email.com"
          type="email"
        />
      </div>

      <div className={styles.buttonContainer}>
        <Button
          onClick={() => router.push('/redefinir-senha/verificar-email')}
          type="button"
          label="Confirmar"
          color="primary"
        />
      </div>

      <div className={styles.cellphoneContainer}>
        <Image
          className={styles.cellphone}
          src={cellphone}
          alt="Pessoa ao lado de um celular"
        />
      </div>
    </PageContainer>
  );
}

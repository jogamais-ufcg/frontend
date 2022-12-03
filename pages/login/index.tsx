import { faEnvelope, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from 'public/brand/logo.png';
import Button from 'components/Button';
import Input from 'components/Input';
import PageContainer from 'components/PageContainer';

export default function Login() {
  const router = useRouter();

  return (
    <PageContainer headTitle="Login">
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="Joga Mais UFCG" />
      </div>

      <div className={styles.mainInformation}>
        <h1>Realizar Login</h1>
      </div>

      <div className={styles.inputContainer}>
        <Input
          icon={faEnvelope}
          label="Email"
          placeholder="meumelhor@email.com"
          type="email"
        />

        <Input
          icon={faLock}
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
        />
      </div>

      <div className={styles.redefinir}>
        <p>Esqueceu a senha?</p>
        <Link href="/redefinir-senha">Redefinir</Link>
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

      <div className={styles.footer}>
        <p>Não tem uma conta?</p>
        <Link href="/cadastrar">Cadastrar-se</Link>
      </div>
    </PageContainer>
  );
}

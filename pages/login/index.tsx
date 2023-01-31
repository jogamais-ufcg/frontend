import { useState } from 'react';
import { faEnvelope, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import Button from 'components/Button';
import Input from 'components/Input';
import PageContainer from 'components/PageContainer';
import api from 'services/api';
import logo from 'public/brand/logo.png';
import styles from './styles.module.css';

export default function Login() {
  // const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = async () => {
    try {
      const response = await api.auth.login(email, password);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageContainer headTitle="Login">
      <Link href="/" className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="Joga Mais UFCG" />
      </Link>

      <div className={styles.mainInformation}>
        <h1>Realizar Login</h1>
      </div>

      <div className={styles.inputContainer}>
        <Input
          icon={faEnvelope}
          label="Email"
          placeholder="meumelhor@email.com"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          icon={faLock}
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.redefinir}>
        <p>Esqueceu a senha?</p>
        <Link href="/redefinir-senha">Redefinir</Link>
      </div>

      <div className={styles.buttonContainer}>
        <Button
          icon={faCheck}
          onClick={() => submitForm()}
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

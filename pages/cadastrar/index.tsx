import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logo from '../../public/brand/logo.png';
import {
  faEnvelope,
  faCircleUser,
  faPhone,
  faLock,
  faSignIn,
} from '@fortawesome/free-solid-svg-icons';

export default function Register() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Cadastrar | Joga+ UFCG</title>
      </Head>

      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="Joga Mais UFCG" />
      </div>

      <div className={styles.mainInformation}>
        <h1>Realizar Cadastro</h1>
      </div>

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
          label="Telefone"
          placeholder="(99) 9 9999-9999"
          type="text"
        />

        <Input
          icon={faLock}
          label="Senha"
          placeholder="Digite aqui sua senha"
          type="password"
        />

        <Input
          icon={faLock}
          label="Confirme sua Senha"
          placeholder="Confirme sua senha"
          type="password"
        />
      </div>

      <div className={styles.confirmAluno}>
        <input type="checkbox" id="checkbox-1"></input>
        <label htmlFor="checkbox-1">Confirmo que sou aluno(a) da UFCG</label>
      </div>

      <div className={styles.button}>
        <Button
          icon={faSignIn}
          onClick={() => router.push('/documentos')}
          type="button"
          label="Próxima etapa"
        />
      </div>

      <div className={styles.footer}>
        <p>Já tem uma conta?</p>
        <Link href="/login">Fazer Login</Link>
      </div>
    </div>
  );
}

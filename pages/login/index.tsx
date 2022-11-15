import Head from 'next/head';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/Input';
import styles from './styles.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login | Joga+ UFCG</title>
      </Head>

      <Input
        icon={faEnvelope}
        label="Email"
        placeholder="meumelhor@email.com"
        type="email"
      />
    </div>
  );
}

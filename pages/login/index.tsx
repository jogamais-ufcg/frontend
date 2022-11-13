import Head from 'next/head';
import styles from './styles.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login - Joga+ UFCG</title>
      </Head>

      <h1>Login</h1>
    </div>
  );
}

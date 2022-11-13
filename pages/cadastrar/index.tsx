import Head from 'next/head';
import styles from './styles.module.css';

export default function Register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cadastrar | Joga+ UFCG</title>
      </Head>

      <h1>Cadastrar</h1>
    </div>
  );
}

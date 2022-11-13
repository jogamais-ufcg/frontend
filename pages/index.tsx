import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joga+ UFCG</title>
        <meta
          name="description"
          content="Todas as quadras da UFCG disponíveis para agendamento fácil pelo site"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home de login</h1>
    </div>
  );
}

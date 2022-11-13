import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quadras - Joga+ UFCG</title>
        <meta name="description" content="Todas as quadras da UFCG disponíveis para agendamento fácil pelo site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Listagem de quadras</h1>
    </div>
  )
}

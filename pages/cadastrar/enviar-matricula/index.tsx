import Head from 'next/head';
import Input from '../../../components/Input';
import styles from './styles.module.css';

export default function SendEnrollment() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Enviar Matrícula | Joga+ UFCG</title>
      </Head>

      <Input
        label="RDM ou outro documento similar"
        placeholder="Realizar upload do arquivo"
        type="file"
      />
    </div>
  );
}

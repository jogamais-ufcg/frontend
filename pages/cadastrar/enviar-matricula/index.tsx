import Head from 'next/head';
import BackHeader from '../../../components/BackHeader';
import Input from '../../../components/Input';
import styles from './styles.module.css';

export default function SendEnrollment() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Enviar Matrícula | Joga+ UFCG</title>
      </Head>

      <BackHeader title="Enviar documentos" />

      <Input
        label="RDM ou outro documento similar"
        placeholder="Realizar upload do arquivo"
        type="file"
      />
    </div>
  );
}

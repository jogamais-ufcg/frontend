import Head from 'next/head';
import Input from '../../../components/Input';
import styles from './styles.module.css';

export default function SendIdentity() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Enviar RG | Joga+ UFCG</title>
      </Head>

      <Input
        label="Frente do documento"
        placeholder="Realizar upload do arquivo"
        type="file"
      />
    </div>
  );
}

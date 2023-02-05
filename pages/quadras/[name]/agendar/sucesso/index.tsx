import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button';
import logo from '../../../../../public/brand/logo.png';
import hand from '../../../../../public/illustrations/hand.svg';
import styles from './styles.module.css';

export default function ScheduleSuccess() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Agendamento | Joga+ UFCG</title>
      </Head>
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="Joga Mais UFCG" />
      </div>
      <div className={styles.mainInformation}>
        <h1>Seu agendamento foi realizado com sucesso. </h1>
        <p>
          Fique de olho no seu email, qualquer notificação sobre o status do
          agendamento pode ser enviada por lá!
        </p>
      </div>

      <div className={styles.handContainer}>
        <Image
          className={styles.hand}
          src={hand}
          alt="Mão Segurando Telefone"
        />
      </div>

      <div className={styles.buttonsContainer}>
        <Button
          icon={faArrowLeft}
          onClick={() => router.replace('/quadras')}
          type="button"
          label="Voltar para as quadras"
          color="secondary"
        />
      </div>
    </div>
  );
}

import Image from 'next/image';
// import { useRouter } from 'next/router';
import logo from '../../../public/brand/logo.png';
import email from '../../../public/illustrations/email.svg';
import styles from './styles.module.css';
import Button from '../../../components/Button';
import PageContainer from '../../../components/PageContainer';
import { faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
import { usePrivateRoute } from 'hooks/session';

export default function ResSolicitation() {
  usePrivateRoute(true);
  // const router = useRouter();

  return (
    <PageContainer headTitle="Responder solicitacao">
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="Joga Mais UFCG" />
      </div>

      <div className={styles.mainInformation}>
        <h1>Responder Solicitação</h1>
        <p>De Davi Gomes Passos</p>
      </div>

      <div className={styles.handContainer}>
        <Image className={styles.hand} src={email} alt="Email Enviado" />
      </div>

      <div className={styles.button}>
        <Button
          icon={faCheck}
          type="button"
          label="Confirmar cadastro"
          color="primary"
        />
      </div>
      <div className={styles.button}>
        <Button
          icon={faBan}
          type="button"
          label="Rejeitar cadastro"
          color="danger"
        />
      </div>
    </PageContainer>
  );
}

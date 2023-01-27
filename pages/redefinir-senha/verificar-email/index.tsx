import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../../../public/brand/logo.png';
import email from '../../../public/illustrations/email.svg';
import styles from './styles.module.css';
import Button from '../../../components/Button';
import PageContainer from '../../../components/PageContainer';

export default function ResetPasswordEmail() {
  const router = useRouter();

  return (
    <PageContainer headTitle="Redefinir senha">
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="Joga Mais UFCG" />
      </div>

      <div className={styles.handContainer}>
        <Image
          className={styles.hand}
          src={email}
          alt="Mão Segurando Telefone"
        />
      </div>
      <div className={styles.mainInformation}>
        <h1>Se liga, verifica seu email!</h1>
        <p>
          Mandamos um email com o link de acesso para a redefinição da sua senha
          de acesso!
        </p>
      </div>

      <div className={styles.buttonsContainer}>
        <Button
          type="button"
          label="👀 Dar uma olhadinha nas quadras"
          color="secondary"
          onClick={() => router.push('/quadras')}
        />
      </div>
    </PageContainer>
  );
}

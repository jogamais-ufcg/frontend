import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from 'public/brand/logo.png';
import hand from 'public/illustrations/hand.svg';
import styles from './styles.module.css';
import Button from 'components/Button';
import PageContainer from 'components/PageContainer';

export default function SignInConfirmation() {
  const router = useRouter();

  return (
    <PageContainer headTitle="Cadastro confirmado">
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="Joga Mais UFCG" />
      </div>
      <div className={styles.mainInformation}>
        <h1>Cadastro realizado com sucesso!</h1>
        <p>
          O pedido de confirmação foi enviado por email para o usuário
          solicitante.
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
          type="button"
          onClick={() => router.push('/quadras')}
          label="👀 Dar uma olhadinha nas quadras"
          color="secondary"
        />
      </div>
    </PageContainer>
  );
}

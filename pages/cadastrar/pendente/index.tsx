import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../../../public/brand/logo.png';
import hand from '../../../public/illustrations/hand.svg';
import styles from './styles.module.css';
import Button from '../../../components/Button';
import PageContainer from '../../../components/PageContainer';

export default function SignInPendent() {
  const router = useRouter();

  return (
    <PageContainer headTitle="Cadastro pendente">
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="Joga Mais UFCG" />
      </div>
      <div className={styles.mainInformation}>
        <h1>Boaa, seu cadastro está pendente de confirmação!</h1>
        <p>
          Fique de olho no seu email, vamos te avisar por lá assim que ele for
          aprovado!
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
          label="👀 Dar uma olhadinha nas quadras"
          color="secondary"
          onClick={() => router.push('/quadras')}
        />
      </div>
    </PageContainer>
  );
}

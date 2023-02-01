import Image from 'next/image';
import { useRouter } from 'next/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../public/brand/logo.png';
import hand from '../../../public/illustrations/hand.svg';
import styles from './styles.module.css';
import Button from '../../../components/Button';
import PageContainer from '../../../components/PageContainer';

export default function ResetPasswordSucess() {
  const router = useRouter();

  return (
    <PageContainer headTitle="Redefinir senha">
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="Joga Mais UFCG" />
      </div>
      <div className={styles.mainInformation}>
        <h1>Show de bola,deu bom!</h1>
        <p>
          A sua senha foi redefinida com sucesso, você já pode realizar login
          com as novas credenciais.
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
          onClick={() => router.push('/login')}
          type="button"
          label=" Voltar para a tela de login"
          color="secondary"
        />
      </div>
    </PageContainer>
  );
}

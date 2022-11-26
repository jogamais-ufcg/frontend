import Image from 'next/image';
import { useRouter } from 'next/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';
import PageContainer from '../components/PageContainer';
import logo from '../public/brand/logo.png';
import styles from '../styles/404.module.css';

export default function Custom404() {
  const router = useRouter();

  return (
    <PageContainer headTitle="Redefinir senha">
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="Joga Mais UFCG" />
      </div>
      <div className={styles.mainInformation}>
        <h1>Erro 404</h1>
        <p>
          Infelizmente a sua página não foi encontrada, verifique a URL e tente
          novamente.
        </p>
      </div>

      <div className={styles.buttonsContainer}>
        <Button
          icon={faArrowLeft}
          onClick={() => router.push('/')}
          type="button"
          label="Voltar para o início"
          color="secondary"
        />
      </div>
    </PageContainer>
  );
}

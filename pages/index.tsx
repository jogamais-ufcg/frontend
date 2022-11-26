import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import logo from '../public/brand/logo.png';
import Button from '../components/Button';
import styles from '../styles/Home.module.css';
import PageContainer from '../components/PageContainer';

export default function Home() {
  const router = useRouter();

  return (
    <PageContainer headTitle="Início">
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="Joga Mais UFCG" />
      </div>

      <div className={styles.mainInformation}>
        <h1>Agende com tranquilidade o seu horário</h1>
        <p>
          Todas as quadras da UFCG estão disponíveis para agendamento fácil pelo
          site, acesse ou crie a sua conta!
        </p>
      </div>

      <div className={styles.buttonsContainer}>
        <Button
          type="button"
          label="👀 Dar uma olhadinha nas quadras"
          color="secondary"
        />
        <Button
          icon={faSignIn}
          onClick={() => router.push('/login')}
          type="button"
          label="Realizar login"
          color="primary"
        />
      </div>

      <div className={styles.footer}>
        <p>Não tem uma conta?</p>
        <Link href="/cadastrar">Cadastre-se</Link>
      </div>
    </PageContainer>
  );
}

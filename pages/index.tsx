import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../public/brand/logo.png';
import Button from '../components/Button';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
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
          onClick={() => router.push('/login')}
          type="button"
          label="Realizar login"
        />
      </div>

      <div className={styles.footer}>
        <p>Não tem uma conta?</p>
        <Link href="/cadastrar">Cadastre-se</Link>
      </div>
    </div>
  );
}

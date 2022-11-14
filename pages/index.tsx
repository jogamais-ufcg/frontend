import Image from 'next/image';
import styles from '../styles/Home.module.css';
import icon from '../public/brand/icon.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={icon} alt="Joga Mais UFCG" />
      </div>

      <div className={styles.mainInformation}>
        <h1>Agende com tranquilidade o seu horário</h1>
        <p>
          Todas as quadras da UFCG estão disponíveis para agendamento fácil pelo
          site, acesse ou crie a sua conta!
        </p>
      </div>

      <div>
        <button type="button">Dar uma olhadinha nas quadras</button>
        <button type="button">Realizar login</button>
      </div>
    </div>
  );
}

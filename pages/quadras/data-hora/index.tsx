import {
  faInfoCircle,
  faClock,
  faBookOpen,
  faPrint
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import Button from '../../../components/Button';
import PageContainer from '../../../components/PageContainer';
import BackHeader from '../../../components/BackHeader';
import { Calendar } from 'react-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function DateHour() {
  const router = useRouter();

  return (
    <PageContainer headTitle="Data e Hora">
      <BackHeader title="Escolher data e horário"></BackHeader>


      <Calendar></Calendar>

      <div className={styles.textArea}>
      <div className={styles.textR}><FontAwesomeIcon icon={faClock} color="38B6FF"/></div>
      <p> Horários Disponíveis para o dia </p> 
      <div className={styles.textL}><p color="38B6FF"> 25/12/2022</p></div>
      </div>
      
      <div className={styles.buttonContainer}>
          <div className={styles.buttonR}>
            <Button
            type="button"
            label="8h00"
            color="secondary"
            />
          </div>

          <Button
          type="button"
          label="9h30"
          color="secondary"
          />

          <div className={styles.buttonL}>
            <Button
            type="button"
            label="11h00"
            color="secondary"
            />
          </div>
          
      </div>

        <div className={styles.buttonContainer}>
          <div className={styles.buttonR}>
            <Button
            type="button"
            label="12h30"
            color="secondary"
            />
          </div>

          <Button
          type="button"
          label="14h00"
          color="secondary"
          />

          <div className={styles.buttonL}>
            <Button
            type="button"
            label="15h30"
            color="secondary"
            />
          </div>

      </div>

      <div className={styles.buttonContainer}>
        <Button
          icon={faInfoCircle}
          onClick={() => router.push('/quadras/detalhes')} //ajustar rota!
          type="button"
          label="Show, vamos aos detalhes!"
          color="primary"
        />
      </div>
      
      <div className={styles.buttonContainer}>
        <Button
          icon={faBookOpen}
          onClick={() => router.push('/quadras/detalhes')} //ajustar rota!
          type="button"
          label="Listar agendamentos"
          color="secondary"
        />
      </div>

      <div className={styles.buttonContainer}>
        <Button
          icon={faPrint}
          onClick={() => router.push('/quadras/detalhes')} //ajustar rota!
          type="button"
          label="Imprimir Agendamentos"
          color="secondary"
        />
      </div>


    </PageContainer>
  );
}

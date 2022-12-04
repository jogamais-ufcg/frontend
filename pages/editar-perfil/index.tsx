import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faMobileButton,
  faPen,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import Button from 'components/Button';
import Input from 'components/Input';
import PageContainer from 'components/PageContainer';
import BackHeader from 'components/BackHeader';
import { useState } from 'react';

export default function EditProfile() {
  const [isStudent] = useState(true);
  const router = useRouter();

  return (
    <PageContainer headTitle="editProfile">
      <BackHeader title="Editar Perfil"></BackHeader>

      <div className={styles.inputContainer}>
        <div className={styles.nomeContainer}>
          <Input
            icon={faCircleUser}
            label="Nome Completo"
            placeholder="Nome Completo"
            type="text"
          />
          {isStudent && (
            <p>
              <FontAwesomeIcon
                icon={faGraduationCap}
                className={styles.graduationCap}
              />{' '}
              Faz parte da UFCG
            </p>
          )}
        </div>

        <div className={styles.celularContainer}>
          <Input
            icon={faMobileButton}
            label="Número do celular"
            mask="(99) 9 9999-9999"
            placeholder="(99) 9 9999-9999"
            type="tel"
          />
          <p>Preferencialmente preencha com Whatsapp disponível</p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button
          icon={faPen}
          onClick={() => router.push('/login')} //ajustar rota!
          type="button"
          label="Editar informações "
          color="primary"
        />
      </div>
    </PageContainer>
  );
}

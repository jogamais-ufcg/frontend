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
import { useAuth } from 'contexts/auth';
import { useState } from 'react';
import api from '../../services/api';
import { usePrivateRoute } from 'hooks/session';

export default function EditProfile() {
  usePrivateRoute();

  const router = useRouter();
  const auth = useAuth();
  const [isStudent] = useState(true);
  const [name, setName] = useState(auth.user?.name);
  const [phone, setPhone] = useState(auth.user?.phoneNumber);

  const editProfile = async () => {
    if (name == undefined || name == '') {
      setName(auth.user?.name);
    }

    if (phone == undefined || phone == '') {
      setPhone(auth.user?.phoneNumber);
    }

    const id = auth.user?.id;
    const response = await api.user.editUser({
      name: name,
      cellphone: phone,
      id,
    });

    if (auth.accessToken != undefined) {
      auth.updateUser(response.data, auth.accessToken);
    }

    router.push('/quadras');
  };

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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setPhone(e.target.value)}
          />
          <p>Preferencialmente preencha com Whatsapp disponível</p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button
          icon={faPen}
          onClick={() => editProfile()} //ajustar rota!
          type="button"
          label="Editar informações "
          color="primary"
        />
      </div>
    </PageContainer>
  );
}

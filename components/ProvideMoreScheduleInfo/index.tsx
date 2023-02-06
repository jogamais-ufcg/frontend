import {
  faCheck,
  faEnvelope,
  faCircleUser,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import Input from 'components/Input';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import Button from 'components/Button';
import PageContainer from 'components/PageContainer';
import BackHeader from 'components/BackHeader';
import { useMemo, useState } from 'react';
import { Court } from 'utils/types';
import { useAuth } from 'contexts/auth';
import api from 'services/api';
import { toast } from 'react-toastify';

interface MoreInformationProps {
  selectedCourt: Court | null;
  selectedDate: Date;
}

export default function MoreInformation({
  selectedCourt,
  selectedDate,
}: MoreInformationProps) {
  const { user } = useAuth();
  const router = useRouter();

  const isAdmin = useMemo(() => user?.isAdmin, [user]);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [playersList, setPlayersList] = useState('');

  const confirmSchedule = async () => {
    if (!selectedCourt || !user || !playersList) {
      toast.error('Preencha todas as informações!');
      return;
    }

    const { error } = await api.appointment.createForUser({
      courtId: selectedCourt?.idCourt,
      userId: user?.id,
      date: selectedDate,
      playersList,
    });

    if (error) {
      toast.error(error);
      return;
    }

    router.replace(`/quadras/${selectedCourt?.name}/agendar/sucesso`);
  };

  return (
    <PageContainer headTitle="MoreInformation">
      <BackHeader title="Mais informações"></BackHeader>

      <div className={styles.inputsContainer}>
        {isAdmin && (
          <div className={styles.adminInputsContainer}>
            <Input
              icon={faEnvelope}
              label="Email"
              placeholder="meumelhor@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              icon={faCircleUser}
              label="Nome Completo"
              placeholder="Nome Completo"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              icon={faPhone}
              label="Número do Whatsapp"
              mask="(99) 9 9999-9999"
              placeholder="(99) 9 4002-8922"
              type="tel"
              value={cellphone}
              onChange={(e) => setCellphone(e.target.value)}
            />
          </div>
        )}

        <div className={styles.textArea}>
          <Input
            label="Lista de Jogadores"
            placeholder="Preencher com espaços separados por vírgulas ou adicionando novas linhas."
            type="textarea"
            value={playersList}
            onChange={(e) => setPlayersList(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button
          icon={faCheck}
          onClick={confirmSchedule}
          type="button"
          label="Confirmar"
          color="primary"
        />
      </div>
    </PageContainer>
  );
}

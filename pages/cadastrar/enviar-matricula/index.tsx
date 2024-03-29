import { useState } from 'react';
import { toast } from 'react-toastify';
import { faCheck, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useRegisterFlow } from 'contexts/registerFlow';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BackHeader from 'components/BackHeader';
import Button from 'components/Button';
import Input from 'components/Input';
import PageContainer from 'components/PageContainer';
import styles from './styles.module.css';
import { keepOnlyDigits } from 'utils/strings';

export default function SendEnrollment() {
  const router = useRouter();
  const flow = useRegisterFlow();

  const [cpf, setCpf] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [enrollmentDocument, setEnrollmentDocument] = useState<File | null>(
    null
  );

  const onSubmit = async () => {
    if (enrollmentDocument === null) {
      toast.error('É necessário enviar o documento da matrícula');
      return;
    }

    const success = await flow.confirmRegistration({
      cpf: keepOnlyDigits(cpf),
      enrollment,
      documentFront: enrollmentDocument,
    });

    if (!success) {
      return;
    }

    router.push('/cadastrar/sucesso');
  };

  return (
    <PageContainer headTitle="Enviar Matrícula">
      <BackHeader title="Enviar documentos" />

      <p className={styles.pageInformation}>
        A administração da UFCG precisa validar os seus documentos para permitir
        o seu cadastro na plataforma.
      </p>

      <div className={styles.inputsContainer}>
        <div>
          <h3>Seu comprovante de matrícula</h3>

          <p>
            Se você for aluno(a), envie um documento que comprove o seu vínculo
            ativo com a universidade.
          </p>
        </div>

        <Input
          icon={faUserCircle}
          label="Número da matrícula"
          type="number"
          placeholder="Somente números"
          value={enrollment}
          onChange={(event) => setEnrollment(event.target.value)}
        />

        <Input
          icon={faUserCircle}
          label="Número do CPF"
          type="tel"
          placeholder="Somente números"
          mask="999.999.999-99"
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
        />

        <Input
          label="RDM ou outro documento similar"
          placeholder="Realizar upload do arquivo"
          type="file"
          onChange={(event) =>
            event.target.files && setEnrollmentDocument(event.target.files[0])
          }
        />
      </div>

      <div className={styles.button}>
        <Button
          icon={faCheck}
          onClick={onSubmit}
          type="button"
          label={flow.loading ? 'Enviando...' : 'Confirmar'}
          color="primary"
          disabled={flow.loading}
        />
      </div>

      <div className={styles.footer}>
        <p>Já tem uma conta?</p>
        <Link href="/login">Fazer Login</Link>
      </div>
    </PageContainer>
  );
}

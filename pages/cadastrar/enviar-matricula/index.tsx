import { faCheck, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useRegisterFlow } from 'contexts/registerFlow';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BackHeader from 'components/BackHeader';
import Button from 'components/Button';
import Input from 'components/Input';
import PageContainer from 'components/PageContainer';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

export default function SendEnrollment() {
  const router = useRouter();
  const flow = useRegisterFlow();

  const [cpf, setCpf] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [enrollmentDocument, setEnrollmentDocument] = useState<File>();

  const onSubmit = async () => {
    if (enrollmentDocument === undefined) {
      alert('É necessário enviar o documento da matrícula');
      return;
    }

    const success = await flow.confirmRegistration({
      cpf,
      enrollment,
      enrollmentDocument,
    });

    if (!success) {
      return;
    }

    router.push('/cadastrar/sucesso');
  };

  useEffect(() => {
    if (flow.error) {
      alert(flow.error);
    }
  }, [flow.error]);

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
          value={enrollmentDocument as unknown as string}
          onChange={(event) =>
            setEnrollmentDocument(event.target.value as unknown as File)
          }
        />
      </div>

      <div className={styles.button}>
        <Button
          icon={faCheck}
          onClick={onSubmit}
          type="button"
          label="Confirmar"
          color="primary"
        />
      </div>

      <div className={styles.footer}>
        <p>Já tem uma conta?</p>
        <Link href="/login">Fazer Login</Link>
      </div>
    </PageContainer>
  );
}

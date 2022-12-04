import { useEffect, useState } from 'react';
import { faCheck, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BackHeader from 'components/BackHeader';
import Button from 'components/Button';
import Input from 'components/Input';
import PageContainer from 'components/PageContainer';
import styles from './styles.module.css';
import { useRegisterFlow } from 'contexts/registerFlow';

export default function SendIdentity() {
  const router = useRouter();
  const flow = useRegisterFlow();

  const [cpf, setCpf] = useState('');
  const [documentFront, setDocumentFront] = useState<File>();
  const [documentBack, setDocumentBack] = useState<File>();

  const onSubmit = async () => {
    if (documentFront === undefined || documentBack === undefined) {
      alert('É necessário enviar os dois lados do documento');
      return;
    }

    const success = await flow.confirmRegistration({
      cpf,
      documentFront,
      documentBack,
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
    <PageContainer headTitle="Enviar RG">
      <BackHeader title="Enviar documentos" />

      <p className={styles.pageInformation}>
        A administração da UFCG precisa validar os seus documentos para permitir
        o seu cadastro na plataforma.
      </p>

      <div className={styles.inputsContainer}>
        <div>
          <h3>Seu RG</h3>

          <p>
            Sendo usuário externo, é necessario enviar Seu RG para que possamos
            validar sua identidade.
          </p>
        </div>
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
          label="Frente do documento"
          type="file"
          placeholder="Realizar upload do arquivo"
          value={documentFront as unknown as string}
          onChange={(event) =>
            setDocumentFront(event.target.value as unknown as File)
          }
        />
        <Input
          label="Verso do Documento"
          type="file"
          placeholder="Realizar upload do arquivo"
          value={documentBack as unknown as string}
          onChange={(event) =>
            setDocumentBack(event.target.value as unknown as File)
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
        <p>Já tem conta?</p>
        <Link href="/login">Fazer Login</Link>
      </div>
    </PageContainer>
  );
}

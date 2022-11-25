import { faCheck, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BackHeader from '../../../components/BackHeader';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import PageContainer from '../../../components/PageContainer';
import styles from './styles.module.css';

export default function SendIdentity() {
  const router = useRouter();

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
        />
        <Input
          label="Frente do documento"
          type="file"
          placeholder="Realizar upload do arquivo"
        />
        <Input
          label="Verso do Documento"
          type="file"
          placeholder="Realizar upload do arquivo"
        />
      </div>

      <div className={styles.button}>
        <Button
          icon={faCheck}
          onClick={() => router.push('/cadastrar/sucesso')}
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

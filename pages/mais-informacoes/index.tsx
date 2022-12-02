import { faEnvelope, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/Input';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../../public/brand/logo.png';
import Button from '../../components/Button';
import PageContainer from '../../components/PageContainer';
import BackHeader from 'components/BackHeader';

export default function Login() {
  const router = useRouter();

  return (
    <PageContainer headTitle="Login">
      <BackHeader title='Mais informações'></BackHeader>
        
      <Input 
      label="Lista de Jogadores"
      placeholder='Preencher com espaços separados por vírgulas ou adicionando novas linhas.'
      type="textarea"
      />

      <div className={styles.buttonContainer}>
        <Button
          icon={faCheck}
          onClick={() => router.push('/login')}
          type="button"
          label="Confirmar"
          color="primary"
        />
      </div>

    </PageContainer>
  );
}

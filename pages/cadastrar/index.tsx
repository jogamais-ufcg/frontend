import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logo from '../../public/brand/logo.png';
import {
  faEnvelope,
  faCircleUser,
  faPhone,
  faLock,
  faSignIn,
} from '@fortawesome/free-solid-svg-icons';
import PageContainer from '../../components/PageContainer';
import { useRegisterFlow } from 'contexts/registerFlow';
import { useEffect, useState } from 'react';
import { isValid } from 'utils/yup';
import { firstStepSchema } from 'schemas/registration';

export default function Register() {
  const router = useRouter();
  const flow = useRegisterFlow();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [isUFCGMember, setIsUFCGMember] = useState(false);

  useEffect(() => {
    if (flow.firstStepData) {
      setName(flow.firstStepData.name);
      setEmail(flow.firstStepData.email);
      setPassword(flow.firstStepData.password);
      setCellphone(flow.firstStepData.cellphone);
      setIsUFCGMember(flow.firstStepData.isUFCGMember);
    }
  }, [flow.firstStepData]);

  const onSubmitFirstStep = async (isStudent = false) => {
    if (password !== confirmPassword) {
      toast.error('Senhas não conferem');
      return;
    }

    const data = {
      name,
      email,
      password,
      cellphone,
      isUFCGMember,
    };

    if (!isValid(firstStepSchema, data)) {
      return;
    }

    flow.confirmFirstStep(data);

    if (isStudent) {
      router.push('/cadastrar/enviar-matricula');
    } else {
      router.push('/cadastrar/enviar-rg');
    }
  };

  return (
    <PageContainer headTitle="Cadastrar">
      <Link href="/" className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="Joga Mais UFCG" />
      </Link>

      <div className={styles.mainInformation}>
        <h1>Realizar Cadastro</h1>
      </div>

      <div className={styles.inputsContainer}>
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

        <Input
          icon={faLock}
          label="Senha"
          placeholder="Digite aqui sua senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          icon={faLock}
          label="Confirme sua Senha"
          placeholder="Confirme sua senha"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div className={styles.confirmAluno}>
        <input
          type="checkbox"
          id="checkbox-1"
          checked={isUFCGMember}
          onClick={() => setIsUFCGMember(!isUFCGMember)}
        ></input>
        <label htmlFor="checkbox-1">Faço parte da UFCG</label>
      </div>

      <div className={styles.button}>
        {isUFCGMember ? (
          <>
            <Button
              onClick={() => onSubmitFirstStep(true)}
              type="button"
              label="Sou aluno(a)"
              color="primary"
            />

            <Button
              onClick={() => onSubmitFirstStep()}
              type="button"
              label="Sou servidor(a)"
              color="secondary"
            />
          </>
        ) : (
          <Button
            icon={faSignIn}
            onClick={() => onSubmitFirstStep()}
            type="button"
            label="Próxima etapa"
            color="primary"
          />
        )}
      </div>

      <div className={styles.footer}>
        <p>Já tem uma conta?</p>
        <Link href="/login">Fazer Login</Link>
      </div>
    </PageContainer>
  );
}

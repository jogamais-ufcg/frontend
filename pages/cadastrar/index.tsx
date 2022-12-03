import { useState } from 'react';
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

export default function Register() {
  const router = useRouter();
  const [isUFCGMember, setIsUFCGMember] = useState(false);

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
        />

        <Input
          icon={faCircleUser}
          label="Nome Completo"
          placeholder="Nome Completo"
          type="text"
        />

        <Input
          icon={faPhone}
          label="Número do Whatsapp"
          mask="(99) 9 9999-9999"
          placeholder="(99) 9 4002-8922"
          type="tel"
        />

        <Input
          icon={faLock}
          label="Senha"
          placeholder="Digite aqui sua senha"
          type="password"
        />

        <Input
          icon={faLock}
          label="Confirme sua Senha"
          placeholder="Confirme sua senha"
          type="password"
        />
      </div>

      <div className={styles.confirmAluno}>
        <input
          type="checkbox"
          id="checkbox-1"
          onClick={() => setIsUFCGMember(!isUFCGMember)}
        ></input>
        <label htmlFor="checkbox-1">Faço parte da UFCG</label>
      </div>

      <div className={styles.button}>
        {isUFCGMember ? (
          <>
            <Button
              onClick={() => router.push('/cadastrar/enviar-matricula')}
              type="button"
              label="Sou aluno(a)"
              color="primary"
            />

            <Button
              onClick={() => router.push('/cadastrar/enviar-rg')}
              type="button"
              label="Sou servidor(a)"
              color="secondary"
            />
          </>
        ) : (
          <Button
            icon={faSignIn}
            onClick={() => router.push('/cadastrar/enviar-rg')}
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

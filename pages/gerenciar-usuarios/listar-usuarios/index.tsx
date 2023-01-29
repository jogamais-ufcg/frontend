import {faSearch } from '@fortawesome/free-solid-svg-icons';
import {useRouter } from 'next/router';
import BackHeader from 'components/BackHeader';
import Input from 'components/Input';
import PageContainer from 'components/PageContainer';
import styles from './styles.module.css';
import UserItem from 'components/UserItem';

export default function UserListDescription() {

  return (
    <PageContainer headTitle="Gerenciar Usuários">
      <BackHeader title="Gerenciar Usuários" />

      <div className={styles.inputsContainer}>
        <Input
          icon={faSearch}
          type="text"
          placeholder="Busque por nome, email, CPF ou matrícula"
        />
        
      </div>
      <div className={styles.userContainer}>
      <UserItem
      title="Luis Eduardo Fernandes Ricarte"
      subtitle="luis.ricarte@ccc.ufcg.edu.br">
      </UserItem>

      <UserItem
      title="Adriano de Santos Lira Júnior"
      subtitle="adriano.junior@ccc.ufcg.edu.br">
      </UserItem>

      <UserItem
      title="Sofia Rocha Cavalcanti"
      subtitle="sofia.cavalcanti@ccc.ufcg.edu.br">
      </UserItem>

      <UserItem
      title="Luis Eduardo Fernandes Ricarte"
      subtitle="luis.ricarte@ccc.ufcg.edu.br">
      </UserItem>

      <UserItem
      title="Luis Eduardo Fernandes Ricarte"
      subtitle="luis.ricarte@ccc.ufcg.edu.br">
      </UserItem>
      </div>
      
    </PageContainer>
  );
};
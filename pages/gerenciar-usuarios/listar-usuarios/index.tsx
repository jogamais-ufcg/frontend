import { faSearch } from '@fortawesome/free-solid-svg-icons';
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
        {[
          ['Luis Eduardo Fernandes Ricarte', 'luis.ricarte@ccc.ufcg.edu.br'],
          ['Adriano de Santos Lira Júnior', 'adriano.junior@ccc.ufcg.edu.br'],
          ['Sofia Rocha Cavalcanti', 'sofia.cavalcanti@ccc.ufcg.edu.br'],
        ].map((user) => {
          return <UserItem key={user[1]} title={user[0]} subtitle={user[1]} />;
        })}
      </div>
    </PageContainer>
  );
}

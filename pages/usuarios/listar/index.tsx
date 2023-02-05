import { faSearch } from '@fortawesome/free-solid-svg-icons';
import BackHeader from 'components/BackHeader';
import Input from 'components/Input';
import PageContainer from 'components/PageContainer';
import styles from './styles.module.css';
import UserItem from 'components/UserItem';
import api from 'services/api';
import { useCallback, useEffect, useState } from 'react';
import { User } from 'utils/types';
import { usePrivateRoute } from 'hooks/session';

export default function UserListDescription() {
  usePrivateRoute(true);

  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');

  const getUsers = useCallback(async () => {
    const response = await api.user.getAll();
    setUsers(response.data);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <PageContainer headTitle="Gerenciar Usuários">
      <BackHeader title="Gerenciar Usuários" />

      <div className={styles.inputsContainer}>
        <Input
          icon={faSearch}
          type="text"
          placeholder="Busque por nome, email, CPF"
          onChange={(ev) => setSearch(ev.target.value)}
          value={search}
        />
      </div>
      <div className={styles.userContainer}>
        {users
          .filter((user) => {
            if (search.trim() === '') {
              return user;
            } else {
              return (
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase()) ||
                user.cpf.includes(search)
              );
            }
          })
          .map((user: User) => {
            return <UserItem key={user.id} user={user} />;
          })}
      </div>
    </PageContainer>
  );
}

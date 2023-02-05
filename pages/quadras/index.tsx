import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignIn,
  faBars,
  faPlus,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import PageContainer from 'components/PageContainer';
import logo from 'public/brand/logo.png';
import styles from './styles.module.css';
import { useEffect, useMemo, useState } from 'react';
import Input from 'components/Input';
import CourtItem from 'components/CourtItem';
import Modal from 'components/Modal';
import { useAuth } from 'contexts/auth';
import { useRouter } from 'next/router';
import { useCourts } from 'hooks/courts';
import { getEncodedUriString } from 'utils/strings';

interface OptionsMenuProps {
  isLogged: boolean;
  isAdmin: boolean;
  userName?: string;
}

function OptionsMenu({ isLogged, isAdmin, userName }: OptionsMenuProps) {
  if (isLogged) {
    if (isAdmin) {
      return (
        <>
          <FontAwesomeIcon icon={faBars} />
          <h3>Opções</h3>
        </>
      );
    }

    return (
      <>
        <FontAwesomeIcon icon={faBars} />
        <h3>Olá, {userName?.split(' ')[0]}!</h3>
      </>
    );
  }

  return (
    <>
      <FontAwesomeIcon icon={faSignIn} />
      <h3>Realizar login</h3>
    </>
  );
}

export default function Courts() {
  const router = useRouter();
  const auth = useAuth();
  const isAdmin = useMemo(() => !!auth.user?.isAdmin, [auth.user]);
  const { courts, getAllCourts } = useCourts();

  useEffect(() => {
    getAllCourts();
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (!!auth.user) {
      setOpen(true);
      return;
    }

    router.push('/login');
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <header className={styles.header}>
        <Image src={logo} alt="Joga Mais UFCG" width={100} />

        <button onClick={handleOpen}>
          <OptionsMenu
            userName={auth.user?.name}
            isAdmin={isAdmin}
            isLogged={!!auth.user}
          />
        </button>
      </header>

      <PageContainer headTitle="Quadras disponíveis">
        <aside className={styles.title}>
          <h1>Quadras disponíveis</h1>

          {isAdmin && (
            <button>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          )}
        </aside>

        <Input type="text" placeholder="Pesquise por nome..." icon={faSearch} />

        <div className={styles.courtsContainer}>
          {courts.map((court, index) => (
            <CourtItem
              key={court.name}
              index={index}
              title={court.name}
              description={court.description}
              href={`/quadras/${getEncodedUriString(court.name)}`}
            />
          ))}
        </div>

        <Modal open={open} onOpen={handleOpen} onClose={handleClose} />
      </PageContainer>
    </div>
  );
}

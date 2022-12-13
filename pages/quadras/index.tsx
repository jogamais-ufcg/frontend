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
import { useState } from 'react';
import Input from 'components/Input';
import { mockedCourts } from 'services/data';
import CourtItem from 'components/CourtItem';
import Modal from '../../components/Modal';

interface OptionsMenuProps {
  isLogged: boolean;
  isAdmin: boolean;
}

function OptionsMenu({ isLogged, isAdmin }: OptionsMenuProps) {
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
        <h3>Olá, Davi!</h3>
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
  const [isAdmin] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <header className={styles.header}>
        <Image src={logo} alt="Joga Mais UFCG" width={100} />

        <button onClick={handleOpen}>
          <OptionsMenu isAdmin={isAdmin} isLogged={true} />
        </button>

        <Modal open={open} onOpen={handleOpen} onClose={handleClose}>
          <p>olaaaaa</p>
        </Modal>
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
          {mockedCourts.map((court, index) => (
            <CourtItem
              key={court.id}
              index={index}
              title={court.name}
              description={court.description}
              href="/quadras"
            />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}

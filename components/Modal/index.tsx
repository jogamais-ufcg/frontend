import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import styles from './styles.module.css';
import { ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'contexts/auth';

interface ModalProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

function Modal({ open, onOpen, onClose }: ModalProps) {
  const auth = useAuth();
  const router = useRouter();
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const userOptions = [
    {
      label: 'Editar perfil',
      icon: <EditIcon fontSize="large" />,
    },
    {
      label: 'Meus agendamentos',
      icon: <HistoryIcon fontSize="large" />,
      onClick: () => router.push('/meus-agendamentos'),
    },
    {
      label: 'Sair da conta',
      onClick: auth.logout,
      icon: <LogoutIcon fontSize="large" />,
    },
  ];

  return (
    <SwipeableDrawer
      anchor={width < 1280 ? 'bottom' : 'left'}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
    >
      <Box className={styles.modalBox}>
        <div className={styles.list}>
          <List
            subheader={
              <div className={styles.subheader}>
                <AccountBoxIcon />
                <h2>Meu perfil</h2>
                <div className={styles.close} onClick={onClose}>
                  <CloseIcon />
                </div>
              </div>
            }
          >
            {userOptions.map((option, index) => {
              return (
                <ListItem
                  key={index}
                  className={styles.listItem}
                  onClick={option.onClick}
                >
                  <ListItemButton>
                    <ListItemIcon>{option.icon}</ListItemIcon>
                    <p>{option.label}</p>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </div>
      </Box>
    </SwipeableDrawer>
  );
}

export default Modal;

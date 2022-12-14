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

interface ModalProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

function Modal({ open, onOpen, onClose }: ModalProps) {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      className={styles.modal}
    >
      <Box className={styles.modalBox}>
        <List
          className={styles.list}
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
          <ListItem key="edit-profile" className={styles.listItem}>
            <ListItemButton>
              <ListItemIcon>
                <EditIcon fontSize="large" />
              </ListItemIcon>
              <p>Editar perfil</p>
            </ListItemButton>
          </ListItem>
          <ListItem key="my-appointments" className={styles.listItem}>
            <ListItemButton>
              <ListItemIcon>
                <HistoryIcon fontSize="large" />
              </ListItemIcon>
              <p>Meus agendamentos</p>
            </ListItemButton>
          </ListItem>
          <ListItem key="logout" className={styles.listItem}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon fontSize="large" />
              </ListItemIcon>
              <p>Sair da conta</p>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </SwipeableDrawer>
  );
}

export default Modal;

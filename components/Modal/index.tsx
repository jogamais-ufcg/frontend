import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import styles from './styles.module.css';
import { ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';

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
    >
      <div className={styles.modalBox}>
        <Box>
          <List className={styles.list}>
            <ListItem key="edit-profile" className={styles.listItem}>
              <ListItemButton>
                <ListItemIcon className={styles.icon}>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Editar perfil" />
              </ListItemButton>
            </ListItem>
            <ListItem key="my-appointments" className={styles.listItem}>
              <ListItemButton>
                <ListItemIcon className={styles.icon}>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary="Meus agendamentos" />
              </ListItemButton>
            </ListItem>
            <ListItem key="logout" className={styles.listItem}>
              <ListItemButton>
                <ListItemIcon className={styles.icon}>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Sair da conta" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </div>
    </SwipeableDrawer>
  );
}

export default Modal;

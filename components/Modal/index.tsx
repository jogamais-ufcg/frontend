import SwipeableDrawer from '@mui/material/SwipeableDrawer';

interface ModalProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ open, onOpen, onClose, children }: ModalProps) {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onOpen={onOpen}
      onClose={onClose}
    >
      {children}
    </SwipeableDrawer>
  );
}

export default Modal;

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useState } from 'react';

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
}

function Modal({ open, children }: ModalProps) {
  const [opened, setOpened] = useState(open);

  const toggleModal =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpened(open);
    };

  return (
    <SwipeableDrawer
      open={opened}
      onOpen={toggleModal(true)}
      onClose={toggleModal(false)}
    >
      {children}
    </SwipeableDrawer>
  );
}

export default Modal;

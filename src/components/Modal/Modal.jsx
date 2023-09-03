import { PropTypes } from 'prop-types';
import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Window } from './Modal.styled';

const portal = document.querySelector('#modal-root');

export default function Modal({ children, onClose }) {
  const html = useMemo(() => document.querySelector('html'), []);

  useEffect(() => {
    html.style.overflowY = 'hidden';
    window.addEventListener('keydown', onEscDown);
    return () => {
      html.style.overflowY = '';
      window.removeEventListener('keydown', onEscDown);
    };
  });

  function onEscDown(e) {
    if (e.code === 'Escape') {
      onClose();
    }
  }

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <Window>{children}</Window>
    </Backdrop>,
    portal
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

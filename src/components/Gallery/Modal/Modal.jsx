import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import css from "./Modal.module.css"

const modalRoot = document.getElementById('modal-root');

export default function Modal ({url, closeModal}) {

  useEffect(() => {
    const handleEscClick = (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
  
    window.addEventListener('keydown', handleEscClick);
    return () => {
    window.removeEventListener('keydown', handleEscClick);  
    }

  }, [closeModal])

  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

    return createPortal(
      <div className={css.overlay} onClick={handleBackdropClick}>
        <div className={css.modal}>
          <img src={url} alt="pfoto" />
        </div>
      </div>,
      modalRoot
    );
  }

Modal.propTypes = {

  url: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,

};


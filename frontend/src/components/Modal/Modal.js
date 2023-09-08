import React from 'react';
import './Modal.css';

const Modal = ({ children, showModal, closeModal }) => {
  if (!showModal) return null;

  return (
    <div id="modalOverlay" className="modal-overlay" onClick={closeModal}>
      <div id="modalContent" className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;


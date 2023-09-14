import React from 'react';
import  './DeleteConfirmationModal.css';

const DeleteConfirmationModal = ({ show, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
    <div className="delete-modal">
      <div className="delete-modal-content">
        <p>Are you sure you want to delete your account?</p>
        <div className='delete-but'>
            <button className='del-yes' onClick={onConfirm}>Yes</button>
            <button className='del-no' onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;

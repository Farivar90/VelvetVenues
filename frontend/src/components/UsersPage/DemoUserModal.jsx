import React from 'react';
import './EditProfile.css';

const DemoUserModal = ({ show, onClose }) => {
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <div className="modal-main">
        <h2>Demo User Notice</h2>
        <p>Edit and Delete actions are not available for demo user. If you'd like to test the full functionality, please register.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DemoUserModal;

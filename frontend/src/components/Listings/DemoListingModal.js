import React from 'react';

const DemoListingModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <div className="modal-main">
        <h2>Restricted Action</h2>
        <p>This action is restricted for demo users.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DemoListingModal;

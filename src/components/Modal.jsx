// src/components/Modal.jsx

import React, { useState } from "react";

const Modal = ({ onClose, onConfirm, service, title, message }) => {
  const [updatedService, setUpdatedService] = useState(service || {});

  const handleUpdate = () => {
    // Handle update logic here (make an API call to update the service)
    onConfirm(updatedService);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        {message ? <p>{message}</p> : (
          <div>
            <input
              type="text"
              value={updatedService.serviceTitle}
              onChange={(e) => setUpdatedService({ ...updatedService, serviceTitle: e.target.value })}
              className="px-4 py-2 border rounded"
            />
            {/* Add other fields for service update */}
          </div>
        )}
        <div className="modal-actions">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded">
            {message ? "Confirm Delete" : "Update Service"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;  // Ensure this is a default export


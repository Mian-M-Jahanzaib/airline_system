import React, { useState } from "react";
import "./Modal.css";

function Modal({ isOpen, onClose, onBook }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onBook(name, email);
      onClose();
    } else {
      alert("Please fill in all fields!");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Enter Details to Book Your Flight</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name :
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Email :
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Book Flight</button>
        </form>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
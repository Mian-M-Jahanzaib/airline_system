import React, { useState } from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";

function Modal({ isOpen, onClose, onBook }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onBook(name, email);
      onClose(); // Close modal after booking
      setName(""); // Clear form
      setEmail("");
    } else {
      alert("Please fill in all fields!");
    }
  };

  if (!isOpen) return null;

  return (
    // Overlay: Fixed, dark semi-transparent background
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
      
      {/* Modal Box: White, rounded, shadow */}
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 transform transition-all scale-100">
        
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center border-b pb-4">
          Confirm Booking
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <FaUser />
              </span>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Ex. John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <FaEnvelope />
              </span>
              <input
                type="email"
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Ex. john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col gap-3">
            <button 
              type="submit" 
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
            >
              Confirm & Book
            </button>
            
            <button 
              type="button" 
              onClick={onClose}
              className="w-full bg-gray-100 text-gray-600 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Modal;
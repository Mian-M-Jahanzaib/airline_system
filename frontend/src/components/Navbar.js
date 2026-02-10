import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlaneDeparture } from "react-icons/fa"; 

function Navbar() {
  const location = useLocation(); // Used to highlight the active link

  // Helper to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    // Changed to 'bg-white' to match the cards in your other components
    // Added 'border-b' to give it a clean separation line
    <nav className="bg-white text-blue-900 shadow-lg sticky top-0 z-50 border-b border-gray-200">
      
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left Side: Logo */}
        <Link to="/" className="flex items-center gap-3 group">
            {/* Icon is now Blue-900 to match the text */}
            <div className="bg-blue-50 p-2 rounded-full group-hover:bg-blue-100 transition-colors">
              <FaPlaneDeparture className="text-2xl text-blue-700 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-blue-900">
              UOG Airline
            </h1>
        </Link>

        {/* Right Side: Navigation Links */}
        <ul className="flex items-center space-x-8 font-semibold text-gray-600">
          
          <li>
            <Link 
              to="/" 
              className={`transition-colors duration-200 hover:text-blue-700 ${isActive('/') ? 'text-blue-900 font-bold' : ''}`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link 
              to="/view-booking" 
              className={`transition-colors duration-200 hover:text-blue-700 ${isActive('/view-booking') ? 'text-blue-900 font-bold' : ''}`}
            >
              My Trips
            </Link>
          </li>

          <li>
            <Link 
              to="/about-us" 
              className={`transition-colors duration-200 hover:text-blue-700 ${isActive('/about-us') ? 'text-blue-900 font-bold' : ''}`}
            >
              About
            </Link>
          </li>

          <li>
            <Link 
              to="/contact-us" 
              className={`transition-colors duration-200 hover:text-blue-700 ${isActive('/contact-us') ? 'text-blue-900 font-bold' : ''}`}
            >
              Contact
            </Link>
          </li>

          {/* "Book Flight" is now the primary Call-to-Action button */}
          <li>
            <Link 
              to="/book-flight" 
              className="bg-blue-900 text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-blue-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Flight
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
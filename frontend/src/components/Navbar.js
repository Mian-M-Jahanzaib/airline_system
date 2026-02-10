import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlaneDeparture } from "react-icons/fa"; // Importing an icon for a pro look

function Navbar() {
  return (
    // 'bg-blue-900' gives that deep corporate airline blue
    // 'shadow-md' adds a subtle depth like a real header
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left Side: Logo */}
        <Link to="/" className="flex items-center gap-3 group">
            {/* Icon rotates slightly when you hover over the logo */}
            <FaPlaneDeparture className="text-3xl text-blue-300 group-hover:rotate-12 transition-transform duration-300" />
            <h1 className="text-2xl font-bold tracking-wide group-hover:text-blue-100 transition-colors">
              UOG Airline
            </h1>
        </Link>

        {/* Right Side: Navigation Links */}
        <ul className="flex items-center space-x-8 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-300 transition-colors duration-200 py-2">
              Home
            </Link>
          </li>
          
          {/* Highlighted 'Book Flight' button for emphasis */}
          <li>
            <Link to="/book-flight" className="bg-blue-700 hover:bg-blue-600 px-5 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg">
              Book Flight
            </Link>
          </li>

          <li>
            <Link to="/view-booking" className="hover:text-blue-300 transition-colors duration-200 py-2">
              View Booking
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-blue-300 transition-colors duration-200 py-2">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-blue-300 transition-colors duration-200 py-2">
              About Us
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    // bg-gray-900 provides a sleek dark contrast to the blue header
    <footer className="bg-gray-900 text-white pt-12 pb-8 border-t-4 border-blue-600">
      <div className="container mx-auto px-6">

        {/* GRID LAYOUT: Stacks on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          {/* Section 1: About */}
          <div>
            <h4 className="text-2xl font-bold mb-4 text-blue-400">About UOG Airline</h4>
            <p className="text-gray-400 leading-relaxed text-sm">
              We are a leading airline committed to safety, comfort, and connecting you to the world with premium service.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h4 className="text-2xl font-bold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/book-flight" className="text-gray-400 hover:text-white hover:translate-x-1 transition-transform inline-block">
                  Book Flight
                </Link>
              </li>
              <li>
                <Link to="/view-booking" className="text-gray-400 hover:text-white hover:translate-x-1 transition-transform inline-block">
                  My Trips
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-white hover:translate-x-1 transition-transform inline-block">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-2xl font-bold mb-4 text-blue-400">Contact Us</h4>
            
            <div className="flex items-center gap-2 mb-2 text-gray-400 text-sm">
                <FaEnvelope className="text-blue-500" />
                <span>info@uogairlines.com</span>
            </div>
            
            <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                <FaPhone className="text-blue-500" />
                <span>123-456-7890</span>
            </div>

            <a 
              href="https://www.linkedin.com/in/mian-muhammad-jahanzaib-7b8aa7357" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={32} />
            </a>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} UOG Airline System. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
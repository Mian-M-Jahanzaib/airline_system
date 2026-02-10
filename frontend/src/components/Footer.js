import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We are a leading airline with a focus on safety and comfort.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/book-flight">Book Flight</a></li>
            <li><a href="/view-booking">View Booking</a></li>
            <li><a href="/about-us">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@uogairlines.com</p>
          <p>Phone: 123-456-7890</p>
          <a href="https://www.linkedin.com/in/mian-muhammad-jahanzaib-7b8aa7357" target="_blank" rel="noopener noreferrer">
  <FaLinkedin size={30} color="white" />
</a>

        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">
        © 2025 UOG Airline System. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      {/* Blurry Background Image with Text */}
      <section className="hero">
        <div className="hero-image"></div> {/* Blurry background */}
        <div className="hero-text">
          <h1>Welcome to UOG Airline System</h1>
          <Link to="/book-flight">
  <button className="book-btn">Book a Flight</button>
</Link>
        </div>
      </section>

      {/* Positive Points */}
      <section className="positive-points">
        <div className="point">
          <i className="icon">✈️</i>
          <h3>Safe and Secure</h3>
          <p>Travel with peace of mind knowing safety is our priority.</p>
        </div>
        <div className="point">
          <i className="icon">💺</i>
          <h3>Comfortable Seating</h3>
          <p>Experience comfort with our spacious and luxurious seats.</p>
        </div>
        <div className="point">
          <i className="icon">🌍</i>
          <h3>Global Connectivity</h3>
          <p>Fly to destinations worldwide with our extensive network.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

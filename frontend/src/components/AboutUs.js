// AboutUs.js
import React from 'react';
import './AboutUs.css';  // If you want to style the page later

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About UOG Airline System</h1>
      <p>
        Welcome to UOG Airline System! We are dedicated to providing the most
        efficient and comfortable flight experience for our passengers. Our mission
        is to ensure that every passenger has a smooth, safe, and enjoyable journey
        from the moment they book their flight until they reach their destination.
      </p>
      <h2>Our Services</h2>
      <ul>
        <li>Affordable flight options for every budget</li>
        <li>Easy booking system with flexible payment options</li>
        <li>Multiple destinations across the globe</li>
        <li>24/7 customer support</li>
        <li>Safe, secure, and reliable travel experience</li>
      </ul>
      <h2>Why Choose Us?</h2>
      <p>
        At UOG Airline, we value your time and comfort. With years of experience in
        the aviation industry, we ensure our flights are on time, safe, and comfortable.
        We offer a wide range of flights to suit your needs and preferences, all at affordable prices.
      </p>
      <p>Thank you for choosing UOG Airline System! We look forward to serving you.</p>
    </div>
  );
}

export default AboutUs;

import React, { useState } from 'react';
import './ContactUs.css'; // Create this CSS file for styling

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields!');
      return;
    }

    // Simulate a successful submission
    setSuccessMessage('Your message has been sent successfully!');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="contact-us-container">
      <h2>Send us a Message</h2>
      <p>We'd love to hear from you</p>
      {/* Display success message */}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter subject"
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message"
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;

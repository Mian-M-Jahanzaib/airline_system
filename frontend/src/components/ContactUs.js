import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaTag, FaCommentDots, FaPaperPlane } from 'react-icons/fa';

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
    setSuccessMessage('Thank you! Your message has been sent successfully.');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    
    // Hide success message after 5 seconds
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      
      {/* Main Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-2xl w-full border-t-8 border-blue-900">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-2">Get in Touch</h2>
          <p className="text-gray-500">Have questions about your flight? We are here to help.</p>
        </div>

        {/* Success Alert */}
        {successMessage && (
          <div className="mb-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-r shadow-sm flex items-center animate-fade-in">
            <FaPaperPlane className="mr-3" />
            <p>{successMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name Field */}
          <div className="relative">
            <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Name</label>
            <div className="relative">
              <span className="absolute left-3 top-3.5 text-gray-400">
                <FaUser />
              </span>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Email Address</label>
            <div className="relative">
              <span className="absolute left-3 top-3.5 text-gray-400">
                <FaEnvelope />
              </span>
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Subject Field */}
          <div className="relative">
            <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Subject</label>
            <div className="relative">
              <span className="absolute left-3 top-3.5 text-gray-400">
                <FaTag />
              </span>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="What is this regarding?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Message</label>
            <div className="relative">
              <span className="absolute left-3 top-3.5 text-gray-400">
                <FaCommentDots />
              </span>
              <textarea
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors h-32 resize-none"
                placeholder="How can we assist you today?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-900 text-white font-bold py-4 rounded-lg shadow-lg hover:bg-blue-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2"
          >
            <FaPaperPlane /> Send Message
          </button>

        </form>
      </div>
    </div>
  );
}

export default ContactUs;
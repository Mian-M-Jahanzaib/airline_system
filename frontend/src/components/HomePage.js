import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaChair, FaGlobe } from 'react-icons/fa'; // Pro icons
import heroImage from '../images/1.png'; // Import image directly so React finds it

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${heroImage})` }} 
        >
          {/* This black layer makes the text pop */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg tracking-tight">
            Welcome to UOG Airline
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-gray-100 opacity-90">
            Experience the world with safety, comfort, and premium service.
          </p>
          
          <Link to="/book-flight">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Book a Flight
            </button>
          </Link>
        </div>
      </section>

      {/* POSITIVE POINTS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          
          {/* Card 1: Safety */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center border-t-4 border-blue-600">
            <div className="bg-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
              <FaShieldAlt className="text-4xl text-blue-700" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Safe and Secure</h3>
            <p className="text-gray-600 leading-relaxed">
              We adhere to the highest international safety standards to ensure your journey is worry-free.
            </p>
          </div>

          {/* Card 2: Comfort */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center border-t-4 border-blue-600">
            <div className="bg-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
              <FaChair className="text-4xl text-blue-700" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Comfortable Seating</h3>
            <p className="text-gray-600 leading-relaxed">
              Relax in our spacious seats designed for maximum legroom and superior comfort on long flights.
            </p>
          </div>

          {/* Card 3: Global */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center border-t-4 border-blue-600">
            <div className="bg-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
              <FaGlobe className="text-4xl text-blue-700" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Global Connectivity</h3>
            <p className="text-gray-600 leading-relaxed">
              From local hubs to international destinations, we connect you to the world seamlessly.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default HomePage;
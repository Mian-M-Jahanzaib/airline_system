import React from 'react';
import { FaPlane, FaGlobe, FaHeadset, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa';

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      
      {/* Main Container */}
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 tracking-tight">
            About UOG Airline
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are dedicated to providing the most efficient and comfortable flight experience. 
            From booking to landing, your journey is our priority.
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Our Services - Grid Layout */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">World-Class Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <FaMoneyBillWave className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Affordable Travel</h3>
              <p className="text-gray-600">Flight options tailored for every budget without compromising quality.</p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <FaGlobe className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Global Destinations</h3>
              <p className="text-gray-600">Connecting you to major cities and hidden gems across the globe.</p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <FaHeadset className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600">Our dedicated team is here to assist you around the clock.</p>
            </div>
          </div>
        </div>

        {/* "Why Choose Us" - Blue Section */}
        <div className="bg-blue-900 text-white rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-800 rounded-full opacity-50"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                At UOG Airline, we value your time and comfort. With years of experience in the aviation industry, 
                we ensure our flights are on time, safe, and comfortable. We offer a wide range of flights to suit 
                your needs and preferences.
              </p>
              <div className="flex items-center gap-4 font-semibold text-blue-200">
                <FaShieldAlt className="text-2xl" />
                <span>Safe, Secure, and Reliable</span>
              </div>
            </div>
            
            {/* Visual Icon */}
            <div className="hidden md:block">
              <FaPlane className="text-9xl text-blue-800 opacity-50 transform -rotate-12" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
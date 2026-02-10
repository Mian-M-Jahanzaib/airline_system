import React, { useState } from "react";
import { FaSearch, FaPlane, FaCalendarAlt, FaUser, FaChair } from "react-icons/fa";

function ViewBooking() {
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);
  const [searched, setSearched] = useState(false); // To track if user has clicked search

  const handleViewBookings = (e) => {
    e.preventDefault(); // Prevent form reload
    const storedBookings = JSON.parse(localStorage.getItem(email)) || [];
    setBookings(storedBookings);
    setSearched(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Manage Your Bookings</h2>
          <p className="text-gray-600">Enter your email to retrieve your flight itinerary.</p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleViewBookings} className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-4 mb-10 max-w-2xl mx-auto border-t-4 border-blue-600">
          <div className="flex-grow relative">
            <span className="absolute left-3 top-3.5 text-gray-400">
              <FaUser />
            </span>
            <input
              type="email"
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit"
            className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <FaSearch /> Find Bookings
          </button>
        </form>

        {/* Results Section */}
        {searched && bookings.length === 0 && (
          <div className="text-center py-10 bg-white rounded-xl shadow-sm">
            <p className="text-red-500 text-lg font-medium">No bookings found for this email.</p>
            <p className="text-gray-400 text-sm mt-1">Please check the spelling or book a new flight.</p>
          </div>
        )}

        {/* Booking Cards (Boarding Pass Style) */}
        {bookings.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 pl-2 border-l-4 border-blue-500">
              Your Itinerary ({bookings.length})
            </h3>
            
            {bookings.map((booking, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                
                {/* Card Header (Blue) */}
                <div className="bg-blue-900 text-white p-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <FaPlane className="text-2xl transform -rotate-45" />
                    <span className="font-bold text-lg">UOG Airline</span>
                  </div>
                  <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Confirmed
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  
                  {/* Route: From -> To */}
                  <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-dashed border-gray-300">
                    <div className="text-center md:text-left">
                      <p className="text-gray-500 text-sm uppercase tracking-wide">From</p>
                      <p className="text-3xl font-bold text-gray-800">{booking.departure}</p>
                    </div>

                    <div className="flex items-center gap-4 my-4 md:my-0 text-gray-400">
                      <div className="h-[2px] w-12 bg-gray-300"></div>
                      <FaPlane className="text-blue-500 text-xl" />
                      <div className="h-[2px] w-12 bg-gray-300"></div>
                    </div>

                    <div className="text-center md:text-right">
                      <p className="text-gray-500 text-sm uppercase tracking-wide">To</p>
                      <p className="text-3xl font-bold text-gray-800">{booking.destination}</p>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                    
                    <div>
                      <p className="text-gray-500 flex items-center gap-2 mb-1"><FaCalendarAlt /> Date</p>
                      <p className="font-bold text-gray-800">{booking.departureDate}</p>
                      {booking.returnDate && (
                        <p className="text-xs text-blue-600 mt-1">Return: {booking.returnDate}</p>
                      )}
                    </div>

                    <div>
                      <p className="text-gray-500 flex items-center gap-2 mb-1"><FaChair /> Class</p>
                      <p className="font-bold text-gray-800">{booking.selectedClass}</p>
                    </div>

                    <div>
                      <p className="text-gray-500 flex items-center gap-2 mb-1"><FaUser /> Passengers</p>
                      <p className="font-bold text-gray-800">{booking.numPassengers}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-gray-500 mb-1">Total Paid</p>
                      <p className="text-2xl font-bold text-green-600">${booking.price}</p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default ViewBooking;
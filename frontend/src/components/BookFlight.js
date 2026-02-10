import React, { useState } from "react";
import Modal from "./Modal";
import { FaPlaneDeparture, FaPlaneArrival, FaUser, FaCalendarAlt, FaChair } from "react-icons/fa";

const cities = {
  Islamabad: { country: "Pakistan", price: 300 },
  Washington: { country: "US", price: 800 },
  London: { country: "UK", price: 600 },
  Sydney: { country: "Australia", price: 1000 },
  Johannesburg: { country: "South Africa", price: 900 },
  Auckland: { country: "New Zealand", price: 1100 },
  Toronto: { country: "Canada", price: 700 },
  Dubai: { country: "Dubai", price: 500 },
  Riyadh: { country: "Saudi Arabia", price: 750 },
  Beijing: { country: "China", price: 950 },
};

function BookFlight() {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [numPassengers, setNumPassengers] = useState(1);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isReturn, setIsReturn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBooking = (name, email) => {
    const newBooking = {
      departure,
      destination,
      selectedClass,
      numPassengers,
      departureDate,
      ...(isReturn && { returnDate }),
      price: calculatePrice(),
    };

    let existingBookings = JSON.parse(localStorage.getItem(email)) || [];
    existingBookings.push(newBooking);
    localStorage.setItem(email, JSON.stringify(existingBookings));

    alert(`Flight booked successfully for ${name}!\nConfirmation sent to ${email}.`);
    setIsModalOpen(false);
    
    // Reset Form
    setDeparture("");
    setDestination("");
    setSelectedClass("");
    setNumPassengers(1);
    setDepartureDate("");
    setReturnDate("");
    setIsReturn(false);
  };

  const calculatePrice = () => {
    if (departure && destination) {
      const basePrice = cities[departure].price + cities[destination].price;
      let seatClassPrice = 0;
      if (selectedClass === "Executive") seatClassPrice = 200;
      if (selectedClass === "Business") seatClassPrice = 100;
      return (basePrice + seatClassPrice) * numPassengers;
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      
      {/* Main Card Container */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-4xl w-full border-t-8 border-blue-900">
        
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8 flex items-center justify-center gap-3">
          <FaPlaneDeparture /> Book Your Flight
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Departure City */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <FaPlaneDeparture className="text-blue-600"/> From
            </label>
            <select 
              className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-blue-500 focus:outline-none transition-colors"
              onChange={(e) => setDeparture(e.target.value)} 
              value={departure}
            >
              <option value="">Select Departure City</option>
              {Object.keys(cities).map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Destination City */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <FaPlaneArrival className="text-blue-600"/> To
            </label>
            <select 
              className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-blue-500 focus:outline-none transition-colors"
              onChange={(e) => setDestination(e.target.value)} 
              value={destination}
            >
              <option value="">Select Destination City</option>
              {Object.keys(cities).map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Seat Class */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <FaChair className="text-blue-600"/> Class
            </label>
            <select 
              className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-blue-500 focus:outline-none transition-colors"
              onChange={(e) => setSelectedClass(e.target.value)} 
              value={selectedClass}
            >
              <option value="">Select Class</option>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="Executive">Executive</option>
            </select>
          </div>

          {/* Passengers */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <FaUser className="text-blue-600"/> Passengers
            </label>
            <input
              type="number"
              min="1"
              className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-blue-500 focus:outline-none transition-colors"
              value={numPassengers}
              onChange={(e) => setNumPassengers(e.target.value)}
            />
          </div>

          {/* Departure Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <FaCalendarAlt className="text-blue-600"/> Departure Date
            </label>
            <input
              type="date"
              className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-blue-500 focus:outline-none transition-colors"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
            />
          </div>

          {/* Return Date Logic */}
          <div>
             <div className="flex items-center mb-2 h-8">
                <input
                  type="checkbox"
                  id="returnCheck"
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 mr-2"
                  checked={isReturn}
                  onChange={(e) => {
                    setIsReturn(e.target.checked);
                    if (!e.target.checked) setReturnDate("");
                  }}
                />
                <label htmlFor="returnCheck" className="text-gray-700 font-medium cursor-pointer">Return Flight?</label>
             </div>
             
             {isReturn && (
                <input
                  type="date"
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-blue-500 focus:outline-none transition-colors animate-fade-in"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  required
                />
             )}
          </div>
        </div>

        {/* Total Price Display */}
        {departure && destination && selectedClass && numPassengers && (
          <div className="mt-8 bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
             <p className="text-gray-600 text-sm uppercase tracking-wide">Total Estimated Cost</p>
             <p className="text-3xl font-bold text-blue-900">${calculatePrice()}</p>
          </div>
        )}

        {/* Action Button */}
        <button
          className={`w-full mt-8 py-4 rounded-lg text-white font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1 ${
            !departure || !destination || !selectedClass || !departureDate
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-900 hover:bg-blue-800 hover:shadow-xl"
          }`}
          onClick={() => {
             if (departure && destination && selectedClass && numPassengers && departureDate && (!isReturn || returnDate)) {
                setIsModalOpen(true);
             } else {
                alert("Please fill in all details");
             }
          }}
          disabled={!departure || !destination || !selectedClass || !departureDate}
        >
          Proceed to Booking
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onBook={handleBooking}
        />
      </div>
    </div>
  );
}

export default BookFlight;
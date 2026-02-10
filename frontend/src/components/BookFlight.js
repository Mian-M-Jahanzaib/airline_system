import React, { useState } from "react";
import "./BookFlight.css";
import Modal from "./Modal";

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
  const [isReturn, setIsReturn] = useState(false); // Track if it's a return flight
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDepartureChange = (event) => {
    setDeparture(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleNumPassengersChange = (event) => {
    setNumPassengers(event.target.value);
  };

  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };

  const handleIsReturnChange = (event) => {
    setIsReturn(event.target.checked);
    if (!event.target.checked) {
      setReturnDate(""); // Clear return date if "Return" is unchecked
    }
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

  const handleBookFlight = () => {
    if (
      departure &&
      destination &&
      selectedClass &&
      numPassengers &&
      departureDate &&
      (!isReturn || returnDate) // Validate return date if it's a return flight
    ) {
      setIsModalOpen(true);
    } else {
      alert("Please fill in all the required fields, including dates.");
    }
  };

  const handleBooking = (name, email) => {
    const newBooking = {
      departure,
      destination,
      selectedClass,
      numPassengers,
      departureDate,
      ...(isReturn && { returnDate }), // Include returnDate only if it's a return flight
      price: calculatePrice(),
    };

    // Store booking using email as key
    let existingBookings = JSON.parse(localStorage.getItem(email)) || [];
    existingBookings.push(newBooking);
    localStorage.setItem(email, JSON.stringify(existingBookings));

    alert(
      `Flight booked successfully for ${name}!\n\nA confirmation has been sent to ${email}.`
    );
    setIsModalOpen(false);
    // Reset form
    setDeparture("");
    setDestination("");
    setSelectedClass("");
    setNumPassengers(1);
    setDepartureDate("");
    setReturnDate("");
    setIsReturn(false);
  };

  return (
    <div className="book-flight-container">
      <h2>Book Your Flight</h2>

      <div className="form-group">
        <label>Departure City</label>
        <select onChange={handleDepartureChange} value={departure}>
          <option value="">Select Departure City</option>
          {Object.keys(cities).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Destination City</label>
        <select onChange={handleDestinationChange} value={destination}>
          <option value="">Select Destination City</option>
          {Object.keys(cities).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Seat Class</label>
        <select onChange={handleClassChange} value={selectedClass}>
          <option value="">Select Class</option>
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
          <option value="Executive">Executive</option>
        </select>
      </div>

      <div className="form-group">
        <label>Number of Passengers</label>
        <input
          type="number"
          min="1"
          value={numPassengers}
          onChange={handleNumPassengersChange}
        />
      </div>

      <div className="form-group">
        <label>Departure Date</label>
        <input
          type="date"
          value={departureDate}
          onChange={handleDepartureDateChange}
          required // Make departure date mandatory
        />
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={isReturn}
            onChange={handleIsReturnChange}
          />
          Return Flight
        </label>
      </div>

      {isReturn && (
        <div className="form-group">
          <label>Return Date</label>
          <input
            type="date"
            value={returnDate}
            onChange={handleReturnDateChange}
            required={isReturn} // Make return date mandatory if it's a return flight
          />
        </div>
      )}

      {departure &&
        destination &&
        selectedClass &&
        numPassengers &&
        departureDate &&
        (!isReturn || returnDate) && (
          <div className="price-info">
            <p>Total Price: ${calculatePrice()}</p>
          </div>
        )}

      <button
        className="book-btn"
        onClick={handleBookFlight}
        disabled={
          !departure ||
          !destination ||
          !selectedClass ||
          !numPassengers ||
          !departureDate ||
          (isReturn && !returnDate)
        }
      >
        Book Flight
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBook={handleBooking}
      />
    </div>
  );
}

export default BookFlight;
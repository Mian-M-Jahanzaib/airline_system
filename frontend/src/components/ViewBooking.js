import React, { useState } from "react";
import "./ViewBooking.css"; // You can create a CSS file for ViewBooking

function ViewBooking() {
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState(""); // For "No bookings found"

  const handleViewBookings = () => {
    const storedBookings = JSON.parse(localStorage.getItem(email)) || [];
    setBookings(storedBookings);
    if (storedBookings.length === 0) {
      setMessage("No bookings found for this email.");
    } else {
      setMessage("");
    }
  };

  return (
    <div className="view-booking-container">
      <h2>View Your Bookings</h2>
      <div className="view-booking-form">
        <label>Enter your email to view bookings:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleViewBookings}>View Bookings</button>
      </div>

      {message && <p className="no-bookings-message">{message}</p>}

      {bookings.length > 0 && (
        <div className="bookings-list">
          <h3>Your Bookings:</h3>
          {bookings.map((booking, index) => (
            <div key={index} className="booking-item">
              <p>
                Departure: {booking.departure}, Destination: {booking.destination}
              </p>
              <p>
                Departure Date: {booking.departureDate}
                {booking.returnDate && `, Return Date: ${booking.returnDate}`}
              </p>
              <p>Class: {booking.selectedClass}, Passengers: {booking.numPassengers}</p>
              <p>Price: ${booking.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewBooking;
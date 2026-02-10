import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import BookFlight from './components/BookFlight';
import ViewBooking from './components/ViewBooking';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-flight" element={<BookFlight />} />
          <Route path="/view-booking" element={<ViewBooking />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

# ✈️ UOG Airline Management System (Frontend)

A modern, responsive web application designed for an airline management system. Built with **React 19** and **Tailwind CSS**, this frontend project provides a complete user interface for searching flights, calculating dynamic ticket prices, and managing passenger bookings using browser local storage.

---

## 🌟 Key Features

* **Dynamic Flight Booking:** Users can select departure and destination cities (from a predefined global list) with automated, real-time price calculations based on location and seat class (Economy, Business, Executive).
* **Round-Trip & One-Way Logic:** Conditional UI rendering allows users to easily toggle return flight dates.
* **Interactive Booking Modal:** A custom, fully responsive confirmation modal captures passenger details (Name, Email) before finalizing the reservation.
* **Persistent Local Storage:** Bookings are saved directly to the browser's `localStorage` (linked to the user's email), allowing seamless integration with the "View Booking" feature.
* **Modern UI/UX:** Styled completely with **Tailwind CSS**, featuring custom hover states, animations (`animate-fade-in`), and interactive form validations.
* **Multi-Page Routing:** Structured navigation across multiple distinct views (Home, About, Book Flight, Contact, View Booking).

---

## 🗂️ Component Architecture

The `src/components` directory is structured for modularity and reusability:
* `HomePage.js` - The main landing page establishing the brand.
* `Navbar.js` & `Footer.js` - Persistent layout components for site navigation.
* `BookFlight.js` - The core engine for flight selection and price calculation.
* `Modal.js` - Reusable UI overlay for secure booking confirmation.
* `ViewBooking.js` - Retrieves and displays user-specific saved trips from local storage.
* `AboutUs.js` & `ContactUs.js` - Informational pages for airline details and customer support.

---

## 💻 Technologies Used

* **React.js** (v19.1.0)
* **Tailwind CSS** (v3.4) for rapid, utility-first styling.
* **React Router DOM** (v7) for seamless page transitions.
* **React Icons** (v5.5) for scalable, lightweight UI iconography.

---

## 🚀 Getting Started

To run this project locally, follow these steps:

**1. Clone the repository:**
```bash
git clone https://github.com/Mian-M-Jahanzaib/airline_system.git
```

**2. Navigate to the project directory:**
```bash
cd airline_system/frontend
```
*(Note: Adjust the path if you cloned the frontend directly into the root folder).*

**3. Install dependencies:**
```bash
npm install
```

**4. Start the development server:**
```bash
npm start
```

*The application will launch in your default browser at `http://localhost:3000`.*

---

## 👨‍💻 Author

**Mian Muhammad Jahanzaib**

*This frontend project was developed to demonstrate modern web development practices, state management, and responsive design.*

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

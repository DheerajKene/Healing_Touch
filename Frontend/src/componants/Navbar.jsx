import React, { useState } from 'react';
import './Navbar.css'; // We'll create this for styling

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Healing Touch</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li className="dropdown">
          <a href="#" onClick={toggleServices}>Services</a>
          {isServicesOpen && (
            <ul className="dropdown-menu">
              <li><a href="/services/attendant">Attendant</a></li>
              <li><a href="/services/nursing">Nursing</a></li>
              <li><a href="/services/elderly-care">Elderly Care</a></li>
              <li><a href="/services/physiotherapy">Physiotherapy</a></li>
              <li><a href="/services/baby-care">Baby Care</a></li>
              <li><a href="/services/medical-equipment">Medical Equipment</a></li>
            </ul>
          )}
        </li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Healing Touch</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <a href="#">Services</a>
          <ul className="dropdown-menu">
            <li><a href="/services/attendant">Attendant</a></li>
            <li><a href="/services/nursing">Nursing</a></li>
            <li><a href="/services/elderly-care">Elderly Care</a></li>
            <li><a href="/services/physiotherapy">Physiotherapy</a></li>
            <li><a href="/services/baby-care">Baby Care</a></li>
            <li><a href="/services/medical-equipment">Medical Equipment</a></li>
          </ul>
        </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><a href="/#request-callback">Book now</a></li>
      </ul>
      <div className="navbar-phone">
        <a href="tel:7507562079">Call Us - 7507562079</a>
      </div>
    </nav>
  );
};

export default Navbar;
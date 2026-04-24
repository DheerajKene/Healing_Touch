import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Healing Touch</h3>
          <p>Dedicated to improving accessibility, safety, and continuity of elderly care.</p>
          <div className="contact-info">
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Email:</strong> info@healingtouch.com</p>
            <p><strong>Address:</strong> 123 Care Street, Wellness City, WC 12345</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Healing Touch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
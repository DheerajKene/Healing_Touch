import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Booking submitted:', formData);
    alert('Appointment booked successfully!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      doctor: '',
      date: '',
      time: '',
      message: ''
    });
  };

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
        <div className="booking-form">
          <h3>Book an Appointment</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="doctor">Select Doctor</label>
              <select
                id="doctor"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
              >
                <option value="">Choose a doctor</option>
                <option value="Dr. Emily Johnson">Dr. Emily Johnson</option>
                <option value="Dr. Michael Chen">Dr. Michael Chen</option>
                <option value="Dr. Sarah Patel">Dr. Sarah Patel</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Preferred Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Additional Notes</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Book Appointment</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Healing Touch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
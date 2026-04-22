import React from 'react';
import Navbar from '../componants/Navbar';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="about-content">
        <section className="hero-section">
          <h1>About Healing Touch</h1>
          <p className="hero-subtitle">Dedicated to improving accessibility, safety, and continuity of elderly care</p>
        </section>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At Healing Touch, we believe that quality healthcare should be accessible to everyone,
            especially our elderly loved ones. Our platform connects families with trusted healthcare
            professionals to ensure continuous, compassionate care that prioritizes safety and well-being.
          </p>
        </section>

        <section className="services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Attendant Care</h3>
              <p>Personal care assistance for daily activities and companionship.</p>
            </div>
            <div className="service-card">
              <h3>Nursing</h3>
              <p>Professional nursing services for medical care and monitoring.</p>
            </div>
            <div className="service-card">
              <h3>Elderly Care</h3>
              <p>Comprehensive care solutions tailored for seniors' unique needs.</p>
            </div>
            <div className="service-card">
              <h3>Physiotherapy</h3>
              <p>Rehabilitation and physical therapy to maintain mobility and health.</p>
            </div>
            <div className="service-card">
              <h3>Baby Care</h3>
              <p>Gentle care for infants and young children in a safe environment.</p>
            </div>
            <div className="service-card">
              <h3>Medical Equipment</h3>
              <p>Rental and supply of essential medical equipment and aids.</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <p>Our dedicated professionals are committed to providing the highest quality care.</p>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Dr. Emily Johnson" />
              <h4>Dr. Emily Johnson</h4>
              <p>Chief Medical Officer</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Dr. Michael Chen" />
              <h4>Dr. Michael Chen</h4>
              <p>Head of Nursing</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Dr. Sarah Patel" />
              <h4>Dr. Sarah Patel</h4>
              <p>Physiotherapy Director</p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Get in Touch</h2>
          <p>Ready to experience compassionate care? Contact us today.</p>
          <div className="contact-info">
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Email:</strong> info@healingtouch.com</p>
            <p><strong>Address:</strong> 123 Care Street, Wellness City, WC 12345</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import Navbar from '../componants/Navbar';
import Footer from '../componants/Footer';
import './Home.css';
import StepInfo from '../componants/StepInfo';
import doc from '../photos/doc.avif';
import FAQ from '../componants/FAQ';
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Home = () => {


  const DoctorsList = [
    { name: "Dr. Emily Johnson", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { name: "Dr. Michael Chen", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { name: "Dr. Emily Johnson", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { name: "Dr. Michael Chen", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { name: "Dr. Emily Johnson", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { name: "Dr. Michael Chen", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { name: "Dr. Emily Johnson", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { name: "Dr. Michael Chen", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" }
  ]

  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="hero-badge">Healing Touch</span>
            <h1 className="hero-title">Compassionate home care made personal.</h1>
            <p className="hero-description">
              Healing Touch brings expert caregivers, medical support, and family-first service together
              in one trusted platform for elderly care and recovery at home.
            </p>
            <div className="hero-actions">
              <a className="hero-btn" href="#request-callback">Request Callback</a>
            </div>
            <div className="hero-socials">
              <a href="tel:7507562079" aria-label="Call us">📞 +91 75075 62079</a>
              <a href="mailto:info@healingtouch.com" aria-label="Email us">✉️ info@healingtouch.com</a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <img src={doc} alt="Doctor providing care" />
              <div className="hero-card-meta">
                <p>Trusted care partner</p>
                <strong>Dr. Priya Sharma</strong>
              </div>
            </div>
          </div>
        </section>
        <div className="doctors-section">
          <h2>Our Dedicated Doctors</h2>
          <div className="doctors-slider">
            <div className="doctors-track">
              {DoctorsList.map((doc, index) => (
                <div className="doctor-card" key={index}>
                  <img src={doc.image} alt={doc.name} />
                  <p>{doc.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="request-callback-section" id="request-callback">
          <div className="request-left">
            <div className="request-logo">
              <h2>Healing Touch</h2>
              <p>Where Care Meets Compassion</p>
            </div>
            <div className="request-image">
              <img
                src={doc}
              />
            </div>
          </div>
          <div className="request-right">
            <h2>Request a Callback</h2>
            <form className="callback-form">
              <label htmlFor="callback-name">Name</label>
              <input id="callback-name" type="text" placeholder="Your full name" />

              <label htmlFor="callback-phone">Phone</label>
              <input id="callback-phone" type="tel" placeholder="Your phone number" />

              <label htmlFor="callback-city">Select your city</label>
              <select id="callback-city">
                <option value="">Choose your city</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="chennai">Chennai</option>
                <option value="kolkata">Kolkata</option>
              </select>

              <label htmlFor="callback-requirements">Requirements</label>
              <textarea id="callback-requirements" rows="4" placeholder="Tell us your care needs"></textarea>

              <button type="submit">Request a Callback</button>
            </form>
          </div>
        </section>
      </div>
      
      <StepInfo />
      <FAQ/>
      <Footer />
    </div>
  );
};

export default Home;
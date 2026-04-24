import React from 'react';
import Navbar from '../componants/Navbar';
import Footer from '../componants/Footer';
import './Home.css';
import StepInfo from '../componants/StepInfo';
import doc from '../photos/doc.avif';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <div className="tagline-section">
          <h1 className="tagline">Caring for Your Loved Ones with Compassion and Expertise</h1>
          <p className="subtitle">Improving accessibility, safety, and continuity of elderly care.</p>
        </div>
        <div className="doctors-section">
          <h2>Our Dedicated Doctors</h2>
          <div className="doctors-grid">
            <div className="doctor-card">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Doctor 1" />
              <p>Dr. Emily Johnson</p>
            </div>
            <div className="doctor-card">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Doctor 2" />
              <p>Dr. Michael Chen</p>
            </div>
            <div className="doctor-card">
              <img src="https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Doctor 3" />
              <p>Dr. Sarah Patel</p>
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
      <Footer />
    </div>
  );
};

export default Home;
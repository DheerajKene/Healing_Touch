import React from 'react';
import Navbar from '../componants/Navbar';
import './Home.css'; // We'll create this

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
      </div>
    </div>
  );
};

export default Home;
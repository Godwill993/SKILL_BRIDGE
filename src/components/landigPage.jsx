import React from "react";
import "../styles/landingPage.css";
import {HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
   
    <section className="landing">
      <div className="landing-content">
        <h1 className="landing-title">Connecting Students, Schools & Companies</h1>
        <p className="landing-subtitle">
          Bridging the gap between education and employment through innovation,
          collaboration, and opportunity.
        </p>
        <button className="landing-btn">start </button>
         
      </div>

      <div className="landing-image">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80"
          alt="Students connecting with companies"
        />
      </div>
     
    </section>
  );
};

export default LandingPage;

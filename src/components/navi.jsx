import React, { useState } from "react";
import "../styles/App.css";
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope, } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (<>
    <nav className="navbar">
      <div className="nav-logo">Skill <span className="logo-style"> Bridge</span>  </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}><FaHome /> Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}><FaInfoCircle /> About</a>
        <a href="#services" onClick={() => setIsOpen(false)}><FaServicestack /> Services</a>
        <a href="#contact" onClick={() => setIsOpen(false)}><FaEnvelope /> Contact</a>
      </div>

      <div className="nav-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
        </>
  );
};

export default Navbar;
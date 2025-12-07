import React, { useState } from "react";
import "../styles/form.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Form = () => {
  const signIn = () => {  };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   
 

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Create Your Account</h2>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            onChange={(e)=>setEmail (e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter a secure password"
            required
                onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <Link to="/student">
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </Link>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-buttons">
          <button type="button" className="google-btn">
            <FaGoogle /> Continue with Google
          </button>
          <button type="button" className="github-btn">
            <FaGithub /> Continue with GitHub
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;

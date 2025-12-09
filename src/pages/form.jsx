import React, { useState } from "react";
import "../styles/form.css";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  FacebookAuthProvider, 
  signInWithPopup 
} from "firebase/auth";

const Form = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // SIGN UP WITH EMAIL + PASSWORD
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      navigate("/student");
    } catch (err) {
      setError(err?.message || "Failed to create account.");
    }

    setLoading(false);
  };

  // GOOGLE SIGN-IN
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      navigate("/student");
    } catch (err) {
      setError(err?.message || "Google login failed.");
    }
  };

  // FACEBOOK SIGN-IN
  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      navigate("/student");
    } catch (err) {
      setError(err?.message || "Facebook login failed.");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter a secure password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        {error && <p className="error">{error}</p>}

        <div className="divider"><span>OR</span></div>

        <div className="social-buttons">
          <button 
            type="button" 
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            <FaGoogle /> Continue with Google
          </button>

          <button 
            type="button" 
            className="github-btn"
            onClick={handleFacebookLogin}
          >
            <FaFacebook /> Continue with Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

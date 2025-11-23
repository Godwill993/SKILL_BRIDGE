import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import "../styles/profileSummary.css";

const ProfileSummary = () => {
  return (
    <div className="profile-summary">
      <IoPersonCircleSharp size={60} />

      <h3>Lenz Godwill</h3>
      <p>GBHS Ebolowa — Computer Science Student</p>
    </div>
  );
};

export default ProfileSummary;

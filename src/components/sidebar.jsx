import React from "react";
import { FaHome, FaUserGraduate, FaBuilding, FaBook } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">StudentHub</h2>

      <ul className="menu">
        <li><FaHome /> Dashboard</li>
        <li><FaUserGraduate /> My Courses</li>
        <li><FaBuilding /> Companies</li>
        <li><FaBook /> Resources</li>
      </ul>

      <div className="logout">
        <IoLogOut /> Logout
      </div>
    </div>
  );
};

export default Sidebar;

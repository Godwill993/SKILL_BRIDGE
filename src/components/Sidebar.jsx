import React from "react";
import { FaHome, FaUserGraduate, FaBuilding, FaBook } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Skill bridge</h2>

      <ul className="menu">
        <li><FaHome /> Dashboard</li>
        <li><FaUserGraduate /> My Courses</li>
        <li><FaBuilding /> Companies</li>
        <li><FaBook /> Resources</li>
      </ul>
      <style>{`
        .sidebar { width: 240px; transition: width .2s ease; overflow: hidden; }
        .sidebar .menu { list-style: none; margin: 0; padding: 0; }
        .sidebar .menu li { display: flex; align-items: center; gap: 12px; padding: 12px 16px; font-size: 16px; }
        .sidebar .menu li svg { font-size: 18px; }
        .sidebar .logout { display: flex; align-items: center; gap: 8px; padding: 12px 16px; font-size: 16px; }

        @media (max-width: 600px) {
          .sidebar { width: 64px; }
          .sidebar .logo { display: none; }
          /* Hide text nodes by collapsing font-size on li, but restore icon size */
          .sidebar .menu li { justify-content: center; padding: 12px 0; font-size: 0; }
          .sidebar .menu li svg { font-size: 22px; }
          /* Same for logout */
          .sidebar .logout { justify-content: center; padding: 12px 0; font-size: 0; }
          .sidebar .logout svg { font-size: 22px; }
        }
      `}</style>
      <div className="logout">
        <IoLogOut /> Logout
      </div>
    </div>
  );
};

export default Sidebar;

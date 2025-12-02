import React from "react";
import "../styles/sidebar.css";
import { FaBook, FaBuilding, FaFolderOpen, FaSignOutAlt, FaBars } from "react-icons/fa";

export default function Sidebar({ collapsed, onToggle }) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-top">
        <button className="toggle-btn" onClick={onToggle} aria-label="Toggle Sidebar">
          <FaBars />
        </button>
        {!collapsed && (
          <div className="brand">
            <img src="/assets/avatar.png" alt="logo" style={{ width: 44, height: 44, borderRadius: 8, objectFit: "cover" }} />
            <h1>StudentHub</h1>
          </div>
        )}
      </div>

      <nav className="nav-links">
        <div className="nav-link"><FaBook /> {!collapsed && <span>My Courses</span>}</div>
        <div className="nav-link"><FaBuilding /> {!collapsed && <span>Companies</span>}</div>
        <div className="nav-link"><FaFolderOpen /> {!collapsed && <span>Resources</span>}</div>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn"><FaSignOutAlt /> {!collapsed && <span>Logout</span>}</button>
      </div>
    </aside>
  );
}

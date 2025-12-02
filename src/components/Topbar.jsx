import React from "react";
import "../styles/topbar.css";
import { FiBell, FiSearch } from "react-icons/fi";

export default function Topbar({ onToggleSidebar }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        {/* optional sidebar toggle for mobile */}
        <button className="icon-btn" onClick={onToggleSidebar} aria-label="Toggle menu" style={{display:"none"}}>☰</button>

        <div className="search-input">
          <FiSearch />
          <input aria-label="Search" placeholder="Search internships, posts, people..." />
          <button className="search-btn">Search</button>
        </div>
      </div>

      <div className="topbar-right">
        <button className="icon-btn" aria-label="Notifications"><FiBell /></button>
        <div className="profile-pic">
          <img src="/assets/avatar.png" alt="me" style={{width:"100%",height:"100%",objectFit:"cover"}} />
        </div>
      </div>
    </header>
  );
}

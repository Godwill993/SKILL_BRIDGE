import React, { useState } from "react";
import "../styles/dashboard.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Ratings from "../components/Ratings";
import InternshipCarousel from "../components/InternshipCarousel";
import Posts from "../components/Posts";
import Followers from "../components/Followers";
import CompaniesFollowed from "../components/CompaniesFollowed";
import SchoolIdentity from "../components/SchoolIdentity";
import Chatbot from "../components/chatbot";
export default function DashboardPage() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed((prev) => !prev);

  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <Sidebar collapsed={collapsed} onToggle={toggleSidebar} />
      </div>
      
      <div className="main-area" style={{ marginLeft: collapsed ? "80px" : "260px", transition: "margin-left 0.3s ease" }}>
        <Topbar onToggleSidebar={toggleSidebar} />
        <div className="dashboard-content container">
          <div className="left-column">
            <SchoolIdentity />
            <Ratings />
            <InternshipCarousel />
            <Posts />
          </div>
          <aside className="right-column">
            <Followers />
            <CompaniesFollowed />
          </aside>
        </div>
      </div>
      <Chatbot />
    </div>
  );
}

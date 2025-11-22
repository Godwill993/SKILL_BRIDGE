import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import OverviewCard from "../components/OverviewCard";
import InternshipList from "../components/InternshipList";
import CompanyCard from "../components/CompanyCard";
import ProfileSummary from "../components/ProfileSummary";

import { FaBook, FaBuilding, FaLaptopCode } from "react-icons/fa";
import "./StudDashboard.css";

const StudDashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">
        <Topbar />

        <div className="overview">
          <OverviewCard title="Courses" value="12" Icon={FaBook} />
          <OverviewCard title="Internships" value="3" Icon={FaBuilding} />
          <OverviewCard title="Projects" value="7" Icon={FaLaptopCode} />
        </div>

        <ProfileSummary />

        <InternshipList />

        <div className="companies">
          <CompanyCard name="Google" field="Tech Industry" />
          <CompanyCard name="CamTEL" field="Telecommunications" />
          <CompanyCard name="Orange" field="Software & Networks" />
        </div>
      </div>
    </div>
  );
};

export default StudDashboard;

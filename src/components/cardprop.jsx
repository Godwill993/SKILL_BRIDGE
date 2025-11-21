import React from "react";
import InfoCard from "./CardInfo.jsx";
import { FaUserGraduate, FaSchool, FaBuilding } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "2rem",
        padding: "3rem 5%",
        background: "#f8f9fb",
      }}
    >
      <InfoCard
        icon={FaUserGraduate}
        title="For Students"
        description="Gain exposure and opportunities by connecting directly with schools and potential employers."
      />
      <InfoCard
        icon={FaSchool}
        title="For Schools"
        description="Collaborate with companies and improve student outcomes through real-world programs."
      />
      <InfoCard
        icon={FaBuilding}
        title="For Companies"
        description="Partner with educational institutions to recruit skilled, job-ready candidates."
      />
    </div>
  );
};

export default FeaturesSection;

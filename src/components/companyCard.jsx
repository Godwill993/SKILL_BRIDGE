import React from "react";
import { FaBuilding } from "react-icons/fa";
import "./CompanyCard.css";

const CompanyCard = ({ name, field }) => {
  return (
    <div className="company-card">
      <FaBuilding size={28} />
      <h3>{name}</h3>
      <p>{field}</p>
    </div>
  );
};

export default CompanyCard;

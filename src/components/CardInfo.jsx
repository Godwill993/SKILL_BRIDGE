import React from "react";
import "../styles/CardInfo.css";

const InfoCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="info-card">
      <div className="info-icon">
     
        {Icon && <Icon size={40} />}
      </div>
      <h3 className="info-title">{title}</h3>
      <p className="info-description">{description}</p>
    </div>
  );
};

export default InfoCard;

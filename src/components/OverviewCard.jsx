import React from "react";
import "../styles/overviewCard.css";

const OverviewCard = ({ title, value, Icon }) => {
  return (
    <div className="overview-card">
      <div className="icon-box">
        {Icon && <Icon size={25} />}
        
      </div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default OverviewCard;

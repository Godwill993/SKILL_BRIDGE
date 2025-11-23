import React from "react";
import { AiOutlineBell, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import "../styles/Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search">
        <AiOutlineSearch />
        <input type="text" placeholder="Search..." />
      </div>

      <div className="top-icons">
        <AiOutlineBell />
        <AiOutlineUser />
      </div>
    </div>
  );
};

export default Topbar;

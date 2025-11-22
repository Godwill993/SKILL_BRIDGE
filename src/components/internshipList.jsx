import React from "react";
import { MdWork } from "react-icons/md";
import "./InternshipList.css";

const InternshipList = () => {
  const internships = [
    { company: "Google", role: "Frontend Intern" },
    { company: "MTN Cameroon", role: "Network Engineer Intern" },
    { company: "Meta", role: "Software Engineering Intern" },
  ];

  return (
    <div className="internship-list">
      <h2><MdWork /> Internship Opportunities</h2>

      <ul>
        {internships.map((item, i) => (
          <li key={i}>
            <strong>{item.company}</strong> — {item.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InternshipList;

import React from "react";
import { FaUserGraduate, FaSchool, FaBuilding } from "react-icons/fa";
import "../styles/userSelection.css"
const UserTypeSelection = ({ onSelect }) => {
  const options = [
    {
      title: "Student",
      description: "Access school rankings, internship opportunities & courses.",
      icon: <FaUserGraduate size={40} />,
      type: "student",
    },
    {
      title: "School",
      description: "Manage student data, rankings and connect with companies.",
      icon: <FaSchool size={40} />,
      type: "school",
    },
    {
      title: "Company",
      description: "Find skilled students, post internships & collaborate with schools.",
      icon: <FaBuilding size={40} />,
      type: "company",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">
        Choose Your Profile
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        {options.map((opt) => (
          <div
            key={opt.type}
            onClick={() => onSelect(opt.type)}
            className="bg-white shadow-md rounded-2xl p-6 text-center cursor-pointer
                       hover:shadow-xl transition duration-200 hover:-translate-y-1
                       border border-transparent hover:border-blue-500"
          >
            <div className="flex justify-center text-blue-600 mb-4">
              {opt.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2">{opt.title}</h2>
            <p className="text-gray-600 text-sm">{opt.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTypeSelection;

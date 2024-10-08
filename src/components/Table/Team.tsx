import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const teamData = [
  {
    name: "Oluwaleke Ojo",
    role: "iOS developer",
    project: "ZIPCAR",
    tasks: "87/135",
    progress: 64,
    color: "#6f6eff"
  },
  {
    name: "Liam Hughes",
    role: "Laravel developer",
    project: "BITBANK",
    tasks: "340/420",
    progress: 81,
    color: "#ff6b6b"
  },
  {
    name: "Adeleke Seun",
    role: "React developer",
    project: "PAYERS",
    tasks: "50/82",
    progress: 61,
    color: "#ffcd38"
  },
  {
    name: "Alabi Fikayo",
    role: "Angular developer",
    project: "BRANDI",
    tasks: "98/260",
    progress: 38,
    color: "#3bc9ff"
  },
  {
    name: "Carl Bowman",
    role: "VueJS developer",
    project: "AVIATO",
    tasks: "12/25",
    progress: 48,
    color: "#8a9ea7"
  }
];

const TeamTable = () => {
  return (
    <div className="p-4 pt-16 bg-white rounded-lg shadow-md">
      <table className="min-w-full text-left">
        <thead className=" text-black-1">
          <tr>
            <th className="pb-2 font-medium text-gray-600">NAME</th>
            <th className="pb-2 font-medium text-gray-600">PROJECT</th>
            <th className="pb-2 font-medium text-gray-600">TASKS</th>
            <th className="pb-2 font-medium text-gray-600">PROGRESS</th>
          </tr>
        </thead>
        <tbody>
          {teamData.map((member, idx) => (
            <tr key={idx} className="border-b">
              <td className="py-3 flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-3"
                  src={`https://i.pravatar.cc/150?img=${idx + 1}`}
                  alt={member.name}
                />
                <div>
                  <div className="text-sm font-semibold text-gray-800">
                    {member.name}
                  </div>
                  <div className="text-xs text-gray-500">{member.role}</div>
                </div>
              </td>
              <td className="py-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold`}
                  style={{
                    backgroundColor: `${member.color}22`,
                    color: `${member.color}`
                  }}
                >
                  {member.project}
                </span>
              </td>
              <td className="py-3 text-sm">{member.tasks}</td>
              <td className="py-3 w-16">
                <CircularProgressbar
                  value={member.progress}
                  text={`${member.progress}%`}
                  styles={buildStyles({
                    textSize: "30px",
                    pathColor: member.color,
                    textColor: "#555",
                    trailColor: "#eee"
                  })}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;

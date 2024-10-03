import React from "react";
import GradientLine from "../GradientLine";

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  percentageChange: string;
  backgroundColor: string;
  extraClass?: string;
  description: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  icon,
  title,
  value,
  percentageChange,
  extraClass,
  backgroundColor,
  description
}) => {
  return (
    <div className="flex flex-col relative p-4 bg-white shadow-md rounded-lg w-56">
      <div
        className={`text-2xl absolute top-[-20px] bg-${backgroundColor} text-white rounded-lg p-2 h-[55px] w-[55px] flex items-center justify-center shadow-md shadow-gray-300 ${extraClass}`}
      >
        {icon}
      </div>
      <div className="flex flex-col items-end text-black-1 gap-1">
        <span className="text-sm font-thin">{title}</span>
        <h2 className="text-2xl font-semibold">{value}</h2>
      </div>
      <GradientLine/>

      <div className="flex gap-2 items-center text-black-1">
        <span className={`text-green-500 text-sm font-medium`}>
          {percentageChange}
        </span>
        <span className=" text-xs">{description}</span>
      </div>
    </div>
  );
};

export default StatsCard;

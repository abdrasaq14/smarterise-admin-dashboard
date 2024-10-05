import React from "react";
import { LuClock } from "react-icons/lu";

interface ChartCardProps {
  chart: React.ReactNode;
  title: string;
  time?: string;
  subTitle?: string;
}

function ChartCard2({ chart, title, time, subTitle }: ChartCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden h-auto">
      <h3 className="text-lg font-semibold mb-4 text-black-1">{title}</h3>
      <div className="!flex-1 !flex-grow w-full">{chart}</div>{" "}
      {/* Ensure the chart takes up the remaining space */}
      <div className="flex flex-col mt-4">
        <span className="text-sm font-thin flex items-center gap-1 mt-2">
          <LuClock />
          {time}
        </span>
      </div>
    </div>
  );
}

export default ChartCard2;

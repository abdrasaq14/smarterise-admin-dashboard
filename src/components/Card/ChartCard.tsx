import React from "react";
import GradientLine from "../GradientLine";
interface ChartCardProps {
  chart: React.ReactNode;
  title: string;
  subTitle: string;
    time: string;
    extraClass?: string;
    chartBackgroundColor?: string;
}
function ChartCard({ chart, title, subTitle, time, chartBackgroundColor, extraClass }: ChartCardProps) {
  return (
    <div className="relative p-4 bg-white rounded-lg shadow-md h-[20rem] w-[20rem]">
      <div
        className={`p-2 absolute w-[90%] h-[60%] -translate-x-1/2  top-[-25px] left-1/2  bg-${chartBackgroundColor} rounded-xl ${extraClass}`}
      >
        {chart}
      </div>
      <div className="flex flex-col mt-[60%] text-black-1">
        <span className="font-bold">{title}</span>
        <span className="font-thin">{subTitle}</span>
        <GradientLine />
        <span className="text-sm font-thin">{time}</span>
      </div>
    </div>
  );
}

export default ChartCard;

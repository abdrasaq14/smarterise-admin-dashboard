import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ActiveSessionChart = () => {
  const activeSessionsData = {
    labels: ["Active", "Inactive", "Idle"],
    datasets: [
      {
        label: "Active Sessions",
        data: [60, 25, 15],
        backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
        borderColor: ["#388E3C", "#F57C00", "#D32F2F"],
        borderWidth: 2
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the chart does not lock the aspect ratio
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const
      }
    }
  };

  return (
    <div className="relative h-full w-full  flex justify-center items-center p-4">
      <div
        className="chart-container w-full h-auto"
        style={{ minHeight: "200px" }}
      >
        <Doughnut data={activeSessionsData} options={options} />
      </div>
    </div>
  );
};

export default ActiveSessionChart;

import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
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

const PageVisitChart = () => {
  const pageVisitData = {
    labels: ["Home", "Dashboard", "Profile", "Settings", "Help"],
    datasets: [
      {
        label: "Page Visits",
        data: [500, 700, 300, 400, 250],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(54, 162, 235, 0.6)"
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)"
        ],
        borderWidth: 1
      }
    ]
  };
  return (
    <div className="relative shadow-lg h-full !w-full bg-inherit !overflow-hidden">
      <div className="chart-container">
        <Bar
          data={pageVisitData}
          options={{
            responsive: true,
            plugins: { legend: { display: false } }
          }}
        />
      </div>
    </div>
  );
};

export default PageVisitChart;

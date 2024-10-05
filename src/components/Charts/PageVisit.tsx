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
     const options = {
       responsive: true,
       maintainAspectRatio: false,
       plugins: {
         legend: {
           display: false,
           position: "bottom" as const
         }
       },
       scales: {
         y: {
           beginAtZero: true,
           ticks: {
             font: {
               size: 10,
               family: "Arial",
               weight: "400"
             },
             stepSize: 50, // Set the step size to 100
             max: 500, // Set the maximum value to 500
             suggestedMin: 0, // Suggest a minimum value of 0
             suggestedMax: 500 // Suggest a maximum value of 500
           }
         }
       }
     };
  return (
    <div className="relative !w-full !h-full flex justify-center items-center p-4">
      <div className="chart-container min-h-[200px]">
        <Bar data={pageVisitData} options={options} />
      </div>
    </div>
  );
};

export default PageVisitChart;

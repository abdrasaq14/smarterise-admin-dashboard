import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LoginChart = () => {
  const loginLogoutData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Logins",
        data: [150, 200, 250, 220, 300, 350, 400],
        borderColor: "#42A5F5",
        backgroundColor: "rgba(66, 165, 245, 0.2)",
        tension: 0.4,
        fill: true
      },
      {
        label: "Logouts",
        data: [100, 180, 200, 170, 260, 300, 320],
        borderColor: "#FF6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
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
          stepSize: 50,
          max: 500, 
          suggestedMin: 0, 
          suggestedMax: 500 
        }
      }
    }
  };

  return (
    <div className="relative !w-full !h-full flex justify-center items-center p-4">
      <div className="chart-container min-h-[200px]">
        <Line data={loginLogoutData} options={options} />
      </div>
    </div>
  );
};

export default LoginChart;

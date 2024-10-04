import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register the components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CurvedLineChart = () => {
  const data = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Traffic",
        data: [50, 150, 300, 100, 250, 400, 200, 350, 450],
        borderColor: "#3B82F6", // Blue color for Traffic
        backgroundColor: "rgba(59, 130, 246, 0.1)", // Light blue area
        tension: 0.4, // Curves the line
        fill: true,
        borderWidth: 3,
        pointRadius: 0 // Remove points
      },
      {
        label: "Sales",
        data: [20, 100, 150, 250, 300, 350, 250, 300, 400],
        borderColor: "#A78BFA", // Purple color for Sales
        backgroundColor: "rgba(167, 139, 250, 0.1)", // Light purple area
        tension: 0.4, // Curves the line
        fill: true,
        borderWidth: 3,
        pointRadius: 0 // Remove points
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "line" // Lines for legend
        }
      },
      tooltip: {
        mode: "index" as const,
        intersect: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100,
          callback: (value:any) => value + "" // No 'k' on numbers (e.g., 500 instead of 500k)
        },
        grid: {
          color: "rgba(200, 200, 200, 0.2)" // Light grid lines
        }
      },
      x: {
        grid: {
          display: false // Hide x-axis grid
        }
      }
    },
    elements: {
      line: {
        tension: 0.4 // Smooth lines
      }
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Sales Overview</h2>
      <p className="text-sm text-gray-500 mb-2">
        than last year{" "}
        <span className="text-green-500 font-semibold">+20%</span>
      </p>
      <Line data={data} options={options} />
    </div>
  );
};

export default CurvedLineChart;

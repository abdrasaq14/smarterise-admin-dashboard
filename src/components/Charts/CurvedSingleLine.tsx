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

const CurvedSingleLineChart = () => {
  const data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "Sales",
        data: [50, 150, 300, 100, 250, 400, 200, 350, 450],
        borderColor: "#3B82F6", // Blue color for the line
        backgroundColor: "rgba(59, 130, 246, 0.1)", // Light blue area
        tension: 0.4, // Curved line
        fill: true,
        borderWidth: 3,
        pointRadius: 0 // No points on the line
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
          pointStyle: "line" // Use a line instead of circles in the legend
        }
      },
      tooltip: {
        mode: "nearest" as const,
        intersect: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100,
          max: 500 // Ensures the max is set to 500 or adjust based on your dataset
        },
        grid: {
          color: "rgba(200, 200, 200, 0.2)" // Light grid lines
        }
      },
      x: {
        grid: {
          display: false // Hide x-axis grid lines
        }
      }
    },
    elements: {
      line: {
        tension: 0.4 // Smooth line
      }
    }
  };

  return (
    <div className="relative shadow-lg h-full !w-full bg-inherit !overflow-hidden">
      <div className="chart-container">
        <Line className="chart" data={data} options={options} />
      </div>
    </div>
  );
};

export default CurvedSingleLineChart;

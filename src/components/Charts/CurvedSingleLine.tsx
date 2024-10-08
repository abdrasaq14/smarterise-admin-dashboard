import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

// Register the components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
        borderColor: "#ffffff", // Blue color for the line
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
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
        
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "white", // Y-axis label color
          font: {
            size: 10, // Font size for Y-axis labels
            family: "Arial", // Font family for Y-axis labels
            weight: "400" // Font weight for Y-axis labels
          },
          stepSize: 100, // Set the step size to 100
          max: 500, // Set the maximum value to 500
          suggestedMax: 500 // Suggest a maximum value of 500
        },
        grid: {
          color: "rgba(200, 200, 200, 0.2)" // Light grid lines
        }
      },
      x: {
        ticks: {
          color: "white", // X-axis label color
          font: {
            size: 10, // Font size for X-axis labels
            family: "Arial", // Font family for X-axis labels
            weight: "400" // Font weight for X-axis labels
          }
        },
        grid: {
          display: false // Hide grid lines on X-axis
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

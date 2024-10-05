import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

// Register the chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "Website views",
        data: [50, 25, 10, 40, 30, 55, 25], // Example data points
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Bar color with opacity
        borderRadius: 100,
        barThickness: 6
      }
    ]
  };

  // Define the chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "white", // Y-axis label color
          font: {
            size: 12, // Font size for Y-axis labels
            family: "Arial", // Font family for Y-axis labels
            weight: "400" // Font weight for Y-axis labels
          }
        },
        grid: {
          display: true,
          color: "rgba(255, 255, 255, 0.2)" // Grid line color
        }
      },
      x: {
        ticks: {
          color: "white", // X-axis label color
          font: {
            size: 12, // Font size for X-axis labels
            family: "Arial", // Font family for X-axis labels
            weight: "400" // Font weight for X-axis labels
          }
        },
        grid: {
          display: false // Hide grid lines on X-axis
        }
      }
    },
    plugins: {
      legend: {
        display: false // Hide the legend
      }
    }
  };

  return (
    <div className="relative shadow-lg h-full !w-full bg-inherit !overflow-hidden">
      <div className="chart-container">
        <Bar className="chart" data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;

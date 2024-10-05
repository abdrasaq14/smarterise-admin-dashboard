import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

// Register the chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "Weekly Sales",
        data: [50, 25, 10, 40, 30, 55, 25], 
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Background color for the area under the line
        borderColor: "rgba(255, 255, 255, 1)", // Line color
        borderWidth: 2, // Width of the line
        pointBackgroundColor: "rgba(255, 255, 255, 1)", // Point color
        pointBorderColor: "rgba(255, 255, 255, 1)", // Point border color
        pointRadius: 4, // Radius of the points
        fill: true // Fill the area under the line
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
          display: false 
        }
      }
    },
    plugins: {
      legend: {
        display: false 
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

export default LineChart;

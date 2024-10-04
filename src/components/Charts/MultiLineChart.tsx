import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title // Import Title plugin
} from "chart.js";

// Register the chart components, including Title
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title // Register Title plugin here
);

const MultiLineChart = () => {
  const data = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"], // X-axis labels
    datasets: [
      {
        label: "Active Users",
        data: [50, 25, 10, 40, 30, 55, 25, 76], // Example data points
        backgroundColor: "rgba(0, 123, 255, 0.1)", // Blue background fill color
        borderColor: "rgba(0, 123, 255, 1)", // Blue line color
        borderWidth: 2, // Line width
        pointBackgroundColor: "rgba(0, 123, 255, 1)", // Point color
        pointBorderColor: "rgba(0, 123, 255, 1)", // Point border color
        pointRadius: 4, // Point size
        tension: 0.4, // Curved lines
        fill: true // Fill the area under the line
      },
      {
        label: "Inactive Users",
        data: [30, 10, 5, 20, 15, 25, 10, 25], // Another example dataset
        backgroundColor: "rgba(255, 193, 7, 0.1)", // Yellow background fill color
        borderColor: "rgba(255, 193, 7, 1)", // Yellow line color
        borderWidth: 2, // Line width
        pointBackgroundColor: "rgba(255, 193, 7, 1)", // Point color
        pointBorderColor: "rgba(255, 193, 7, 1)", // Point border color
        pointRadius: 4, // Point size
        tension: 0.4, // Curved lines
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
          color: "#787878", // Y-axis label color
          font: {
            size: 12, // Font size for Y-axis labels
            family: "Arial", // Font family for Y-axis labels
            weight: "400" // Font weight for Y-axis labels
          }
        },
        grid: {
          display: true,
          color: "#aaaaaa44" // Grid line color
        }
      },
      x: {
        ticks: {
          color: "#787878", // X-axis label color
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
      title: {
        display: true,
        text: "User Report", // Chart title
        align: "start" as const, // Align to the start (left)
        position: "top" as const, // Position it at the top
        padding: {
          top: 10,
          bottom: 10
        },
        font: {
          size: 16,
          weight: "bold"
        },
        color: "#787878" // Title color
      },
      legend: {
        display: true, // Display the legend
        labels: {
          color: "#787878" // Legend label color
        }
      }
    }
  };

  return (
    <div className="relative p-4 h-auto bg-inherit overflow-hidden">
      <div className="chart-container">
        <Line className="chart" data={data} options={options} />
      </div>
    </div>
  );
};

export default MultiLineChart;

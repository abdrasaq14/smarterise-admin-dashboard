import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Referral", "Email", "Direct", "Social", "Others"],
    datasets: [
      {
        data: [40, 17, 4, 33, 47], // Corresponding percentages
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f43f5e",
          "#6366f1",
          "#fbbf24"
        ], // Colors for each section
        hoverBackgroundColor: [
          "#2563eb",
          "#059669",
          "#e11d48",
          "#4f46e5",
          "#f59e0b"
        ], // Colors on hover
        borderWidth: 2 // Space between sections
      }
    ]
  };

  const options = {
    responsive: true,
    cutout: "70%", // Controls the size of the inner cutout (donut hole)
    plugins: {
      title: {
        display: true,
        text: "Monthly Traffic", // Chart title
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
        position: "right" as const, // TypeScript expects a specific value
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 14,
            family: "Arial"
          }
        }
      },
      tooltip: {
        enabled: true
      }
    }
  };

  return (
    <div className="relative h-full bg-white shadow-md rounded-lg p-4">
      <div
        className="chart-container"
        style={{ position: "relative", width: "100%", height: "300px" }}
      >
        <Doughnut data={data} options={options} />
        {/* Custom center text */}
        <div className="absolute -translate-x-[22%] -translate-y-[-5%] inset-0 flex items-center justify-center">
          <div className="font-bold text-3xl" style={{ textAlign: "center" }}>
            <span>5K</span>
            <div style={{ fontSize: "16px", fontWeight: "400" }}>
              Overall Traffic
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;

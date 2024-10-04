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

const DashboardCharts = () => {
  // Data for Login and Logout Trends (Line Chart)
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

  // Data for Page Visit Frequency (Bar Chart)
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

  // Data for Active Sessions (Doughnut Chart)
  const activeSessionsData = {
    labels: ["Active", "Inactive", "Idle"],
    datasets: [
      {
        label: "Active Sessions",
        data: [60, 25, 15],
        backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
        borderColor: ["#388E3C", "#F57C00", "#D32F2F"],
        borderWidth: 2
      }
    ]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {/* Login and Logout Trends (Line Chart) */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Login and Logout Trends</h3>
        <Line
          data={loginLogoutData}
          options={{
            responsive: true,
            plugins: { legend: { position: "top" } }
          }}
        />
      </div>

      {/* Page Visit Frequency (Bar Chart) */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Page Visit Frequency</h3>
        <Bar
          data={pageVisitData}
          options={{
            responsive: true,
            plugins: { legend: { display: false } }
          }}
        />
      </div>

      {/* Active Sessions (Doughnut Chart) */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Active Sessions</h3>
        <Doughnut
          data={activeSessionsData}
          options={{
            responsive: true,
            plugins: { legend: { position: "top" } }
          }}
        />
      </div>
    </div>
  );
};

export default DashboardCharts;

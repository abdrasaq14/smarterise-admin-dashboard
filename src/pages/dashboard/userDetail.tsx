import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface User { 
  name: string;
  email: string;
  phone: string;
  website: string;
}

// Function to generate mock data for Login/Logout Trends
const generateLoginLogoutData = () => ({
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
});

// Function to generate mock data for Page Visits (Bar chart by page name)
const generatePageVisitsData = () => ({
  labels: ["Dashboard", "Products", "Profile", "Settings", "Help", "Orders"],
  datasets: [
    {
      label: "Page Visits",
      data: [1200, 900, 750, 500, 300, 450],
      backgroundColor: [
        "#36A2EB",
        "#FF6384",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF",
        "#FF9F40"
      ],
      borderColor: [
        "#36A2EB",
        "#FF6384",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF",
        "#FF9F40"
      ],
      borderWidth: 1
    }
  ]
});

// Function to generate mock data for Total Orders (monthly data)
const generateTotalOrdersData = () => ({
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    
  ],
  datasets: [
    {
      label: "Total Orders",
      data: [500, 450, 620, 300, 520, 730, 810, 910],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "#4BC0C0",
      borderWidth: 1
    }
  ]
});

const UserDetails = () => {
  const { id } = useParams(); 
  const [user, setUser] = useState({} as User);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the user details using the ID with the `fetch` API
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  const loginLogoutData = generateLoginLogoutData();
  const pageVisitsData = generatePageVisitsData();
  const totalOrdersData = generateTotalOrdersData();

  if (isLoading) return <p>Loading user data...</p>;

  return (
      <DashboardLayout>
      <div className="w-full h-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {user.name || "John Doe"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Email</h2>
          <p>{user.email || "johndoe@gmail.com"}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Phone</h2>
          <p>{user.phone || "78345500"}</p>
        </div>

      </div>

      {/* Chart for Login/Logout Trends */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Login and Logout Trends</h2>
        <div className="relative h-96">
          <Line
            data={loginLogoutData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>

      {/* Chart for Page Visits (Bar Chart) */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Page Visits</h2>
        <div className="relative h-96">
          <Bar
            data={pageVisitsData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>

      {/* Chart for Total Orders (Monthly) */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Total Orders (Monthly)</h2>
        <div className="relative h-96">
          <Bar
            data={totalOrdersData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>
      </div>
      </DashboardLayout>
  );
};

export default UserDetails;

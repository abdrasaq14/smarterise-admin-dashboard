import React from "react";
import StatsCard from "../../components/Card/StatsCard";
import {  FaUsers, FaUserCheck, FaUsersSlash } from "react-icons/fa";
import { ImUserMinus } from "react-icons/im";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import BarChart from "../../components/Charts/BarChart";
import LineChart from "../../components/Charts/LineChart";
import ChartCard from "../../components/Card/ChartCard";
import MultiLineChart from "../../components/Charts/MultiLineChart";
import CurvedLineChart from "../../components/Charts/CurvedMultiLineChart";
import CurvedSingleLineChart from "../../components/Charts/CurvedSingleLine";
function Dashboard() {
  const stats = [
    {
      icon: <FaUsers />,
      title: "Total Users",
      value: 500,
      percentageChange: "+5%",
      backgroundColor: "gradient-blue",
      extraClass: "gradient-blue",
      description: "than last month"
    },

    {
      icon: <FaUserCheck />,
      title: "Active Users",
      value: 465,
      percentageChange: "+25%",
      backgroundColor: "gradient-green",
      extraClass: "gradient-green",
      description: "than last month"
    },
    {
      icon: <ImUserMinus />,
      title: "Inactive Users",
      value: 25,
      percentageChange: "-10%",
      backgroundColor: "gradient-black",
      extraClass: "gradient-black",
      description: "than last month"
    },
    {
      icon: <FaUsersSlash />,
      title: "Suspended Users",
      value: 10,
      percentageChange: "-5%",
      backgroundColor: "gradient-red",
      extraClass: "gradient-red",
      description: "than last month"
    }
  ];
  const charts = [
    {
      title: "Website Views",
      subTitle: "Average page views per day",
      chart: <BarChart />,
      time: "Last 7 days",
      chartBackgroundColor: "gradient-blue"
    },
    {
      title: "Sales",
      subTitle: "Average sales per day",
      chart: <LineChart />,
      time: "Last 7 days",
      chartBackgroundColor: "gradient-green"
    },
    {
      title: "Returns",
      subTitle: "Average returns per day",
      chart: <CurvedSingleLineChart />,
      time: "Last 7 days",
      chartBackgroundColor: "gradient-black"
    }
  ];
  return (
    <DashboardLayout>
      <div className="w-full h-full">
        <div className="flex flex-wrap gap-6">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
              percentageChange={stat.percentageChange}
              backgroundColor={stat.backgroundColor}
              extraClass={stat.extraClass}
              description={stat.description}
            />
          ))}
        </div>
        <div className="mt-14 flex flex-wrap gap-6">
          {charts.map((chart, index) => (
            <ChartCard
              key={index}
              chart={chart.chart}
              title={chart.title}
              subTitle={chart.subTitle}
              time={chart.time}
              chartBackgroundColor={chart.chartBackgroundColor}
              extraClass={chart.chartBackgroundColor}
            />
))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;

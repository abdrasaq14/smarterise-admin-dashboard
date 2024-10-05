import React from "react";
import StatsCard from "../../components/Card/StatsCard";
import { FaUsers, FaUserCheck, FaUsersSlash } from "react-icons/fa";
import { ImNewTab, ImUserMinus } from "react-icons/im";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import BarChart from "../../components/Charts/BarChart";
import LineChart from "../../components/Charts/LineChart";
import ChartCard from "../../components/Card/ChartCard";
import MultiLineChart from "../../components/Charts/MultiLineChart";
import CurvedSingleLineChart from "../../components/Charts/CurvedSingleLine";
import PieChart from "../../components/Charts/PieCharts";
import UserTable from "../../components/Table/User";
import PageVisitChart from "../../components/Charts/PageVisit";
import ActiveSessionChart from "../../components/Charts/ActiveSession";
import LoginChart from "../../components/Charts/LoginLogOut";
import ChartCard2 from "../../components/Card/ChartCard2";
import { Link } from "react-router-dom";
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

  const charts2 = [
    {
      title: "Page Visits",
      subTitle: "Average page visits per day",
      chart: <PageVisitChart />,
      time: "Last 7 days",
      chartBackgroundColor: "gradient-blue"
    },
    {
      title: "Active Sessions",
      subTitle: "Average active sessions per day",
      chart: <ActiveSessionChart />,
      time: "Last 7 days",
      chartBackgroundColor: "gradient-green"
    },
    {
      title: "Login/Logout",
      subTitle: "Average login/logout per day",
      chart: <LoginChart />,
      time: "Last 7 days",
      chartBackgroundColor: "gradient-black"
    }
  ];
  return (
    <DashboardLayout>
      <div className="w-full h-full">
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
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
        <div className="mt-16 grid gap-10 lg:gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
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
        <div className="mt-12 flex flex-wrap lg:grid grid-cols-5 gap-4">
          <div className="w-full lg:col-span-3 bg-white rounded-lg overflow-hidden">
            <MultiLineChart />
          </div>
          <div className="lg:col-span-2 bg-white rounded-lg overflow-hidden">
            <PieChart />
          </div>
        </div>
        <div className="mt-14 shadow-md rounded-lg bg-white relative">
          <div className="absolute flex items-center justify-between text-xl -translate-x-1/2 left-1/2 top-[-20px] bg-gradient-blue rounded-lg shadow-md text-white w-[95%] h-[4rem] p-4 ">
            <span>User activity</span>
            <Link to="/users/activity">
              <ImNewTab />
            </Link>
          </div>
          <div className="w-full overflow-x-auto">
            <UserTable />
          </div>
        </div>
        <div className="mt-16 grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {charts2.map((chart, index) => (
            <ChartCard2
              key={index}
              chart={chart.chart}
              title={chart.title}
              subTitle={chart.subTitle}
              time={chart.time}
            />
          ))}
        </div>
      
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;

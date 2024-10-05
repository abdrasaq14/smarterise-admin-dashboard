import SideBar from "../../components/SideBar/SideNav";
import {
  FaTable,
  FaSignInAlt,
  FaUser,
  FaHome,
  FaFileInvoice
} from "react-icons/fa";
import NavBar from "../../components/NavBar/NavBar";
function DashboardLayout({ children }: { children: React.ReactNode }) {
  const routes = [
    { link: "/dashboard", text: "Dashboard", icon: <FaHome /> },
    { link: "/users/activity", text: "User Activity", icon: <FaTable /> },
    { link: "/team-members", text: "Team Members", icon: <FaFileInvoice /> },
    { link: "", text: "Profile", icon: <FaUser /> },
    { link: "/login", text: "Log out", icon: <FaSignInAlt /> },
    
  ];

  return (
    <div className=" bg-[#f5f5f5] h-screen w-full flex p-4">
      <SideBar routes={routes} />
      <div className="flex-1 overflow-y-auto relative px-4">
        <NavBar />
        <div className="px-2 py-4 mt-8">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;

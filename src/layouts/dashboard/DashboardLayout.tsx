import SideBar from "../../components/SideBar/SideNav";
import {
  FaTable,
  FaBell,
  FaSignInAlt,
  FaSignOutAlt,
  FaFileAlt,
  FaUser,
  FaHome,
  FaFileInvoice
} from "react-icons/fa";
import NavBar from "../../components/NavBar/NavBar";
function DashboardLayout({ children }: { children: React.ReactNode }) {
  const routes = [
    { link: "/dashboard", text: "Dashboard", icon: <FaHome /> },
    { link: "/tables", text: "Tables", icon: <FaTable /> },
    { link: "/billing", text: "Billing", icon: <FaFileInvoice /> },
    { link: "/rtl", text: "RTL", icon: <FaSignOutAlt /> },
    { link: "/notifications", text: "Notifications", icon: <FaBell /> },
    { link: "/profile", text: "Profile", icon: <FaUser /> },
    { link: "/sign-in", text: "Sign In", icon: <FaSignInAlt /> },
    { link: "/sign-up", text: "Sign Up", icon: <FaFileAlt /> }
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

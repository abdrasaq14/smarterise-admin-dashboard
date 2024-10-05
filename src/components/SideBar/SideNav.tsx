import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { smarteriseLogo } from "../../assets/images";
import clsx from "clsx";

interface Route {
  link: string;
  text: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  routes: Route[];
}

const Sidebar: React.FC<SidebarProps> = ({ routes }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation(); // Access the current route

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      className={clsx(
        "h-full bg-gradient-to-b from-gray-700 to-gray-900 flex flex-col justify-between p-4 transition-all duration-300 rounded-xl relative",
        { "w-16": collapsed, "w-64": !collapsed }
      )}
    >
      <div>
        {/* Logo */}
        <div
          className={clsx("mb-16 flex items-center transition-opacity", {
            "w-10": collapsed,
            "w-full": !collapsed
          })}
        >
          <div className="bg-white p-2 rounded-md">
            <img src={smarteriseLogo} alt="logo" className="max-h-8" />
          </div>
          {!collapsed && (
            <div className="flex flex-col items-start ml-3">
              <span className="text-[#f5f5f5] text-lg tracking-widest font-semibold">
                SMARTERISE
              </span>
              <span className="text-[10px] tracking-tight text-[#888888]">
                Data-driven sustainable energy
              </span>
            </div>
          )}
        </div>

        {/* Collapse Icon */}
        <button
          onClick={toggleSidebar}
          className="text-black-1 cursor-pointer mb-6 focus:outline-none absolute right-[-10px] top-[8%] rounded-full p-2 bg-white shadow-md"
        >
          {collapsed ? (
            <FaChevronRight size={10} />
          ) : (
            <FaChevronLeft size={10} />
          )}
        </button>

        {/* Navigation Links */}
        <nav className="space-y-4">
          {routes.map((route, index) => {
            const isActive = location.pathname === route.link; // Check if the current route matches
            return (
              <Link
                to={route.link}
                key={index}
                className={clsx(
                  "flex items-center p-2 rounded-md transition-colors duration-200",
                  {
                    "justify-center": collapsed,
                    "bg-white text-black-1": isActive, // Apply active styles if current route matches
                    "text-gray-300 hover:text-white": !isActive // Default styles for inactive routes
                  }
                )}
              >
                <div className="mr-3">{route.icon}</div>
                {!collapsed && <span>{route.text}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

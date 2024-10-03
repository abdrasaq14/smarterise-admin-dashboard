import { IoMdHome } from "react-icons/io";
import { FiUser, FiSettings, FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-inherit px-2 py-4 w-full text-black-1">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center text-sm">
        <Link to="/" className="hover:text-gray-700">
          <IoMdHome className="h-6 w-6" />
        </Link>
        <span className="mx-2">/</span>
        <span className="">Dashboard</span>
      </div>

      {/* Right section: Search box and icons */}
      <div className="flex items-center space-x-4">
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search here"
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none"
        />

        {/* Icons */}
        <div className="flex space-x-4">
          {/* User Icon */}
          <button className=" hover:text-gray-700">
            <FiUser className="h-6 w-6" />
          </button>

          {/* Settings Icon */}
          <button className=" hover:text-gray-700">
            <FiSettings className="h-6 w-6" />
          </button>

          {/* Notification Icon */}
          <button className=" hover:text-gray-700">
            <FiBell className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

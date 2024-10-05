import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ITEMS_PER_PAGE = 10; 

const UserTable = () => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { pathname } = useLocation();

  // Fetch data from randomuser API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://randomuser.me/api/?results=${
            pathname === "/dashboard" ? 6 : 100
          }` // Fetch more data for pagination
        );
        const data = await response.json();
        console.log("userData", data);
        const formattedData = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          profileImage: user.picture.medium,
          status: Math.random() > 0.5 ? "Online" : "Offline", // Randomly set status
          lastLogin: new Date().toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
          }),
          id: user.id.name
        }));

        setTableData(formattedData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);

  // Get current page data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = tableData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Handle page change
  const handlePageChange = (pageNumber:number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4 bg-inherit overflow-hidden mt-[40px]">
      <div className="overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="text-black-1">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium">
                Last Login
              </th>
            </tr>
          </thead>
          <tbody className="bg-inherit divide-y divide-gray-200">
            {currentData.map((row: any, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/user/${row.id}`} className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={row.profileImage}
                      alt={`${row.name}'s profile`}
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {row.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {row.name.toLowerCase().split(" ").join(".")}
                        @example.com
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/user/${row.id}`}
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      row.status === "Online"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {row.status}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Link to={`/user/${row.id}`}>{row.lastLogin}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-10 w-full">
          <div className="w-[50%] mx-auto flex items-center justify-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 border rounded-md mx-1 ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-white text-black"
              }`}
            >
              Prev
            </button>
            {/* Page Information */}
            <span className="text-sm">
              {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 border rounded-md mx-1 ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-white text-black"
              }`}
            >
              Next
            </button>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default UserTable;

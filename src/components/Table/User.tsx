import React from "react";

const UserTable = () => {
  // Sample data with profile image URLs
  const tableData = [
    {
      name: "John Michael",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      status: "Online",
      lastLogin: "Sept 4, 10:24am"
    },
    {
      name: "Alexa Liras",
      profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
      status: "Offline",
      lastLogin: "Sept 3, 2:15pm"
    },
    {
      name: "Laurent Perrier",
      profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
      status: "Online",
      lastLogin: "Sept 2, 11:04am"
    },
    {
      name: "Michael Levi",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
      status: "Online",
      lastLogin: "Sept 1, 9:24am"
    },
    {
      name: "Richard Gran",
      profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
      status: "Offline",
      lastLogin: "Aug 31, 6:45pm"
    },
    {
      name: "Miriam Eric",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      status: "Offline",
      lastLogin: "Aug 30, 8:15am"
    }
  ];

  return (
    <div className="p-4 bg-inherit overflow-hidden mt-[40px]">
      <div className=" overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className=" text-black-1">
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
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
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
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      row.status === "Online"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.lastLogin}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;

import React from "react";
import { FiBell } from "react-icons/fi";
import { FiUserCheck, FiCheckCircle, FiFolder } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="bg-white w-full min-h-screen px-10 py-10 font-sans text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-semibold">Clentdo</h1>
        <div className="flex items-center gap-4">
          <FiBell className="text-gray-600 size-6" />
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="Amanda"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* Greeting */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold mb-1">Hello, Emily Johnson</h1>
        <p className="text-lg text-gray-600">
          Your active projects, Pending Invoices, 3 unread Messages
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {[
          { title: "Active Projects", value: 2 },
          { title: "Pending Invoices", value: 1 },
          { title: "Unread Messages", value: 3 },
        ].map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-200 flex-1 px-6 py-4 flex gap-4 rounded-lg shadow-sm"
          >
            <div className="text-4xl font-semibold text-gray-900">
              {item.value}
            </div>
            <div className="text-xl font-medium text-gray-700">
              {item.title.split(" ")[0]} <br /> {item.title.split(" ")[1]}
            </div>
          </div>
        ))}
      </div>

      {/* Project Summary & Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Project Summary */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-semibold">Project Summary</h2>
            <button className="text-lg text-blue-800">View All</button>
          </div>
          <div className="border rounded-md mt-6">
            <div className="p-4 rounded-lg flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white shadow-sm">
              <div className="space-y-1">
                <p className="font-medium text-lg md:text-xl">
                  Website Redesign
                </p>
                <p className="text-sm text-gray-500">Assigned: Robert Chudis</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4">
                <span className="text-green-600 bg-green-100 px-2 py-1 rounded text-xs text-center w-fit">
                  Ongoing
                </span>
                <button className="text-sm text-black bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition">
                  View Details
                </button>
              </div>
            </div>

            <hr className="px-3" />
            <div className="p-4 rounded-lg flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white shadow-sm">
              <div className="space-y-1">
                <p className="font-medium text-lg md:text-xl">
                  Website Redesign
                </p>
                <p className="text-sm text-gray-500">Assigned: Robert Chudis</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4">
                <span className="text-green-600 bg-green-100 px-2 py-1 rounded text-xs text-center w-fit">
                  Ongoing
                </span>
                <button className="text-sm text-black bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Activity */}

        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-semibold">Activity</h2>
            <button className="text-lg text-blue-800">View All</button>
          </div>
          <div className="space-y-5 mt-4">
            <div className="flex items-start gap-4 text-lg">
              <FiUserCheck className="text-gray-500 mt-1" />
              <div>
                <span className="text-xl font-semibold">Amanda Speen</span>{" "}
                submitted proposal{" "}
                <span className="text-gray-400">• 1 day ago</span>
              </div>
            </div>
            <div className="flex items-start gap-4 text-lg">
              <FiCheckCircle className="text-gray-500 mt-1" />
              <div>
                <span className="text-xl font-semibold">Design mockups</span>{" "}
                completed Website Redesign{" "}
                <span className="text-gray-400">• 3y ago</span>
              </div>
            </div>
            <div className="flex items-start gap-4 text-lg">
              <FiFolder className="text-gray-500 mt-1" />
              <div>
                <span className="text-xl font-semibold">
                  Use your completinfos
                </span>{" "}
                projects <span className="text-gray-400">• 1 week ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invoices & Proposals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2 flex justify-between">
            Invoices <span className="text-lgS text-red-600">Overdue</span>
          </h2>
          <div className="border p-4 rounded-lg flex justify-between">
            <div>
              <p className="font-medium text-xl">Online Store</p>
              <p className="text-sm text-gray-500">Due: April 28, 2024</p>
            </div>

            <div className="mt-2 text-right">
              <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded">
                Pay Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Proposals</h2>
          <div className="border p-4 rounded-lg flex justify-between">
            <div>
              <p className="font-medium text-xl">Required Feedback</p>
              <p className="text-sm text-gray-600">Social Media Management</p>
            </div>

            <div className="text-right mt-2">
              <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded">
                Give Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import {
  FiFolder,
  FiBriefcase,
  FiFileText,
} from "react-icons/fi";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { name: "Jan", revenue: 1200 },
  { name: "Feb", revenue: 1500 },
  { name: "Mar", revenue: 1300 },
  { name: "Apr", revenue: 1700 },
  { name: "May", revenue: 1600 },
  { name: "Jun", revenue: 1800 },
];

const taskCompletionData = [
  { name: "Week 1", tasks: 10 },
  { name: "Week 2", tasks: 15 },
  { name: "Week 3", tasks: 12 },
  { name: "Week 4", tasks: 18 },
];

const quickActions = [
  { id: 1, label: "View Portfolio", icon: FiBriefcase, color: "text-yellow-500" },
  { id: 2, label: "Invoice", icon: FiFileText, color: "text-green-500" },
];

const ClientDashboard = () => {
  return (
    <div className="bg-gray-100 h-screen overflow-hidden pt-18 px-6">
    <div className="grid grid-cols-[280px_1fr_320px] gap-4">
        {/* Left Column: Graphs */}
        <div className="flex flex-col gap-4">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="font-bold mb-3 text-lg">Monthly Revenue</div>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.4}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="font-bold mb-3 text-lg">Task Completion</div>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={taskCompletionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="tasks"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.4}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Center Column: Projects, Tasks, Time */}
        <div className="flex flex-col gap-4">
          <div className="bg-white flex justify-between items-center p-5 rounded-lg shadow-md">
            <div className="flex gap-3 items-center">
              <FiFolder className="bg-blue-100 size-10 p-2 rounded-lg text-blue-700" />
              <p className="text-2xl font-semibold">My Projects</p>
            </div>
            <div className="text-2xl">3</div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="font-bold text-2xl mb-4">My Tasks</div>
            <div className="mb-5">
              <div className="flex gap-3 items-center">
                <FiFolder className="bg-blue-100 size-9 p-2 rounded-lg text-blue-700" />
                <p className="font-semibold text-lg">Design landing page</p>
              </div>
              <p className="text-gray-400 text-md pl-12">Due Sept 25</p>
            </div>
            <div>
              <div className="flex gap-3 items-center">
                <FiFolder className="bg-blue-100 size-9 p-2 rounded-lg text-blue-700" />
                <p className="font-semibold text-lg">Update product images</p>
              </div>
              <p className="text-gray-400 text-md pl-12">Online Store • Due Today</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="font-bold text-2xl mb-4">Time Tracker</div>
            <button className="bg-blue-600 text-white py-4 px-5 rounded-lg text-2xl font-bold w-full">
              00:00
            </button>
          </div>
        </div>

        {/* Right Column: Quick Actions, Profile, Revenue */}
        <div className="flex flex-col gap-4">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="font-bold mb-3 text-2xl">Quick Actions</div>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.id}
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-gray-200 p-3 rounded-lg">
                        <Icon className={`text-2xl ${action.color}`} />
                      </div>
                      <span className="text-lg font-medium">{action.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="font-bold mb-4 text-2xl">My Profile</div>
            <div className="flex gap-5 items-center">
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="Client"
                className="w-14 h-14 rounded-full"
              />
              <div>
                <p className="text-lg font-semibold">Amanda</p>
                <p className="text-md text-gray-500">Client since Jan 2023</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="font-bold mb-3 text-2xl">Revenue</div>
            <div className="text-2xl text-green-600 font-semibold">$12,340</div>
            <p className="text-gray-400 text-md">Total Revenue in the last 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const earningsData = [
  { name: "May", earnings: 10000 },
  { name: "Jun", earnings: 8000 },
  { name: "Jul", earnings: 12000 },
  { name: "Sep", earnings: 10000 },
  { name: "Apr", earnings: 14500 },
];
const invoiceData = [
  { name: "Paid", value: 32500, color: "#22c55e" }, // green
  { name: "Overdue", value: 7200, color: "#ef4444" }, // red
  { name: "Pending", value: 4300, color: "#f59e0b" }, // yellow
];

const hoursData = [
  { name: "Week 1", hours: 50 },
  { name: "Week 2", hours: 100 },
  { name: "Week 3", hours: 160 },
  { name: "Week 4", hours: 140 },
  { name: "Week 5", hours: 200 },
  { name: "Week 6", hours: 180 },
];

const clientData = [
  { name: "Alpha Corp", value: 90 },
  { name: "Beta Solutions", value: 60 },
  { name: "Delta Enterprises", value: 40 },
  { name: "Zeta Inc.", value: 30 },
];

export default function Reports() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold mb-4">Reports</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 border border-gray-300 rounded-md">
            Export
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Download
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_60%] gap-6">
        {/* Earnings Chart */}
        <div className="bg-white p-6 rounded-lg shadow space-y-2">
          <h2 className="text-2xl font-medium">Earnings</h2>
          <p className="text-4xl font-medium">$45,200</p>
          <p className="text-xl text-gray-400">Total Earnings</p>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={earningsData}>
              <defs>
                <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              {/* <YAxis /> */}
              <Tooltip formatter={(value) => `$${value}`} />
              <Area
                type="monotone"
                dataKey="earnings"
                stroke="#3b82f6"
                strokeWidth={2}
                fill="url(#colorEarnings)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Hours Tracked Chart */}
        <div className="bg-white p-6 rounded-lg shadow space-y-2">
          <h2 className="text-2xl font-medium">Hours Tracked</h2>
          <p className="text-4xl font-bold">
            680 <span className="text-4xl font-medium">hrs</span>{" "}
          </p>
          <p className="text-xl text-gray-400">Total Hours</p>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={hoursData}>
              {/* Removed CartesianGrid */}
              <XAxis dataKey="name" />
              {/* <YAxis /> */}
              <Tooltip formatter={(value) => `${value} hrs`} />
              <Bar dataKey="hours" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Client Work */}
        <div className="bg-white p-6 rounded-lg shadow flex flex-col gap-5">
          <h2 className="text-2xl font-medium">Invoices</h2>
          <div className="flex items-center justify-between">
          <ResponsiveContainer width={140} height={140}>
            <PieChart>
              <Pie
                data={invoiceData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={70}
                innerRadius={50} // Creates the donut hole
                paddingAngle={3}
              >
                {invoiceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div>
            <div className="gap-1 text-sm mt-4">
              {invoiceData.map((item) => (
                <div className="flex justify-between w-48" key={item.name}>
                  <p className="text-xl flex gap-2 font-bold">
                   <span className="">${item.value.toLocaleString()}</span>
                   {item.name}
                  </p>
                  
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium">Client Work</h2>
          <div className="mt-4 space-y-4">
            {clientData.map((client) => (
              <div key={client.name}>
                <div className="flex justify-between text-sm">
                  <span>{client.name}</span>
                  <span>{client.value}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${client.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

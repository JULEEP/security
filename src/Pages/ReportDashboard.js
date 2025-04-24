import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ChevronDown } from "lucide-react";

const earningsData = [
  { month: "May", earnings: 8000 },
  { month: "Jun", earnings: 9000 },
  { month: "Jul", earnings: 7000 },
  { month: "Sep", earnings: 9500 },
  { month: "Apr", earnings: 10700 },
];

const hoursData = [
  { week: "Week 1", hours: 40 },
  { week: "Week 2", hours: 60 },
  { week: "Week 3", hours: 90 },
  { week: "Week 4", hours: 80 },
  { week: "Week 5", hours: 100 },
  { week: "Week 6", hours: 95 },
];

const invoiceData = [
  { name: "Paid", value: 32500 },
  { name: "Overdue", value: 7200 },
  { name: "Pending", value: 4300 },
];

const COLORS = ["#3b82f6", "#f97316", "#facc15"];

const ReportDashboard = () => {
  return (
    <div className="min-h-screen bg-white px-10 py-8 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Reports</h1>
        <div className="space-x-2 flex items-center">
          <button className="border border-gray-300 px-4 py-2 rounded text-sm font-medium flex items-center gap-1">
            Export <ChevronDown className="w-4 h-4" />
          </button>
          <button className="bg-white text-gray-800 border px-4 py-2 rounded text-sm font-medium hover:bg-gray-100">
            Download
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Earnings */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-8 min-h-[280px]">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Earnings</h2>
          <div className="text-3xl font-bold text-gray-800 mb-1">$45,200</div>
          <p className="text-sm text-gray-500 mb-4">Total Earnings</p>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={earningsData}>
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="earnings"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Hours Tracked */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-8 min-h-[280px]">
          <h2 className="text-lg font-bold text-gray-800 mb-1">
            Hours Tracked
          </h2>
          <div className="text-3xl font-bold text-gray-800 mb-1">680 hrs</div>
          <p className="text-sm text-gray-500 mb-4">Total Hours</p>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={hoursData} barSize={20}>
              <XAxis dataKey="week" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="hours" fill="#3b82f6" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Invoices */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-8 min-h-[280px] flex flex-col">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Invoices</h2>
          <div className="flex items-center gap-12 flex-1">
            <ResponsiveContainer width={130} height={130}>
              <PieChart>
                <Pie
                  data={invoiceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={55}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {invoiceData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <ul className="ml-4 space-y-4 text-sm text-gray-800">
              <li>
                <strong>$32,500</strong> Paid
              </li>
              <li>
                <strong>$7,200</strong> Overdue
              </li>
              <li>
                <strong>$4,300</strong> Pending
              </li>
            </ul>
          </div>
        </div>

        {/* Client Work */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-8 min-h-[280px]">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Client Work</h2>
          <div className="space-y-6">
            {[
              { name: "Alpha Corp", width: "90%", color: "bg-blue-600" },
              { name: "Beta Solutions", width: "70%", color: "bg-gray-300" },
              { name: "Delta Enterprises", width: "50%", color: "bg-gray-300" },
              { name: "Zeta Inc.", width: "30%", color: "bg-gray-200" },
            ].map((client, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-800 w-32">
                  {client.name}
                </span>
                <div className="flex-1 bg-gray-100 rounded-full h-3">
                  <div
                    className={`${client.color} h-3 rounded-full`}
                    style={{ width: client.width }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDashboard;

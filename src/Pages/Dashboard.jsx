import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";
import { useState } from "react";

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState("Today");

  const projectData = {
    Today: [{ name: "Today", projects: 5 }],
    "This Week": [
      { name: "Mon", projects: 3 },
      { name: "Tue", projects: 4 },
      { name: "Wed", projects: 5 },
      { name: "Thu", projects: 2 },
      { name: "Fri", projects: 6 },
      { name: "Sat", projects: 4 },
      { name: "Sun", projects: 3 },
    ],
    "Last Week": [
      { name: "Mon", projects: 6 },
      { name: "Tue", projects: 5 },
      { name: "Wed", projects: 4 },
      { name: "Thu", projects: 3 },
      { name: "Fri", projects: 7 },
      { name: "Sat", projects: 6 },
      { name: "Sun", projects: 5 },
    ],
    "Last Month": [
      { name: "Week 1", projects: 15 },
      { name: "Week 2", projects: 18 },
      { name: "Week 3", projects: 20 },
      { name: "Week 4", projects: 22 },
    ],
  };

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  // Tech-related project data
  const projects = [
    { projectId: "PRJ12347", title: "Website Development", category: "Web Development", freelancer: "John Doe", status: "Ongoing" },
    { projectId: "PRJ12347", title: "SEO Optimization", category: "SEO", freelancer: "Alice Johnson", status: "Ongoing" },
    { projectId: "PRJ12346", title: "Logo Design", category: "Design", freelancer: "Jane Smith", status: "Completed" },
    { projectId: "PRJ12349", title: "App Development", category: "Mobile App", freelancer: "Bob Lee", status: "Completed" },
  ];

  // Ongoing projects
  const ongoingProjects = projects.filter(project => project.status === "Ongoing");

  // Completed projects
  const completedProjects = projects.filter(project => project.status === "Completed");

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gradient-to-r from-purple-200 to-pink-200">
      {/* Stats Cards */}
      <div className="md:col-span-4 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-teal-400 to-teal-600 shadow-lg rounded-lg p-4 text-center text-white">
          <div className="text-3xl font-bold">12</div>
          <h4 className="text-lg font-semibold">Total Projects</h4>
        </div>

        <div className="bg-gradient-to-r from-green-400 to-green-600 shadow-lg rounded-lg p-4 text-center text-white">
          <div className="text-3xl font-bold">8</div>
          <h4 className="text-lg font-semibold">Completed Projects</h4>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg rounded-lg p-4 text-center text-white">
          <div className="text-3xl font-bold">$8,000</div>
          <h4 className="text-lg font-semibold">Project Amount</h4>
        </div>

        <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 shadow-lg rounded-lg p-4 text-center text-white">
          <div className="text-3xl font-bold">6</div>
          <h4 className="text-lg font-semibold">Ongoing Projects</h4>
        </div>
      </div>

      {/* Grid for Team, Clients, and Proposals */}
      <div className="md:col-span-4 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Team & Client Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg rounded-lg p-4 text-center text-white">
            <div className="text-3xl font-bold">20</div>
            <h4 className="text-lg font-semibold">Total Team Members</h4>
          </div>

          <div className="bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg rounded-lg p-4 text-center text-white">
            <div className="text-3xl font-bold">15</div>
            <h4 className="text-lg font-semibold">Total Clients</h4>
          </div>

          <div className="bg-gradient-to-r from-pink-400 to-pink-600 shadow-lg rounded-lg p-4 text-center text-white">
            <div className="text-3xl font-bold">30</div>
            <h4 className="text-lg font-semibold">Total Proposals</h4>
          </div>
        </div>
      </div>

      {/* Projects Chart */}
      <div className="md:col-span-4 p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Projects Overview</h3>
        
        {/* Dropdown to select timeframe */}
        <div className="mb-4">
          <select
            className="border rounded p-2"
            value={timeframe}
            onChange={handleTimeframeChange}
          >
            <option value="Today">Today</option>
            <option value="This Week">This Week</option>
            <option value="Last Week">Last Week</option>
            <option value="Last Month">Last Month</option>
          </select>
        </div>

        {/* BarChart based on selected timeframe */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={projectData[timeframe]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#dcdcdc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {projectData[timeframe].map((data, index) => (
              <Bar
                key={index}
                dataKey="projects"
                fill={`#${Math.floor(Math.random()*16777215).toString(16)}`} // Random color for each bar
                name={data.name}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Ongoing Projects Table */}
      <div className="md:col-span-4 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Ongoing Projects</h3>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Project ID</th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Title</th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Category</th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Freelancer</th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {ongoingProjects.map((project) => (
              <tr key={project.projectId}>
                <td className="px-4 py-2 border-b text-sm">{project.projectId}</td>
                <td className="px-4 py-2 border-b text-sm">{project.title}</td>
                <td className="px-4 py-2 border-b text-sm">{project.category}</td>
                <td className="px-4 py-2 border-b text-sm">{project.freelancer}</td>
                <td className="px-4 py-2 border-b text-sm text-yellow-500">
                  {project.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Completed Projects Table */}
      <div className="md:col-span-4 p-6 bg-gradient-to-r from-green-100 to-green-200 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Completed Projects</h3>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Project ID</th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Title</th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Category</th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Freelancer</th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {completedProjects.map((project) => (
              <tr key={project.projectId}>
                <td className="px-4 py-2 border-b text-sm">{project.projectId}</td>
                <td className="px-4 py-2 border-b text-sm">{project.title}</td>
                <td className="px-4 py-2 border-b text-sm">{project.category}</td>
                <td className="px-4 py-2 border-b text-sm">{project.freelancer}</td>
                <td className="px-4 py-2 border-b text-sm text-green-500">
                  {project.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

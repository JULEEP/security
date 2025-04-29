import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons

const projectsData = [
  { id: 1, projectName: "Project Alpha", clientName: "Xappsoft Technology", startDate: "2023-01-15", endDate: "2023-06-15", status: "In Progress" },
  { id: 2, projectName: "Project Beta", clientName: "hgygyu", startDate: "2023-02-01", endDate: "2023-08-01", status: "Completed" },
  { id: 3, projectName: "Project Gamma", clientName: "Eaton Randall Co", startDate: "2023-03-10", endDate: "2023-12-10", status: "Pending" },
  { id: 4, projectName: "Project Delta", clientName: "Craft and Rollins Co", startDate: "2023-04-25", endDate: "2023-10-25", status: "In Progress" },
  { id: 5, projectName: "Project Epsilon", clientName: "Vega James Associates", startDate: "2023-05-15", endDate: "2023-11-15", status: "Completed" },
];

export default function MyProjects() {
  const [projects, setProjects] = useState(projectsData);
  const [search, setSearch] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Handle removing a project
  const handleRemoveProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.projectName.toLowerCase().includes(search.toLowerCase()) ||
      project.clientName.toLowerCase().includes(search.toLowerCase()) ||
      project.status.toLowerCase().includes(search.toLowerCase())
  );

  // Limit the projects based on itemsPerPage
  const displayedProjects = filteredProjects.slice(0, itemsPerPage);

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="p-2 border rounded"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <input
            type="text"
            placeholder="Search projects..."
            className="p-2 border rounded w-3/4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="p-3 border">Sl</th>
              <th className="p-3 border">Project Name</th>
              <th className="p-3 border">Client Name</th>
              <th className="p-3 border">Start Date</th>
              <th className="p-3 border">End Date</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedProjects.map((project) => (
              <tr key={project.id} className="cursor-pointer hover:bg-gray-50 text-center">
                <td className="p-3 border">{project.id}</td>
                <td className="p-3 border">{project.projectName}</td>
                <td className="p-3 border">{project.clientName}</td>
                <td className="p-3 border">{project.startDate}</td>
                <td className="p-3 border">{project.endDate}</td>
                <td className="p-3 border">{project.status}</td>
                <td className="p-3 border">
                  <button
                    className="text-blue-500 hover:underline mr-2"
                  >
                    <FaEdit /> {/* Edit icon */}
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleRemoveProject(project.id)} // Remove project
                  >
                    <FaTrashAlt /> {/* Trash icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

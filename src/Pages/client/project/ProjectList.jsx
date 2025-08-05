import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";
import axios from "axios";
import ProjectModal from "./ViewProject";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedProjects, setSelectedProjects] = useState(null);
  const clientId = localStorage.getItem("clientId");
  const fetchProjects = async () => {
    if (!clientId) {
      console.error("Client ID not found in localStorage.");
      return;
    }

    try {
      const response = await axios.get(
        `https://freelance-management-frontend.onrender.com/api/client/getallprojects/${clientId}`
      );
      setProjects(response.data.data || []); // `data` is the actual array of projects
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDeleteProject = async (projectId) => {
    try {
      const res = await fetch(
        `https://freelance-management-frontend.onrender.com/api/client/delete-project/${clientId}/${projectId}`,
        {
          method: "DELETE",
        }
      );
      const data = res.json();
      if (res.ok) {
        alert("proposal deleted successfully");
        fetchProjects();
      } else {
        console.log("error" + data.message);
      }
    } catch (error) {
      console.log("project delete error" + error);
    }
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.client.name.toLowerCase().includes(search.toLowerCase()) ||
      project.status.toLowerCase().includes(search.toLowerCase())
  );

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
            {[10, 20, 50, 100].map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
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
              <th className="p-3 border">Project Title</th>
              <th className="p-3 border">Freelancer Name</th>
              <th className="p-3 border">Start Date</th>
              <th className="p-3 border">End Date</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedProjects.map((project, index) => (
              <tr
                key={project._id}
                className="cursor-pointer hover:bg-gray-50 text-center"
              >
                <td className="p-3 border">{index + 1}</td>
                <td className="p-3 border">{project.title}</td>
                <td className="p-3 border">{project.client.name}</td>
                <td className="p-3 border">
                  {project.timeline.start?.slice(0, 10)}
                </td>
                <td className="p-3 border">
                  {project.timeline.end?.slice(0, 10)}
                </td>
                <td className="p-3 border">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full 
      ${
        project.status === "Accepted"
          ? "bg-green-100 text-green-800"
          : project.status === "In Progress"
          ? "bg-yellow-100 text-yellow-800"
          : project.status === "Pending"
          ? "bg-red-100 text-red-800"
          : "bg-gray-100 text-gray-800"
      }`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="p-3 border">
                  <button
                    className="text-blue-500 hover:underline mr-2"
                    onClick={() => setSelectedProjects(project)}
                  >
                    <FaEye />
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDeleteProject(project._id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedProjects && (
        <ProjectModal
          projects={selectedProjects}
          onClose={() => setSelectedProjects(null)}
        />
      )}
    </div>
  );
}

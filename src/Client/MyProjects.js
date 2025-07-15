import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt,FaEye } from "react-icons/fa";
import axios from "axios";

export default function MyProjects() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchProjects = async () => {
      const clientId = localStorage.getItem("clientId");
      if (!clientId) {
        console.error("Client ID not found in localStorage.");
        return;
      }

      try {
        const response = await axios.get(
          `https://new-securebackend.onrender.com/api/client/getallprojects/${clientId}`
        );
        setProjects(response.data.data || []); // `data` is the actual array of projects
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleRemoveProject = (id) => {
    setProjects((prev) => prev.filter((project) => project._id !== id));
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
                <td className="p-3 border">{project.status}</td>
                <td className="p-3 border">
                  <button className="text-blue-500 hover:underline mr-2">
                    <FaEye />
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleRemoveProject(project._id)}
                  >
                    <FaTrashAlt />
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

import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons

const projectsData = [
  { id: 1, projectName: "AppaStore App Upgrade", clientName: "Ivan Bird", projectLead: "Arnika Mcmillan", approxTasks: 5, projectDuration: "2 days" },
  { id: 2, projectName: "Nad Al Shiba Engineering Consultants", clientName: "Nell Burt", projectLead: "Nell Mohona Lewis", approxTasks: 2, projectDuration: "30 days" },
  { id: 3, projectName: "Web Design", clientName: "Pune Test", projectLead: "Arnika Mcmillan", approxTasks: 10, projectDuration: "2 days" },
  { id: 4, projectName: "وووو", clientName: "Castor Hodge", projectLead: "Arnika Mcmillan", approxTasks: 66, projectDuration: "60 days" },
  { id: 5, projectName: "Pune Project", clientName: "Pune Test", projectLead: "honorato terry", approxTasks: 100, projectDuration: "3 days" },
  { id: 6, projectName: "tset", clientName: "Shelly Foley", projectLead: "honorato terry", approxTasks: 1, projectDuration: "1 day" },
  { id: 7, projectName: "Kelly Battle", clientName: "Selma Lancaster", projectLead: "abra hyde", approxTasks: 51, projectDuration: "33 days" },
  { id: 8, projectName: "Hadassah Alvarado", clientName: "Mohammad Sargent", projectLead: "Jerome Terry", approxTasks: 93, projectDuration: "95 days" },
  { id: 9, projectName: "Yoshi Garcia", clientName: "Nell Burt", projectLead: "Ora Cardenas", approxTasks: 92, projectDuration: "18 days" },
  { id: 10, projectName: "Cameran Wise", clientName: "Melodie Horne", projectLead: "Nell Mohona Lewis", approxTasks: 100, projectDuration: "45 days" },
];

export default function ManageProjects() {
  const [projects, setProjects] = useState(projectsData);
  const [search, setSearch] = useState("");
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [newProject, setNewProject] = useState({
    projectName: "",
    clientName: "",
    projectLead: "",
    approxTasks: "",
    projectDuration: "",
  });

  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Handle adding new project
  const handleAddProject = () => {
    if (newProject.projectName && newProject.clientName && newProject.projectLead && newProject.approxTasks && newProject.projectDuration) {
      setProjects([...projects, { id: projects.length + 1, ...newProject }]);
      setShowNewProjectModal(false);
      setNewProject({
        projectName: "",
        clientName: "",
        projectLead: "",
        approxTasks: "",
        projectDuration: "",
      });
    } else {
      alert("All fields are required!");
    }
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.projectName.toLowerCase().includes(search.toLowerCase()) ||
      project.clientName.toLowerCase().includes(search.toLowerCase()) ||
      project.projectLead.toLowerCase().includes(search.toLowerCase())
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
        <button
          className="p-2 bg-purple-600 text-white rounded"
          onClick={() => setShowNewProjectModal(true)}
        >
          + New Project
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="p-3 border">Sl</th>
              <th className="p-3 border">Project Name</th>
              <th className="p-3 border">Client Name</th>
              <th className="p-3 border">Project Lead</th>
              <th className="p-3 border">Approximate Tasks</th>
              <th className="p-3 border">Project Duration</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedProjects.map((project) => (
              <tr key={project.id} className="cursor-pointer hover:bg-gray-50 text-center">
                <td className="p-3 border">{project.id}</td>
                <td className="p-3 border">{project.projectName}</td>
                <td className="p-3 border">{project.clientName}</td>
                <td className="p-3 border">{project.projectLead}</td>
                <td className="p-3 border">{project.approxTasks}</td>
                <td className="p-3 border">{project.projectDuration}</td>
                <td className="p-3 border">
                  <button className="text-blue-500 hover:underline mr-2">
                    <FaEdit /> {/* Edit icon */}
                  </button>
                  <button className="text-red-500 hover:underline">
                    <FaTrashAlt /> {/* Trash icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* New Project Modal */}
      {showNewProjectModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-sm font-bold mb-4 text-purple-600">Create Project</h2>

            {/* Project Name */}
            <div className="mb-2">
              <label className="block font-medium">Project Name*</label>
              <input
                type="text"
                placeholder="Project Name"
                className="w-full p-2 border"
                value={newProject.projectName}
                onChange={(e) =>
                  setNewProject({ ...newProject, projectName: e.target.value })
                }
              />
            </div>

            {/* Client Name */}
            <div className="mb-2">
              <label className="block font-medium">Client Name*</label>
              <input
                type="text"
                placeholder="Client Name"
                className="w-full p-2 border"
                value={newProject.clientName}
                onChange={(e) =>
                  setNewProject({ ...newProject, clientName: e.target.value })
                }
              />
            </div>

            {/* Project Lead */}
            <div className="mb-2">
              <label className="block font-medium">Project Lead*</label>
              <input
                type="text"
                placeholder="Project Lead"
                className="w-full p-2 border"
                value={newProject.projectLead}
                onChange={(e) =>
                  setNewProject({ ...newProject, projectLead: e.target.value })
                }
              />
            </div>

            {/* Approximate Tasks */}
            <div className="mb-2">
              <label className="block font-medium">Approximate Tasks*</label>
              <input
                type="number"
                placeholder="Approximate Tasks"
                className="w-full p-2 border"
                value={newProject.approxTasks}
                onChange={(e) =>
                  setNewProject({ ...newProject, approxTasks: e.target.value })
                }
              />
            </div>

            {/* Project Duration */}
            <div className="mb-2">
              <label className="block font-medium">Project Duration*</label>
              <input
                type="text"
                placeholder="Project Duration"
                className="w-full p-2 border"
                value={newProject.projectDuration}
                onChange={(e) =>
                  setNewProject({ ...newProject, projectDuration: e.target.value })
                }
              />
            </div>

            <div className="mt-4">
              <button
                className="mr-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                onClick={handleAddProject}
              >
                Save
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                onClick={() => setShowNewProjectModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons

const projectsData = [
  { id: 1, projectName: "Project Alpha", clientName: "Xappsoft Technology", startDate: "2023-01-15", endDate: "2023-06-15", status: "In Progress" },
  { id: 2, projectName: "Project Beta", clientName: "hgygyu", startDate: "2023-02-01", endDate: "2023-08-01", status: "Completed" },
  { id: 3, projectName: "Project Gamma", clientName: "Eaton Randall Co", startDate: "2023-03-10", endDate: "2023-12-10", status: "Pending" },
  { id: 4, projectName: "Project Delta", clientName: "Craft and Rollins Co", startDate: "2023-04-25", endDate: "2023-10-25", status: "In Progress" },
  { id: 5, projectName: "Project Epsilon", clientName: "Vega James Associates", startDate: "2023-05-15", endDate: "2023-11-15", status: "Completed" },
];

export default function ProjectsTable() {
  const [projects, setProjects] = useState(projectsData);
  const [search, setSearch] = useState("");
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [newProject, setNewProject] = useState({
    projectName: "",
    clientName: "",
    startDate: "",
    endDate: "",
    status: "Pending",
    summary: "",
    description: "",
    attachment: null,
    reporter: "Arnika Paula Roach Mcmillan", // Default Reporter
    assignee: "",
    sprint: "",
    priority: "Medium",
  });

  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Handle adding new project
  const handleAddProject = () => {
    if (
      newProject.projectName &&
      newProject.clientName &&
      newProject.startDate &&
      newProject.endDate &&
      newProject.summary &&
      newProject.description
    ) {
      setProjects([...projects, { id: projects.length + 1, ...newProject }]);
      setShowNewProjectModal(false);
      setNewProject({
        projectName: "",
        clientName: "",
        startDate: "",
        endDate: "",
        status: "Pending",
        summary: "",
        description: "",
        attachment: null,
        reporter: "Arnika Paula Roach Mcmillan",
        assignee: "",
        sprint: "",
        priority: "Medium",
      });
    } else {
      alert("All fields are required!");
    }
  };

  // Handle file change event
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setNewProject({ ...newProject, attachment: file }); // Update the state with the file
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
                  >
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

            {/* Start Date */}
            <div className="mb-2">
              <label className="block font-medium">Start Date*</label>
              <input
                type="date"
                className="w-full p-2 border"
                value={newProject.startDate}
                onChange={(e) =>
                  setNewProject({ ...newProject, startDate: e.target.value })
                }
              />
            </div>

            {/* End Date */}
            <div className="mb-2">
              <label className="block font-medium">End Date*</label>
              <input
                type="date"
                className="w-full p-2 border"
                value={newProject.endDate}
                onChange={(e) =>
                  setNewProject({ ...newProject, endDate: e.target.value })
                }
              />
            </div>

            {/* Status */}
            <div className="mb-2">
              <label className="block font-medium">Status*</label>
              <select
                value={newProject.status}
                onChange={(e) =>
                  setNewProject({ ...newProject, status: e.target.value })
                }
                className="w-full p-2 border"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Summary */}
            <div className="mb-2">
              <label className="block font-medium">Summary*</label>
              <input
                type="text"
                placeholder="Summary"
                className="w-full p-2 border"
                value={newProject.summary}
                onChange={(e) =>
                  setNewProject({ ...newProject, summary: e.target.value })
                }
              />
            </div>

            {/* Description */}
            <div className="mb-2">
              <label className="block font-medium">Description*</label>
              <textarea
                placeholder="Description"
                className="w-full p-2 border"
                value={newProject.description}
                onChange={(e) =>
                  setNewProject({ ...newProject, description: e.target.value })
                }
              />
            </div>

            {/* Attachment */}
            <div className="mb-2">
              <label className="block font-medium">Attachment</label>
              <input
                type="file"
                className="p-2 border"
                onChange={handleFileChange}
              />
              {newProject.attachment && (
                <p className="text-sm mt-1">{newProject.attachment.name}</p>
              )}
            </div>

            {/* Reporter */}
            <div className="mb-2">
              <label className="block font-medium">Reporter</label>
              <input
                type="text"
                className="w-full p-2 border"
                value={newProject.reporter}
                disabled
              />
            </div>

            {/* Assignee */}
            <div className="mb-2">
              <label className="block font-medium">Assignee*</label>
              <select
                value={newProject.assignee}
                onChange={(e) =>
                  setNewProject({ ...newProject, assignee: e.target.value })
                }
                className="w-full p-2 border"
              >
                <option value="">Select One...</option>
                <option value="Maisha Gonzales">Maisha Gonzales</option>
                <option value="John Doe">John Doe</option>
                {/* Add more assignees as necessary */}
              </select>
            </div>

            {/* Sprint */}
            <div className="mb-2">
              <label className="block font-medium">Sprint*</label>
              <select
                value={newProject.sprint}
                onChange={(e) =>
                  setNewProject({ ...newProject, sprint: e.target.value })
                }
                className="w-full p-2 border"
              >
                <option value="">Select One...</option>
                <option value="Sprint 1">Sprint 1</option>
                <option value="Sprint 2">Sprint 2</option>
                {/* Add more sprints as necessary */}
              </select>
            </div>

            {/* Priority */}
            <div className="mb-2">
              <label className="block font-medium">Priority*</label>
              <select
                value={newProject.priority}
                onChange={(e) =>
                  setNewProject({ ...newProject, priority: e.target.value })
                }
                className="w-full p-2 border"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="mt-4">
              <button
                className="mr-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                onClick={() => handleAddProject()}
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

import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaTimes, FaEye } from "react-icons/fa";

const ProjectList = () => {
  const [projects, setProjects] = useState([
    {
      name: "E-commerce Website",
      category: "Web Development",
      client: "Amazon",
      completion: 80,
      status: "In Progress",
      dueDate: "2025-05-30",
      budget: "$10,000",
      progress: "80%",
      assignedTo: "John Doe",
      association: "Development Team",
    },
    {
      name: "Mobile App",
      category: "App Development",
      client: "Flipkart",
      completion: 60,
      status: "Pending",
      dueDate: "2025-06-15",
      budget: "$15,000",
      progress: "60%",
      assignedTo: "Jane Smith",
      association: "Mobile Team",
    },
    {
      name: "Landing Page",
      category: "Web Design",
      client: "Google",
      completion: 90,
      status: "Completed",
      dueDate: "2025-04-15",
      budget: "$5,000",
      progress: "90%",
      assignedTo: "Alice Brown",
      association: "Design Team",
    },
    {
      name: "Marketing Campaign",
      category: "Digital Marketing",
      client: "Meta",
      completion: 70,
      status: "In Progress",
      dueDate: "2025-07-01",
      budget: "$8,000",
      progress: "70%",
      assignedTo: "Bob Johnson",
      association: "Marketing Team",
    },
    {
      name: "Admin Dashboard",
      category: "UI/UX Design",
      client: "Netflix",
      completion: 85,
      status: "Completed",
      dueDate: "2025-05-20",
      budget: "$12,000",
      progress: "85%",
      assignedTo: "Emma Wilson",
      association: "UX Team",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    category: "",
    client: "",
    completion: "",
    status: "",
    dueDate: "",
    budget: "",
    progress: "",
    assignedTo: "",
    association: "",
  });
  const [viewProject, setViewProject] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  const handleInputChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleAddProject = () => {
    if (Object.values(newProject).every((field) => field)) {
      setProjects([...projects, newProject]);
      setNewProject({
        name: "",
        category: "",
        client: "",
        completion: "",
        status: "",
        dueDate: "",
        budget: "",
        progress: "",
        assignedTo: "",
        association: "",
      });
      setIsModalOpen(false);
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleDelete = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const handleEdit = (index) => {
    const projectToEdit = projects[index];
    setNewProject(projectToEdit);
    setProjects(projects.filter((_, i) => i !== index));
    setIsModalOpen(true);
  };

  const handleView = (index) => {
    setViewProject(projects[index]);
    setIsViewModalOpen(true);
  };

  // Pagination calculation
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus /> Add Project
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border text-left">Project Name</th>
              <th className="p-3 border text-left">Category</th>
              <th className="p-3 border text-left">Client</th>
              <th className="p-3 border text-left">Completed (%)</th>
              <th className="p-3 border text-left">Status</th>
              <th className="p-3 border text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProjects.map((project, index) => (
              <tr key={index} className="hover:bg-gray-100 border-b">
                <td className="p-3 border">{project.name}</td>
                <td className="p-3 border">{project.category}</td>
                <td className="p-3 border">{project.client}</td>
                <td className="p-3 border">{project.completion}%</td>
                <td className="p-3 border">{project.status}</td>
                <td className="p-3 border flex gap-3">
                  <button
                    onClick={() => handleView(indexOfFirstProject + index)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleEdit(indexOfFirstProject + index)}
                    className="text-green-500 hover:text-green-700"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(indexOfFirstProject + index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-[600px] relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-xl font-bold mb-6 text-center">Add / Edit Project</h2>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Project Name" value={newProject.name} onChange={handleInputChange} className="p-3 border rounded" />
              <input type="text" name="category" placeholder="Category" value={newProject.category} onChange={handleInputChange} className="p-3 border rounded" />
              <input type="text" name="client" placeholder="Client Name" value={newProject.client} onChange={handleInputChange} className="p-3 border rounded" />
              <input type="number" name="completion" placeholder="Completed %" value={newProject.completion} onChange={handleInputChange} className="p-3 border rounded" />
              <input type="text" name="dueDate" placeholder="Due Date" value={newProject.dueDate} onChange={handleInputChange} className="p-3 border rounded" />
              <input type="text" name="budget" placeholder="Budget" value={newProject.budget} onChange={handleInputChange} className="p-3 border rounded" />
              <input type="text" name="progress" placeholder="Progress" value={newProject.progress} onChange={handleInputChange} className="p-3 border rounded" />
              <input type="text" name="assignedTo" placeholder="Assigned To" value={newProject.assignedTo} onChange={handleInputChange} className="p-3 border rounded" />
              <input type="text" name="association" placeholder="Association" value={newProject.association} onChange={handleInputChange} className="p-3 border rounded" />
              <select name="status" value={newProject.status} onChange={handleInputChange} className="p-3 border rounded">
                <option value="">Select Status</option>
                <option value="In Progress">In Progress</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProject}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {isViewModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-[500px] relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setIsViewModalOpen(false)}
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-xl font-bold mb-6 text-center">Project Details</h2>
            <div className="grid grid-cols-1 gap-4 text-sm">
              <p><strong>Project Name:</strong> {viewProject.name}</p>
              <p><strong>Category:</strong> {viewProject.category}</p>
              <p><strong>Client:</strong> {viewProject.client}</p>
              <p><strong>Completion:</strong> {viewProject.completion}%</p>
              <p><strong>Status:</strong> {viewProject.status}</p>
              <p><strong>Due Date:</strong> {viewProject.dueDate}</p>
              <p><strong>Budget:</strong> {viewProject.budget}</p>
              <p><strong>Progress:</strong> {viewProject.progress}</p>
              <p><strong>Assigned To:</strong> {viewProject.assignedTo}</p>
              <p><strong>Association:</strong> {viewProject.association}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;

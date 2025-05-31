import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaTimes, FaEye } from "react-icons/fa";
import { BsArrowLeftShort } from "react-icons/bs";
import { FiPlus, FiUser } from "react-icons/fi";

const ProjectList = () => {
  const team = [
    { name: "John Doe", role: "Owner", img: "https://i.pravatar.cc/40?img=1" },
    {
      name: "Alex Johnson",
      role: "Designer",
      img: "https://i.pravatar.cc/40?img=2",
    },
    {
      name: "Lisa Wong",
      role: "Developer",
      img: "https://i.pravatar.cc/40?img=3",
    },
    {
      name: "James Lee",
      role: "Tester",
      img: "https://i.pravatar.cc/40?img=4",
    },
  ];
  const activity = [
    {
      icon: <BsArrowLeftShort className="text-2xl" />,
      text: "You created this project",
      time: "2h ago",
    },
    {
      icon: <FiPlus className="text-2xl" />,
      text: "Lisa Wong added the task “Design mockups”",
      time: "2h ago",
    },
    {
      icon: <FiUser className="text-2xl" />,
      text: "James Lee joined the project",
      time: "2h ago",
    },
  ];

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
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
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
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
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
            <h2 className="text-xl font-bold mb-6 text-center">
              Add / Edit Project
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Project Name"
                value={newProject.name}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={newProject.category}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="text"
                name="client"
                placeholder="Client Name"
                value={newProject.client}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="number"
                name="completion"
                placeholder="Completed %"
                value={newProject.completion}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="text"
                name="dueDate"
                placeholder="Due Date"
                value={newProject.dueDate}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="text"
                name="budget"
                placeholder="Budget"
                value={newProject.budget}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="text"
                name="progress"
                placeholder="Progress"
                value={newProject.progress}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="text"
                name="assignedTo"
                placeholder="Assigned To"
                value={newProject.assignedTo}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="text"
                name="association"
                placeholder="Association"
                value={newProject.association}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <select
                name="status"
                value={newProject.status}
                onChange={handleInputChange}
                className="p-3 border rounded"
              >
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative max-w-2xl w-full bg-white shadow-xl rounded-xl font-inter h-[98vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsViewModalOpen(false)}
              className="absolute right-2 top-0 text-gray-600 hover:text-black text-2xl z-50 mr-2"
            >
              x
            </button>

            {/* Modal Content */}
            <div className="p-6">
              {/* Header */}
              <div className="space-y-4">
                <h1 className="text-xl font-medium">Project Details</h1>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://i.pravatar.cc/48"
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h2 className="text-2xl font-semibold text-black">
                        {viewProject.name}
                      </h2>
                      <p className="text-md text-gray-800">
                        Client: {viewProject.client}
                      </p>
                    </div>
                  </div>
                  <span className="bg-green-700 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {viewProject.status}
                  </span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex space-x-6 border-y-2 border-gray-100 text-lg font-medium my-6">
                {[
                  "Overview",
                  "Tasks",
                  "Time Logs",
                  "Files",
                  "Chat",
                  "Invoices",
                ].map((tab, idx) => (
                  <button
                    key={idx}
                    className={`py-2 ${
                      tab === "Overview"
                        ? "border-b-2 border-black text-black"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Main Body */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left */}
                <div className="lg:col-span-2 space-y-6 border-r border-gray-200 pr-4">
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 rounded-md border border-gray-200 shadow-md">
                      <p className="text-md text-gray-800">Due Date</p>
                      <p className="font-semibold text-xl">{viewProject.dueDate}</p>
                    </div>
                    <div className="p-4 rounded-md border border-gray-200 shadow-md">
                      <p className="text-md text-gray-800">Budget</p>
                      <p className="font-semibold text-xl">{viewProject.budget}</p>
                    </div>
                    <div className="p-4 rounded-md border border-gray-200  shadow-md">
                      <p className="text-md text-gray-800 ">Progress</p>
                      <div className="mt-1">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full w-1/2"></div>
                        </div>
                        <p className="text-xl text-black font-medium mt-1">
                          {viewProject.progress}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="text-xl font-semibold mb-2">Description</h4>
                    <p className="text-lg text-gray-700">
                      A comprehensive redesign of the client’s company website
                      to improve user experience and visual appeal.
                    </p>
                  </div>

                  {/* Association */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Association</h4>
                    <ul className="space-y-3 text-lg text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="bg-gray-200 p-1.5 rounded">📝</span>
                        <span>You created this project</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="bg-gray-200 p-1.5 rounded">
                          <FiPlus className="text-xl" />
                        </span>
                        <span>Lisa Wong added the task “Design mockups”</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="bg-gray-200 p-1.5 rounded">
                          <FiUser className="text-xl" />
                        </span>
                        <span>James Lee joined the project</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right */}
                <div className="space-y-6">
                  {/* Assigned To */}
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Assigned To</h4>
                    <ul className="space-y-3">
                      {team.map((person, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <img
                            src={person.img}
                            alt={person.name}
                            className="w-11 h-11 rounded-full"
                          />
                          <div>
                            <p className="text-lg font-medium">{person.name}</p>
                            <p className="text-sm text-gray-500">
                              {person.role}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Activity */}
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Activity</h4>
                    <ul className="space-y-3">
                      {activity.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <span className="text-xl">{item.icon}</span>
                          <div>
                            <p className="text-lg">{item.text}</p>
                            <p className="text-sm text-gray-400">{item.time}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;

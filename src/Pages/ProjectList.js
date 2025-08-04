import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaTimes, FaEye } from "react-icons/fa";
import axios from "axios";
import UpdateProjectModal from "./UpdateProject";
const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewProject, setViewProject] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState(null);
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

  const projectsPerPage = 5;
  const freelancerId = localStorage.getItem("freelancerId");
  const fetchProjects = async () => {
    try {
      if (!freelancerId) return;

      const response = await axios.get(
        `https://freelance-management-frontend.onrender.com/api/freelancers/allprojects/${freelancerId}`
      );

      const transformed = response.data.map((proj) => ({
        name: proj.title,
        category: "Web Design",
        client: proj.client?.name || "Unknown",
        completion: 100,
        status: proj.status,
        dueDate: proj.timeline?.end?.slice(0, 10),
        budget: `₹${proj.total}`,
        progress: "100%",
        assignedTo: "You",
        association: proj.client?.company || "",
        raw: proj,
      }));

      setProjects(transformed);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

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

  const handleDelete = async (proposalId) => {
    try {
      const res = await fetch(
        `https://freelance-management-frontend.onrender.com/api/freelancers/deleteproposal/${freelancerId}/${proposalId}`,
        { method: "DELETE" }
      );
      const data = res.json();
      if (res.ok) {
        console.log("project delted succcessfully");
        fetchProjects();
      } else {
        console.log("Error" + data.message);
      }
    } catch (error) {
      console.log("Delete error" + error);
    }
  };

  const handleEdit = (index) => {
    setNewProject(projects[index]);
    setProjects(projects.filter((_, i) => i !== index));
    setIsModalOpen(true);
  };

  const handleView = (index) => {
    setViewProject(projects[index].raw);
    setIsViewModalOpen(true);
  };

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);
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
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border ">Project Name</th>
              <th className="p-3 border ">Category</th>
              <th className="p-3 border ">Client</th>
              <th className="p-3 border ">Completed (%)</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProjects.map((project, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 border-b text-center"
              >
                <td className="p-3 border">{project.name}</td>
                <td className="p-3 border">{project.category}</td>
                <td className="p-3 border">{project.client}</td>
                <td className="p-3 border">{project.completion}%</td>
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

                <td className="p-3 flex gap-3 align-center">
                  <button
                    onClick={() => handleView(indexOfFirst + index)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProposal(project.raw);
                      setIsEditModalOpen(true);
                    }}
                    className="text-green-500 hover:text-green-700"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(indexOfFirst + index)}
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

      {/* View Modal */}
      {isViewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative max-w-3xl w-full bg-white shadow-xl rounded-xl font-inter h-[95vh] overflow-y-auto p-8">
            <button
              onClick={() => setIsViewModalOpen(false)}
              className="absolute right-4 top-4 text-gray-600 hover:text-black text-2xl z-50"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-4 text-center">
              {viewProject.title}
            </h2>

            <div className="flex justify-between items-center mb-6">
              <span className="px-4 py-1 bg-green-600 text-white rounded-full text-sm">
                {viewProject.status}
              </span>
              <div className="text-xl font-semibold">
                Total: ₹{viewProject.total}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Client Information</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <p>
                  <strong>Name:</strong> {viewProject.client?.name}
                </p>
                <p>
                  <strong>Company:</strong> {viewProject.client?.company}
                </p>
                <p>
                  <strong>Email:</strong> {viewProject.client?.email}
                </p>
                <p>
                  <strong>Phone:</strong> {viewProject.client?.phone}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(viewProject.client?.date).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Timeline</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <p>
                  <strong>Start:</strong>{" "}
                  {new Date(viewProject.timeline?.start).toLocaleDateString()}
                </p>
                <p>
                  <strong>End:</strong>{" "}
                  {new Date(viewProject.timeline?.end).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p className="text-gray-700">{viewProject.overview}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Scope of Work</h3>
              <ul className="list-disc pl-6 text-gray-700">
                {viewProject.scopeOfWork?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Terms & Conditions</h3>
              <ul className="list-decimal pl-6 text-gray-700">
                {viewProject.termsAndConditions?.map((term, index) => (
                  <li key={index}>{term}</li>
                ))}
              </ul>
            </div>

            {/* <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
              <p><strong>Created:</strong> {new Date(viewProject.createdAt).toLocaleString()}</p>
              <p><strong>Last Updated:</strong> {new Date(viewProject.updatedAt).toLocaleString()}</p>
            </div> */}
          </div>
        </div>
      )}

      {/* //to edit project */}
      {/* to edit proposal */}
      {isEditModalOpen && selectedProposal && (
        <UpdateProjectModal
          setIsModalOpen={setIsEditModalOpen}
          proposal={selectedProposal}
          handleUpdateProposal={(updatedProposal) => {
            setProjects((prevProjects) =>
              prevProjects.map((proj) =>
                proj.raw._id === updatedProposal._id
                  ? {
                      ...proj,
                      name: updatedProposal.title,
                      client: updatedProposal.client?.name || "Unknown",
                      dueDate: updatedProposal.timeline?.end?.slice(0, 10),
                      budget: `₹${updatedProposal.total}`,
                      status: updatedProposal.status,
                      raw: updatedProposal,
                    }
                  : proj
              )
            );
            setSelectedProposal(null);
            setIsEditModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default ProjectList;

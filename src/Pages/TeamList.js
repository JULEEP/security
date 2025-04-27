import React, { useState } from "react";
import { FaPlus, FaPen, FaTrash, FaTimes } from "react-icons/fa";

const TeamList = () => {
  const [teams, setTeams] = useState([
    { clientName: "John Doe", email: "john@example.com", role: "Manager", projects: "Project 1, Project 2", status: "Active" },
    { clientName: "Jane Smith", email: "jane@example.com", role: "Developer", projects: "Project 3", status: "Pending" },
    { clientName: "Michael Lee", email: "michael@example.com", role: "Designer", projects: "Project 4", status: "Active" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTeam, setNewTeam] = useState({
    clientName: "",
    email: "",
    role: "",
    projects: "",
    status: "",
  });

  const handleInputChange = (e) => {
    setNewTeam({ ...newTeam, [e.target.name]: e.target.value });
  };

  const handleAddTeam = () => {
    if (newTeam.clientName && newTeam.email && newTeam.role && newTeam.projects && newTeam.status) {
      setTeams([...teams, newTeam]);
      setNewTeam({ clientName: "", email: "", role: "", projects: "", status: "" });
      setIsModalOpen(false);
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleDelete = (index) => {
    const updatedTeams = teams.filter((_, i) => i !== index);
    setTeams(updatedTeams);
  };

  const handleEdit = (index) => {
    const teamToEdit = teams[index];
    setNewTeam({ ...teamToEdit });
    setIsModalOpen(true);
    handleDelete(index); // Remove the team to be edited before updating it
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Team List</h2>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus /> Add New Team
        </button>
      </div>

      {/* Team Summary */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Total Team Members</h3>
          <p className="text-xl">{teams.length}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Pending Invitations</h3>
          <p className="text-xl">{teams.filter(team => team.status === "Pending").length}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Active Projects</h3>
          <p className="text-xl">{teams.filter(team => team.status === "Active").length}</p>
        </div>
      </div>

      {/* Team Member List */}
      <div className="overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border text-left">Client Name</th>
              <th className="p-3 border text-left">Email</th>
              <th className="p-3 border text-left">Role</th>
              <th className="p-3 border text-left">Projects</th>
              <th className="p-3 border text-left">Status</th>
              <th className="p-3 border text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index} className="hover:bg-gray-100 border-b">
                <td className="p-3 border">{team.clientName}</td>
                <td className="p-3 border">{team.email}</td>
                <td className="p-3 border">{team.role}</td>
                <td className="p-3 border">{team.projects}</td>
                <td className="p-3 border">{team.status}</td>
                <td className="p-3 border flex gap-3 justify-center">
                  <button onClick={() => handleEdit(index)} className="text-yellow-500 hover:text-yellow-600">
                    <FaPen />
                  </button>
                  <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-600">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Team Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-[500px] relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-xl font-bold mb-6 text-center">Add New Team</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="clientName"
                placeholder="Client Name"
                value={newTeam.clientName}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newTeam.email}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={newTeam.role}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="text"
                name="projects"
                placeholder="Projects"
                value={newTeam.projects}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <select
                name="status"
                value={newTeam.status}
                onChange={handleInputChange}
                className="p-3 border rounded col-span-2"
              >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="Active">Active</option>
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
                onClick={handleAddTeam}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamList;

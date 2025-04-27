import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaTimes, FaEye } from "react-icons/fa";

const ClientList = () => {
  const [clients, setClients] = useState([
    {
      clientName: "John Doe",
      companyName: "Amazon",
      email: "john@amazon.com",
      projects: "E-commerce Website",
      budget: "50000",
      status: "Active",
      tags: "E-commerce, Web",
      totalProjects: 5,
      totalAmount: 250000,
    },
    {
      clientName: "Jane Smith",
      companyName: "Flipkart",
      email: "jane@flipkart.com",
      projects: "Mobile App",
      budget: "30000",
      status: "Active",
      tags: "Mobile, App",
      totalProjects: 3,
      totalAmount: 90000,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newClient, setNewClient] = useState({
    clientName: "",
    companyName: "",
    email: "",
    projects: "",
    budget: "",
    status: "",
    tags: "",
    totalProjects: "",
    totalAmount: "",
  });
  const [viewClient, setViewClient] = useState(null);

  const handleInputChange = (e) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  const handleAddClient = () => {
    if (Object.values(newClient).every((field) => field !== "")) {
      setClients([...clients, newClient]);
      setNewClient({
        clientName: "",
        companyName: "",
        email: "",
        projects: "",
        budget: "",
        status: "",
        tags: "",
        totalProjects: "",
        totalAmount: "",
      });
      setIsModalOpen(false);
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleDelete = (index) => {
    const updatedClients = clients.filter((_, i) => i !== index);
    setClients(updatedClients);
  };

  const handleEdit = (index) => {
    const clientToEdit = clients[index];
    setNewClient(clientToEdit);
    setClients(clients.filter((_, i) => i !== index));
    setIsModalOpen(true);
  };

  const handleView = (client) => {
    setViewClient(client);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Clients</h2>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2"
          onClick={() => {
            setNewClient({
              clientName: "",
              companyName: "",
              email: "",
              projects: "",
              budget: "",
              status: "",
              tags: "",
              totalProjects: "",
              totalAmount: "",
            });
            setIsModalOpen(true);
          }}
        >
          <FaPlus /> Add Client
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border text-left">Client Name</th>
              <th className="p-3 border text-left">Company</th>
              <th className="p-3 border text-left">Email</th>
              <th className="p-3 border text-left">Projects</th>
              <th className="p-3 border text-left">Budget</th>
              <th className="p-3 border text-left">Status</th>
              <th className="p-3 border text-left">Tags</th>
              <th className="p-3 border text-left">Total Projects</th>
              <th className="p-3 border text-left">Total Amount</th>
              <th className="p-3 border text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index} className="hover:bg-gray-100 border-b">
                <td className="p-3 border">{client.clientName}</td>
                <td className="p-3 border">{client.companyName}</td>
                <td className="p-3 border">{client.email}</td>
                <td className="p-3 border">{client.projects}</td>
                <td className="p-3 border">${client.budget}</td>
                <td className="p-3 border">{client.status}</td>
                <td className="p-3 border">{client.tags}</td>
                <td className="p-3 border">{client.totalProjects}</td>
                <td className="p-3 border">${client.totalAmount}</td>
                <td className="p-3 border flex gap-3">
                  <button
                    onClick={() => handleView(client)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-green-500 hover:text-green-700"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
            <h2 className="text-xl font-bold mb-6 text-center">Add / Edit Client</h2>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="clientName" placeholder="Client Name" value={newClient.clientName} onChange={handleInputChange} className="p-3 border rounded" />
              <input type="text" name="companyName" placeholder="Company Name" value={newClient.companyName} onChange={handleInputChange} className="p-3 border rounded" />
              <input type="email" name="email" placeholder="Email" value={newClient.email} onChange={handleInputChange} className="p-3 border rounded" />
              <input type="text" name="projects" placeholder="Projects" value={newClient.projects} onChange={handleInputChange} className="p-3 border rounded" />
              <input type="number" name="budget" placeholder="Budget" value={newClient.budget} onChange={handleInputChange} className="p-3 border rounded" />
              <select name="status" value={newClient.status} onChange={handleInputChange} className="p-3 border rounded">
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <input type="text" name="tags" placeholder="Tags" value={newClient.tags} onChange={handleInputChange} className="p-3 border rounded" />
              <input type="number" name="totalProjects" placeholder="Total Projects" value={newClient.totalProjects} onChange={handleInputChange} className="p-3 border rounded" />
              <input type="number" name="totalAmount" placeholder="Total Amount" value={newClient.totalAmount} onChange={handleInputChange} className="p-3 border rounded" />
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddClient}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Client Modal */}
      {viewClient && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-[500px] relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setViewClient(null)}
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-xl font-bold mb-6 text-center">Client Details</h2>
            <div className="space-y-3 text-sm">
              <p><strong>Client Name:</strong> {viewClient.clientName}</p>
              <p><strong>Company Name:</strong> {viewClient.companyName}</p>
              <p><strong>Email:</strong> {viewClient.email}</p>
              <p><strong>Projects:</strong> {viewClient.projects}</p>
              <p><strong>Budget:</strong> ${viewClient.budget}</p>
              <p><strong>Status:</strong> {viewClient.status}</p>
              <p><strong>Tags:</strong> {viewClient.tags}</p>
              <p><strong>Total Projects:</strong> {viewClient.totalProjects}</p>
              <p><strong>Total Amount:</strong> ${viewClient.totalAmount}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientList;

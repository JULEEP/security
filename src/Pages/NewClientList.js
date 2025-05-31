import React, { useState } from "react";
import {
  FiSearch,
  FiMoreVertical,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const NewClientList = () => {
  const [clients, setClients] = useState([
    {
      name: "Saran Smith",
      company: "Smith Designs",
      email: "sarah@example.com",
      status: "Active",
      projects: "2 ago",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "John Jawse",
      company: "Solutions Ltd.",
      email: "james@example.com",
      status: "Active",
      projects: "As inno",
      avatar: "",
    },
    {
      name: "James Lee",
      company: "Marketing Ltd",
      email: "john.doe@example.com",
      status: "Active",
      projects: "",
      avatar: "",
    },
    {
      name: "Sarah Johnson",
      company: "Web Solutions",
      email: "sarah.j@example.com",
      status: "Active",
      projects: "3 Active",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Emma Wilson",
      company: "Creative Agency",
      email: "emma.w@example.com",
      status: "No Active Projects",
      projects: "",
      avatar: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    {
      name: "John Doe",
      company: "Lead Tax Amagy",
      email: "john.doe@example.com",
      status: "Lead",
      projects: "",
      avatar: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    {
      name: "David Brown",
      company: "Brown & Co",
      email: "david@example.com",
      status: "Active",
      projects: "5 Active Projects",
      avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    {
      name: "Michael Davis",
      company: "Davie Industries",
      email: "michael@example.com",
      status: "2 Active",
      projects: "Projets",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Patricia Taylor",
      company: "Taylor Inc.",
      email: "patricia@example.com",
      status: "Active",
      projects: "",
      avatar: "https://randomuser.me/api/portraits/women/75.jpg",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newClient, setNewClient] = useState({
    name: "",
    company: "",
    email: "",
    status: "",
    projects: "",
    avatar: "",
  });
  const [viewClient, setViewClient] = useState(null);
  const handleInputChange = (e) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  const handleAddClient = () => {
    if (Object.values(newClient).every((field) => field !== "")) {
      setClients([...clients, newClient]);
      setNewClient({
        name: "",
        company: "",
        email: "",
        status: "",
        projects: "",
        avatar: "",
      });
      setIsModalOpen(false);
    } else {
      alert("Please fill all fields!");
    }
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
    <div className="p-8 bg-white">
      <div className="flex items-center justify-between mb-6">
        <div className="relative w-80">
          <FiSearch className="w-5 h-5 text-gray-800 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search clients"
            className="pl-10 pr-4 py-2 rounded-lg w-full bg-gray-100 text-md placeholder-gray-800"
          />
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={() => {
            setNewClient({
              name: "",
              company: "",
              email: "",
              status: "",
              projects: "",
              avatar: "",
            });
            setIsModalOpen(true);
          }}
        >
          + Add Client
        </button>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-black text-2xl font-semibold ">Clients</h1>
        <div className="flex items-center gap-4 mb-4">
          {/* Filter Dropdown */}
          <div>
            <label className="text-sm font-medium mr-2"></label>
            <select className="border border-gray-100 rounded-md px-3 py-2 bg-white text-lg focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option> Filter</option>
              <option>Active</option>
              <option>Lead</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Sort Dropdown */}
          <div>
            <select className="border border-gray-100 rounded-md px-3 py-2 bg-white text-lg focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>Sort</option>
              <option>Sort by Status</option>
              <option>Sort by Projects</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="p-4 rounded-lg  border border-gray-100 flex flex-col space-y-2"
            onClick={() => handleView(client)}
          >
            <div className="flex items-center space-x-4">
              {client.avatar ? (
                <img
                  src={client.avatar}
                  alt={client.name}
                  className="w-12 h-12 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-sm text-white">
                  {client.name[0]}
                </div>
              )}
              <div>
                <h4 className="font-semibold text-xl">{client.name}</h4>
                <p className="text-lg text-gray-800">{client.company}</p>
              </div>
            </div>
            <hr className="border border-gray-100" />
            <p className="text-lg text-black">{client.email}</p>
            <div className="flex items-center justify-between">
              <span
                className={`text-lg px-4 rounded-md  ${
                  client.status.toLowerCase().includes("active")
                    ? "bg-green-100 text-green-800"
                    : client.status === "Lead"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {client.status}
              </span>
              {client.projects && (
                <span className="text-sm text-black">{client.projects}</span>
              )}
            </div>
          </div>
        ))}
      </div>
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
              Add / Edit Client
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={newClient.name}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newClient.email}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={newClient.mobile}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={newClient.password}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={newClient.companyName}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="url"
                name="profileImage"
                placeholder="Profile Image URL"
                value={newClient.profileImage}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={newClient.address}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <textarea
                name="bio"
                placeholder="Short Bio"
                value={newClient.bio}
                onChange={handleInputChange}
                className="p-3 border rounded h-24"
              ></textarea>

              <div className="flex items-center col-span-2">
                <input
                  type="checkbox"
                  name="agreedToTerms"
                  checked={newClient.agreedToTerms || false}
                  onChange={(e) =>
                    setNewClient({
                      ...newClient,
                      agreedToTerms: e.target.checked,
                    })
                  }
                  className="mr-2"
                />
                <label htmlFor="agreedToTerms">
                  I agree to the terms and conditions
                </label>
              </div>
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
      {viewClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" flex relative max-w-4xl w-full bg-white shadow-xl rounded-xl font-inter h-[90vh] overflow-y-auto">
            <button
              onClick={() => setViewClient(null)}
              className="absolute right-2 top-0 text-gray-600 hover:text-black text-2xl z-50 mr-2"
            >
              x
            </button>
            <div>
              <div className="flex items-center pl-10 py-6">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="avatar"
                  className="w-22 h-24 rounded-2xl mr-4"
                />
                <div className="flex-grow">
                  <h1 className="text-3xl font-semibold text-gray-800 mb-2">
                    Sarah Smith{" "}
                    <span className="ml-4 px-6 py-1 text-sm bg-green-400 text-white rounded-full">
                      Active
                    </span>
                  </h1>
                  <p className="text-lg text-gray-800 ">sarah@email.com</p>
                  <p className="text-lg text-gray-700">
                    +1 234 567 8801 • WebWorks Inc.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex space-x-6 border-y border-gray-200 text-gray-600 font-medium text-xl py-3 px-10">
                  <button className=" border-black text-black">Overview</button>
                  <button>Projects</button>
                  <button>Invoices</button>
                  <button>Time Logs</button>
                  <button>Chats</button>
                  <button>Files</button>
                </div>

                <div className="grid grid-cols-[20%_30%_47%] gap-4 mt-6 text-center px-10 ">
                  <div className="border p-4 rounded-lg shadow-md shadow-gray-300 space-y-1">
                    <p className="text-xl">Total Projects</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <div className="border p-4 rounded-lg shadow-md shadow-gray-300 space-y-1">
                    <p className="text-xl">Total Invoiced</p>
                    <p className="text-2xl font-bold">$12,750</p>
                  </div>
                  <div className="border p-4 rounded-lg shadow-md shadow-gray-300 space-y-1">
                    <p className="text-xl">Last Activity</p>
                    <p className="text-2xl font-bold">2 days ago</p>
                  </div>
                </div>

                <div className="mt-6 px-10">
                  <h2 className="text-2xl font-semibold mb-3">Projects</h2>
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full text-xl text-left">
                      <thead className="text-lg border-b ">
                        <tr>
                          <th className="px-4 py-2">Product</th>
                          <th className="px-4 py-2">Budget</th>
                          <th className="px-4 py-2">Status</th>
                          <th className="px-4 py-2">Tags</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3">Website Redesign</td>
                          <td className="px-4 py-3">$5,000</td>
                          <td className="px-4 py-3">
                            <span className="px-4 py-1 bg-gray-200 rounded-full text-lg">
                              Ongoing
                            </span>
                          </td>
                          <td className="px-4 py-3 ">✓</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3">Design landing page</td>
                          <td className="px-4 py-3">$2,500</td>
                          <td className="px-4 py-3">
                            <span className="px-4 py-1 bg-gray-200 rounded-full text-lg">
                              Completed
                            </span>
                          </td>
                          <td className="px-4 py-3">✓</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3">Mobile App UI</td>
                          <td className="px-4 py-3">$5,250</td>
                          <td className="px-4 py-3">
                            <span className="px-4 py-1 bg-gray-200  rounded-full text-lg">
                              Ongoing
                            </span>
                          </td>
                          <td className="px-4 py-3">✓</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="mt-6 flex mr-10 items-center space-x-9 justify-end">
                <MdMessage className="text-gray-800 text-3xl" />

                <img
                  src="https://randomuser.me/api/portraits/men/33.jpg"
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
              </div>
              <div className="px-6 py-6 border border-gray-100 rounded-lg h-auto mt-10 mr-6 shadow-sm">
                <div className="h-auto">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Notes
                  </h2>
                  <textarea
                    className="w-full border rounded-lg text-lg text-left h-10 pl-2 pt-1 "
                    placeholder="Add note..."
                  ></textarea>
                </div>
                <div className="h-auto">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3 mt-5">
                    Activity
                  </h2>
                  <div className="space-y-4 text-lg text-gray-700">
                    <div className="flex items-start">
                      <img
                        src="https://randomuser.me/api/portraits/men/33.jpg"
                        className="w-8 h-8 rounded-full mr-2 mt-1"
                        alt=""
                      />
                      <p>
                        You created an Invoice #004 <br />
                        <span className="text-sm text-gray-500">
                          2 days ago
                        </span>
                      </p>
                    </div>
                    <div className="flex items-start">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        className="w-8 h-8 rounded-full mr-2 mt-1"
                        alt=""
                      />
                      <p>
                        Invoice #001 marked as paid <br />
                        <span className="text-sm text-gray-500">
                          1 week ago
                        </span>
                      </p>
                    </div>
                    <div className="flex items-start ">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        className="w-8 h-8 rounded-full mr-2 mt-1"
                        alt=""
                      />
                      <p className="leading-1">
                        You created an Invoice #003 <br />
                        <span className="text-sm text-gray-500 ">
                          2 weeks ago
                        </span>
                      </p>
                    </div>
                    <div className="flex items-start">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        className="w-8 h-8 rounded-full mr-2 mt-1"
                        alt=""
                      />
                      <p>
                        You added Design landing page <br />
                        <span className="text-sm text-gray-500">
                          2 weeks ago
                        </span>
                      </p>
                    </div>
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

export default NewClientList;

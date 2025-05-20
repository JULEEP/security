import React from "react";
import {
  FiSearch,
  FiMoreVertical,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const clients = [
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
];

const NewClientList = () => {
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
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
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
      
    </div>
  );
};

export default NewClientList;

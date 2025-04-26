import React from "react";
import ClientSideSidebar from "../components/ClinetSideSidebar";

const clients = [
  {
    name: "Sarah Smith",
    company: "Smith Designs",
    email: "sarah@example.com",
    status: "Active",
    projects: "2 Active Projects",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "John Jawse",
    company: "Solutions Ltd.",
    email: "james@example.com",
    status: "Active",
    projects: "1 Active Project",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "James Lee",
    company: "Marketing Ltd.",
    email: "john.doe@example.com",
    status: "Active",
    projects: "No Active Projects",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sarah Johnson",
    company: "Web Solutions",
    email: "sarah.j@example.com",
    status: "Active",
    projects: "5 Active Projects",
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Emma Wilson",
    company: "Creative Agency",
    email: "emma@vxexample.com",
    status: "Lead",
    projects: "No Active Projects",
    imageUrl: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "David Brown",
    company: "Brown & Co",
    email: "david@example.com",
    status: "Active",
    projects: "3 Active Projects",
    imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

export default function ClientDashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <ClientSideSidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Clients</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
            + Add Client
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-3 mx-auto">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={client.imageUrl}
                  alt={client.name}
                  className="w-14 h-14  rounded-full object-cover"
                />
                <div>
                  <h3 className="font-normal sm:text-base">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.company}</p>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-700">
                <p className="text-xs text-start md:text-base">{client.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      client.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {client.status}
                  </span>
                  {client.projects && (
                    <span className="text-gray-400 text-xs">{client.projects}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
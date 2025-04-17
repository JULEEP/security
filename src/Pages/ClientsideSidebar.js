import React from "react";
import { Link, Route } from "react-router-dom";

const people = [
  { name: "Jacob Rawlings", status: "Online", message: "We’re sending up statisic's your stratic-site.", time: "Online", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Julia Martins", status: "Interest frice", message: "Take a daveboard feedbackback.", time: "1 ha", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Marcus Watts", status: "Illustration", message: "Hi, I’m glad you’re done motion completed.", time: "39 mo", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Melinda Wilson", status: "Meeting schedule", message: "Meeting scheduled for a new milestorle", time: "19 jun", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Startup Logo", status: "Pending milestone", message: "Hending milestone today", time: "26 jun", avatar: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
  { name: "Thomas D.", status: "Hourly report", message: "Send an hourly report", time: "11 Jul", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
];

export default function ClientSidebar() {
  return (
    <div className="m-7 shadow-2xl rounded-2xl bg-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-60 bg-[#292D55] text-white flex-shrink-0 hidden md:block rounded-l-xl">
          <div className="p-6 text-2xl font-semibold">Client</div>
          <nav className="space-y-2">
            <Link to="#" className="block px-6 py-2 m-4 hover:bg-[#4F4D93] rounded text-white font-medium">
              Messages
            </Link>
            <Link to="#"  className="block px-6 py-2 m-4 hover:bg-[#4F4D93] rounded">My Projects</Link>
            <Link to="#" className="block px-6 py-2 m-4 hover:bg-[#4F4D93] rounded">Invoices</Link>
            <Link to="#" className="block px-6 py-2 m-4 hover:bg-[#4F4D93] rounded">Settings</Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-7 rounded-r-2xl">
          {/* Top Tabs */}
<div className="flex space-x-4 justify-center pb-2 mb-6 text-gray-600 text-sm">
        <Link to="#" className="hover:text-[#292D55] border-b-2 border-transparent hover:border-[#292D55] hover:font-medium">My Projects</Link>
        <Link to="#" className="hover:text-[#292D55] border-b-2 border-transparent hover:border-[#292D55] hover:font-medium">Invoices</Link>
        <Link to="#"  className="hover:text-[#292D55] border-b-2 border-transparent hover:border-[#292D55] hover:font-medium">Settings</Link>
</div>
      <hr></hr>
          {/* Messages List */}
          <div>
            {people.map((person, index) => (
              <div key={index} className="flex items-center justify-between bg-white p-4  transition rounded-lg">
                <div className="flex items-center  ">
                  <img src={person.avatar} alt={person.name} className="w-12 h-12 rounded-full object-cover " />
                  <div className="pl-3">
                    <div className="font-medium text-gray-900">{person.name} <span className="text-sm text-gray-500">{person.status}</span></div>
                    <div className="text-gray-600 text-sm">{person.message}</div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">{person.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

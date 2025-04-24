// Sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-64 bg-[#2C2543] text-white flex flex-col p-6 ">
      {/* Logo / Title */}
      <h2 className="text-2xl font-bold mb-10">Client</h2>

      {/* Navigation Menu */}
      <nav className="space-y-4">
        <SidebarItem label="Messages" active />
        <SidebarItem label="My Projects" />
        <SidebarItem label="Invoices" />
        <SidebarItem label="Settings" />
      </nav>
    </div>
  );
};

const SidebarItem = ({ label, active }) => {
  return (
    <div
      className="cursor-pointer px-4 py-2 rounded-md font-medium transition hover:bg-[#4F4D93]"
    >
      {label}
    </div>
  );
};

export default Sidebar;

// App.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

const ClientSidebar = () => {
  return (
    <div className="flex h-max bg-gray-100">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default ClientSidebar;

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaHome, FaUser, FaCog, FaShoppingCart } from "react-icons/fa"; // Icons for the client

const ClientNavbar = ({ setIsCollapsed, isCollapsed }) => {
  return (
    <nav className="bg-[#FFFFFF] text-black sticky top-0 w-full p-4 flex items-center shadow-lg z-50">
      <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-xl p-2">
        {isCollapsed ? (
          <FiMenu className="text-2xl text-[#AAAAAA]" />
        ) : (
          <FiMenu className="text-2xl text-[#AAAAAA]" />
        )}
      </button>

      <div className="flex justify-between items-center w-full">
        <div className="flex gap-3 ml-4">
          {/* Add any additional navbar items here */}
        </div>

        <div className="flex gap-3 items-center">
          <div className="flex flex-col justify-center items-center">
            {/* Replace with client-specific avatar */}
            <img
              className="rounded-full w-[3vw]"
              src="https://cdn.dribbble.com/users/1809976/screenshots/5583225/happy_client_gets_animated_explainer_video_4x.jpg" // Replace with the client's avatar
              alt="Client Avatar"
            />
            <h1 className="text-xs">Client</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ClientNavbar;

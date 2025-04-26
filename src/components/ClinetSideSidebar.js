import React, { useState } from 'react';
import {
  FiGrid,
  FiFolder,
  FiClock,
  FiFileText,
  FiUsers,
  FiBarChart2,
  FiMessageSquare,
  FiBriefcase,
  FiFile,
  FiMenu,
  FiX
} from 'react-icons/fi';

const menuItems = [
  { icon: <FiGrid />, label: 'Dashboard' },
  { icon: <FiFolder />, label: 'Projects' },
  { icon: <FiClock />, label: 'Time Tracker' },
  { icon: <FiFileText />, label: 'Invoices' },
  { icon: <FiUsers />, label: 'Clients' },
  { icon: <FiBarChart2 />, label: 'Reports' },
  { icon: <FiMessageSquare />, label: 'Chat' },
  { icon: <FiBriefcase />, label: 'Portfolio' },
  { icon: <FiFile />, label: 'Proposals' },
];

const Sidebar = ({ active = 'Invoices' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="sm:hidden bg-[#0e1d2c] text-white px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">S Security</div>
        <button onClick={() => setIsOpen(true)}>
          <FiMenu size={24} />
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0e1d2c] text-white z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:relative sm:flex sm:flex-col`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700 sm:block sm:border-none">
          <div className="text-xl font-semibold">S Security</div>
          <button className="sm:hidden" onClick={() => setIsOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        <nav className="px-4 py-4 space-y-1 flex-1">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-[#1f2c3d] transition ${
                active === item.label ? 'bg-[#1f2c3d]' : ''
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

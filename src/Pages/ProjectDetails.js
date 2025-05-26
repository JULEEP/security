import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FiPlus, FiUser } from "react-icons/fi";


const ProjectDetailsPage = () => {
  const team = [
    { name: "John Doe", role: "Owner", img: "https://i.pravatar.cc/40?img=1" },
    { name: "Alex Johnson", role: "Designer", img: "https://i.pravatar.cc/40?img=2" },
    { name: "Lisa Wong", role: "Developer", img: "https://i.pravatar.cc/40?img=3" },
    { name: "James Lee", role: "Tester", img: "https://i.pravatar.cc/40?img=4" },
  ];

  const activity = [
    { icon: <BsArrowLeftShort className="text-2xl" />, text: "You created this project", time: "2h ago" },
    { icon: <FiPlus className="text-2xl" />, text: 'Lisa Wong added the task “Design mockups”', time: "2h ago" },
    { icon: <FiUser className="text-2xl" />, text: "James Lee joined the project", time: "2h ago" },
  ];

  return (
   
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl font-inter">
        {/* Header */}
        <div className="flex-col space-y-4 p-6">
        <h1 className="text-xl font-medium">Project Details</h1>    
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img src="https://i.pravatar.cc/48" alt="Avatar" className="w-10 h-10 rounded-full" />
            <div>
              <h1 className="text-2xl font-semibold text-black">Website Redesign</h1>
              <p className="text-md text-gray-800">Client: Sarah Smith</p>
            </div>
          </div>
          <span className="bg-green-700 text-white text-sm font-medium px-3 py-1 rounded-full">
            Ongoing
          </span>
        </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-6 border-y-4 border-gray-100 text-lg font-medium px-6 ">
          {["Overview", "Tasks", "Time Logs", "Files", "Chat", "Invoices"].map((tab, idx) => (
            <button
              key={idx}
              className={`p-2 ${
                tab === "Overview"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6 border-r-4 border-gray-100 pt-6">
            {/* Top Metrics */}
            <div className="grid grid-cols-3 gap-4 px-6 ">
              <div className="p-4 rounded-md border border-gray-200 shadow-md">
                <p className="text-md text-gray-800">Due Date</p>
                <p className="font-semibold text-xl">May 31, 2024</p>
              </div>
              <div className="p-4 rounded-md border border-gray-200 shadow-md">
                <p className="text-md text-gray-800">Budget</p>
                <p className="font-semibold text-xl">$10,000</p>
              </div>
              <div className="p-4 rounded-md border border-gray-200  shadow-md">
                <p className="text-md text-gray-800 ">Progress</p>
                <div className="mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full w-1/2"></div>
                  </div>
                  <p className="text-xl text-black font-medium mt-1">50%</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="px-6 border-b-4 border-gray-100 pb-6">
              <h4 className="text-xl font-semibold mb-2">Description</h4>
              <p className="text-lg text-gray-700">
                A comprehensive redesign of the client’s company website to improve user experience
                and visual appeal.
              </p>
            </div>

            {/* Association */}
            <div className="pl-6">
              <h4 className="text-xl font-semibold mb-4">Association</h4>
              <ul className="text-xl text-gray-700 space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="bg-gray-200 p-1.5 rounded">📝</span>
                  <span>You created this project</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="bg-gray-200 p-1.5 rounded"><FiPlus className="text-xl" /></span>
                  <span>Lisa Wong added the task “Design mockups”</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="bg-gray-200 p-1.5 rounded"><FiUser className="text-xl" /></span>
                  <span>James Lee joined the project</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6 pt-6">
            {/* Assigned To */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Assigned To</h4>
              <ul className="space-y-3">
                {team.map((person, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <img src={person.img} alt={person.name} className="w-11 h-11 rounded-full" />
                    <div>
                      <p className="text-xl font-medium">{person.name}</p>
                      <p className="text-md text-gray-500">{person.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activity */}
            <div className="pb-6 pr-6 ">
              <h4 className="text-xl font-semibold mb-2 pr-6">Activity</h4>
              <ul className="space-y-3">
                {activity.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <p className="text-lg leading-[1]">{item.text}</p>
                      <p className="text-lg text-gray-400">{item.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ProjectDetailsPage;

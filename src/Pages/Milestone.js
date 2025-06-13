import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaSpinner, FaClock } from "react-icons/fa";

const initialMilestones = [
  {
    id: 1,
    title: "Proposal Completed",
    description: "Initial proposal reviewed and accepted.",
    status: "done",
  },
  {
    id: 2,
    title: "Requirements Gathering",
    description: "Collected business and technical requirements.",
    status: "done",
  },
  {
    id: 3,
    title: "Design Phase",
    description: "Created wireframes, mockups, and final UI designs.",
    status: "in-progress",
  },
  {
    id: 4,
    title: "Frontend Development",
    description: "Building responsive UI with React.",
    status: "pending",
  },
  {
    id: 5,
    title: "Backend Development",
    description: "Setting up server, database, and APIs.",
    status: "pending",
  },
  {
    id: 6,
    title: "Integration",
    description: "Connecting frontend with backend APIs.",
    status: "pending",
  },
  {
    id: 7,
    title: "Testing & QA",
    description: "Functional, unit, and user testing in progress.",
    status: "pending",
  },
  {
    id: 8,
    title: "Deployment",
    description: "Deploying application to production environment.",
    status: "pending",
  },
  {
    id: 9,
    title: "Post-Launch Monitoring",
    description: "Monitoring for bugs and collecting user feedback.",
    status: "pending",
  },
  {
    id: 10,
    title: "Maintenance",
    description: "Ongoing bug fixes and performance improvements.",
    status: "pending",
  },
  {
    id: 11,
    title: "Launch",
    description: "Final testing and deployment.",
    status: "pending",
  },
];

const statusStyles = {
  done: {
    bg: "bg-green-600",
    icon: <FaCheckCircle className="mr-1" />,
    label: "Done",
  },
  "in-progress": {
    bg: "bg-yellow-500",
    icon: <FaSpinner className="animate-spin mr-1" />,
    label: "In Progress",
  },
  pending: {
    bg: "bg-gray-400",
    icon: <FaClock className="mr-1" />,
    label: "Pending",
  },
};

export default function MilestoneFlow() {
  const [milestones, setMilestones] = useState(initialMilestones);
  const [editId, setEditId] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleEdit = (milestone) => {
    setEditId(milestone.id);
    setEditedData(milestone);
  };

  const handleSave = () => {
    setMilestones((prev) =>
      prev.map((m) => (m.id === editId ? editedData : m))
    );
    setEditId(null);
  };

  const handleChange = (field, value) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-white relative">
      <h2 className="text-5xl font-bold text-center mb-16 text-indigo-900">
        Project Milestones
      </h2>

      {/* Timeline Vertical Line */}
      <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-gray-300 to-indigo-200 transform -translate-x-1/2 z-0" />

      <div className="space-y-10 relative z-10">
        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0;
          const position = isLeft ? "justify-start pr-10" : "justify-end pl-10";
          const dotPosition = isLeft
            ? "left-[calc(50%-0.65rem)]"
            : "right-[calc(50%-0.65rem)]";
          const status = statusStyles[m.status];

          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex ${position}`}
            >
              {/* Dot on Line */}
              <div
                className={`absolute top-5 w-5 h-5 rounded-full border-4 border-white bg-indigo-900 shadow-lg z-10 ${dotPosition}`}
              />

              {/* Card */}
              <div className="w-[320px] sm:w-[420px] p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-blue-950 to-indigo-300 relative transition-transform transform hover:-translate-y-2 hover:scale-105">
                <span
                  className={`absolute top-3 right-3 px-3 py-1 text-sm flex items-center rounded-full ${status.bg}`}
                >
                  {status.icon}
                  {status.label}
                </span>

                {editId === m.id ? (
                  <>
                    <input
                      value={editedData.title}
                      onChange={(e) => handleChange("title", e.target.value)}
                      className="w-full font-bold text-xl bg-white/10 text-white p-2 rounded mb-3 outline-none"
                    />
                    <textarea
                      value={editedData.description}
                      onChange={(e) =>
                        handleChange("description", e.target.value)
                      }
                      className="w-full text-sm bg-white/10 text-white p-2 rounded outline-none resize-none"
                    />
                    <select
                      value={editedData.status}
                      onChange={(e) => handleChange("status", e.target.value)}
                      className="mt-3 p-2 rounded bg-white text-black w-full"
                    >
                      <option value="done">Done</option>
                      <option value="in-progress">In Progress</option>
                      <option value="pending">Pending</option>
                    </select>
                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={handleSave}
                        className="px-4 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditId(null)}
                        className="px-4 py-1 bg-gray-400 text-sm rounded hover:bg-gray-500"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-semibold mb-2">{m.title}</h3>
                    <p className="text-lg text-white/90 mb-3">
                      {m.description}
                    </p>
                    <button
                      onClick={() => handleEdit(m)}
                      className="px-4 py-1 bg-white text-blue-900 text-sm font-semibold rounded hover:bg-purple-100"
                    >
                      Edit
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

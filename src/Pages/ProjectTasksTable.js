import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons

const tasksData = [
  {
    id: 1,
    summary: "ggggg",
    sprintName: "Sprint 1",
    projectName: "AppaStore App Upgrade",
    projectLead: "Arnika Mcmillan",
    teamMember: "Maisha Gonzales",
    status: "To do",
    priority: "High",
    date: "2024-08-26",
    createdBy: "Admin",
  },
];

export default function ProjectTasksTable() {
  const [tasks, setTasks] = useState(tasksData);
  const [search, setSearch] = useState("");
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const [newTask, setNewTask] = useState({
    summary: "",
    sprintName: "",
    projectName: "AppaStore App Upgrade", // Default project name
    projectLead: "Arnika Mcmillan", // Default project lead
    teamMember: "",
    status: "To do",
    priority: "High",
    date: "",
    createdBy: "Admin", // Default created by
  });

  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Handle adding new task
  const handleAddTask = () => {
    if (newTask.summary && newTask.sprintName && newTask.teamMember && newTask.date) {
      setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
      setShowNewTaskModal(false);
      setNewTask({
        summary: "",
        sprintName: "",
        projectName: "AppaStore App Upgrade",
        projectLead: "Arnika Mcmillan",
        teamMember: "",
        status: "To do",
        priority: "High",
        date: "",
        createdBy: "Admin",
      });
    } else {
      alert("All fields are required!");
    }
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.summary.toLowerCase().includes(search.toLowerCase()) ||
      task.sprintName.toLowerCase().includes(search.toLowerCase()) ||
      task.projectName.toLowerCase().includes(search.toLowerCase()) ||
      task.status.toLowerCase().includes(search.toLowerCase())
  );

  // Limit the tasks based on itemsPerPage
  const displayedTasks = filteredTasks.slice(0, itemsPerPage);

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="p-2 border rounded"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <input
            type="text"
            placeholder="Search tasks..."
            className="p-2 border rounded w-3/4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          className="p-2 bg-purple-600 text-white rounded"
          onClick={() => setShowNewTaskModal(true)}
        >
          + Create Task
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="p-3 border">Sl</th>
              <th className="p-3 border">Summary</th>
              <th className="p-3 border">Sprint Name</th>
              <th className="p-3 border">Project Name</th>
              <th className="p-3 border">Project Lead</th>
              <th className="p-3 border">Team Member</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Priority</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Created By</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedTasks.map((task) => (
              <tr key={task.id} className="cursor-pointer hover:bg-gray-50 text-center">
                <td className="p-3 border">{task.id}</td>
                <td className="p-3 border">{task.summary}</td>
                <td className="p-3 border">{task.sprintName}</td>
                <td className="p-3 border">{task.projectName}</td>
                <td className="p-3 border">{task.projectLead}</td>
                <td className="p-3 border">{task.teamMember}</td>
                <td className="p-3 border">{task.status}</td>
                <td className="p-3 border">{task.priority}</td>
                <td className="p-3 border">{task.date}</td>
                <td className="p-3 border">{task.createdBy}</td>
                <td className="p-3 border">
                  <button
                    className="text-blue-500 hover:underline mr-2"
                  >
                    <FaEdit /> {/* Edit icon */}
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                  >
                    <FaTrashAlt /> {/* Trash icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* New Task Modal */}
      {showNewTaskModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-sm font-bold mb-4 text-purple-600">Create Task</h2>
            <input
              type="text"
              placeholder="Summary"
              className="w-full p-2 border mb-2"
              value={newTask.summary}
              onChange={(e) => setNewTask({ ...newTask, summary: e.target.value })}
            />
            <input
              type="text"
              placeholder="Sprint"
              className="w-full p-2 border mb-2"
              value={newTask.sprintName}
              onChange={(e) => setNewTask({ ...newTask, sprintName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Project Name"
              className="w-full p-2 border mb-2"
              value={newTask.projectName}
              onChange={(e) => setNewTask({ ...newTask, projectName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Team Member"
              className="w-full p-2 border mb-2"
              value={newTask.teamMember}
              onChange={(e) => setNewTask({ ...newTask, teamMember: e.target.value })}
            />
            <input
              type="date"
              className="w-full p-2 border mb-2"
              value={newTask.date}
              onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
            />
            <select
              value={newTask.status}
              onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
              className="w-full p-2 border mb-2"
            >
              <option value="To do">To do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <select
              value={newTask.priority}
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
              className="w-full p-2 border mb-2"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <div className="mt-4">
              <button
                className="mr-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                onClick={handleAddTask}
              >
                Save
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                onClick={() => setShowNewTaskModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

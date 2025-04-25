// quickActionsData.js
import {
  FiFolderPlus,
  FiFileText,
  FiUploadCloud,
  FiBriefcase,
} from "react-icons/fi";

export const quickActions = [
  {
    id: 1,
    label: "New Project",
    icon: FiFolderPlus,
    color: "text-blue-500",
  },
  {
    id: 2,
    label: "Create Invoice",
    icon: FiFileText,
    color: "text-green-500",
  },
  {
    id: 3,
    label: "Upload Proposal",
    icon: FiUploadCloud,
    color: "text-purple-500",
  },
  {
    id: 4,
    label: "View Portfolio",
    icon: FiBriefcase,
    color: "text-yellow-500",
  },
];

const QuickActions2 = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="font-bold mb-4 text-2xl">Quick Actions</div>
      <div className="flex flex-col">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <div
              key={action.id}
              className="flex items-center justify-between hover:bg-gray-200 p-2 rounded transition cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-gray-200 p-2 rounded-lg">
                  <Icon className={`text-2xl ${action.color}`} />
                </div>
                <span className="text-xl font-medium">{action.label}</span>
              </div>

              <div className="text-xl text-gray-500">4 hours</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions2;

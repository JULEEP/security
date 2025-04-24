import React from "react";

const people = [
    { name: "Jacob Rawlings", status: "Online", message: "We’re sending up statisic's your stratic-site.", time: "Online", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Julia Martins", status: "Interest frice", message: "Take a daveboard feedbackback.", time: "1 ha", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Marcus Watts", status: "Illustration", message: "Hi, I’m glad you’re done motion completed.", time: "39 mo", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
    { name: "Melinda Wilson", status: "Meeting schedule", message: "Meeting scheduled for a new milestorle", time: "19 jun", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Startup Logo", status: "Pending milestone", message: "Hending milestone today", time: "26 jun", avatar: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
    { name: "Thomas D.", status: "Hourly report", message: "Send an hourly report", time: "11 Jul", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
  ];
  

const Dashboard = () => {
  return (
    <div className="flex-1 bg-white p-6 rounded-l-2xl">
      {/* Top Tabs */}
      <div className="flex space-x-8  border-b mb-6">
      <button className="border-b-2 border-transparent pb-2 hover:text-blue-900 hover:font-semibold hover:border-blue-900">
  My Projects
</button>
<button className="border-b-2 border-transparent pb-2 hover:text-blue-900 hover:font-semibold hover:border-blue-900">
  Invoices
</button>
<button className="border-b-2 border-transparent pb-2 hover:text-blue-900 hover:font-semibold hover:border-blue-900">
  Settings
</button>
      </div>

      {/* Messages List */}
      <div className="space-y-2">
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
  );
};

export default Dashboard;

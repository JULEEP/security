import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";


export default function ProposalsPage() {
  const [Search, setSearch] = useState("");
  const proposals = [
    {
      proposal: "Website Redesign Proposal",
      client: "Alpha Corp",
      status: "Sent",
      amount: "$1,200",
      date: "Apr 10, 2025",
      actions: ["View", "Duplicate"],
    },
    {
      proposal: "SEO Plan Q2",
      client: "Zeta LLC",
      status: "Approved",
      amount: "$950",
      date: "Mar 28, 2025",
      actions: ["View"],
    },
    {
      proposal: "Logo Design Draft",
      client: "Beta Inc.",
      status: "Draft",
      amount: "$300",
      date: "Apr 2025",
      actions: ["Edit", "Delete"],
    },
    {
      proposal: "Marketing Strategy",
      client: "Delta Co.",
      status: "Viewed",
      amount: "$2,400",
      date: "Mar 5, 2025",
      actions: ["View", "Duplicate"],
    },
    {
      proposal: "Brochure Redesign",
      client: "Gamma Ltd.",
      status: "Rejected",
      amount: "$450",
      date: "Feb 20, 2025",
      actions: ["View"],
    },
  ];


  const statusColors = {
    Sent: "bg-blue-100 text-blue-700",
    Approved: "bg-green-100 text-green-700",
    Draft: "bg-yellow-100 text-yellow-800",
    Viewed: "bg-purple-100 text-purple-700",
    Rejected: "bg-red-100 text-red-700",
  };


  return (
    <div className=" flex flex-col">
      <div className="p-6">
        <div className="flex justify-between">
          <h2 className=" text-2xl font-semibold">Proposals</h2>
          <div className="flex justify-end mb-4 w-full max-w-6xl">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-semibold">
              + New Proposal
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="relative w-3/5">
            <input
              type="text"
              placeholder="Search Proposals"
              value={Search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="border w-full px-8 py-2 rounded-md focus:outline-none focus:ring-0 "
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>


          <select className="border w-auto md:w-1/5  px-3 py-2 rounded-md focus:outline-none focus:ring-0">
            <option>Status</option>
          </select>
          <select className="border w-2/5 px-3 py-2 rounded-md focus:outline-none focus:ring-0">
            <option>Client</option>
          </select>
        </div>
      </div>


      <table className="w-full text-left">
        <div></div>
        <thead className="ml-11">
          <tr className="border-b bg-gray-50 h-12">
            <th className="py-2 px-0 sm:px-12 ">Proposals</th>
            <th className="py-2">Client</th>
            <th className="py-2">Status</th>
            <th className="py-2">Amount</th>
            <th className="py-2">SentDate</th>
            <th className="py-2">Last Activity</th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((proposals, index) => (
            <tr key={index} className="border-b">
              <td className="p-2 px-0 sm:px-12">
                <input type="checkbox" className="mr-2" />
                {proposals.proposal}
              </td>
              <td className="py-3">{proposals.client}</td>
              <td className="p-2">
                <span
                  className={`px-3 py-2 rounded-none text-xs font-medium ${
                    statusColors[proposals.status]
                  }`}
                >
                  {proposals.status}
                </span>
              </td>
              <td className="py-3">{proposals.amount}</td>
              <td className="py-3">{proposals.date}</td>
              <td className="p-2 sm:space-x-2 md:space-x-2 space-x-0 ">
                {proposals.actions.map((action, idx) => (
                  <button
                    key={idx}
                    className={`text-sm sm:space-x-2 ${
                      action === "Delete" || action === "Edit"
                        ? "text-red-600"
                        : action === "Edit"
                        ? "text-gray-700"
                        : "text-blue-600"
                    } hover:underline`}
                  >
                    {action}
                  </button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



import React, { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";

const Proposals = () => {
  const [search, setSearch] = useState("");

  const proposals = [
    {
      id: 1,
      title: "Website Redesign Proposal",
      client: "Alpha Corp",
      status: "Sent",
      amount: "$1,200",
      sentDate: "Apr 10, 2025",
      actions: ["View", "Duplicate"],
    },
    {
      id: 2,
      title: "SEO Plan Q2",
      client: "Zeta LLC",
      status: "Approved",
      amount: "$950",
      sentDate: "Mar 28, 2025",
      actions: ["View"],
    },
    {
      id: 3,
      title: "Logo Design Draft",
      client: "Beta Inc.",
      status: "Draft",
      amount: "$300",
      sentDate: "Apr 2025",
      actions: ["Edit", "Delete"],
    },
    {
      id: 4,
      title: "Marketing Strategy",
      client: "Delta Co.",
      status: "Viewed",
      amount: "$2,400",
      sentDate: "Mar 5, 2025",
      actions: ["View", "Duplicate"],
    },
    {
      id: 5,
      title: "Brochure Redesign",
      client: "Gamma Ltd.",
      status: "Rejected",
      amount: "$450",
      sentDate: "Feb 20, 2025",
      actions: ["View"],
    },
  ];

  const filteredProposals = proposals.filter((proposal) =>
    proposal.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Proposals</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          <FaPlus /> New Proposal
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaSearch />
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search proposals"
            className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Status Dropdown */}
        <select className="border px-4 py-2 rounded-md">
          <option>Status</option>
          <option>Sent</option>
          <option>Approved</option>
          <option>Draft</option>
          <option>Viewed</option>
          <option>Rejected</option>
        </select>

        {/* Client Dropdown */}
        <select className="border px-4 py-2 rounded-md">
          <option>Client</option>
          <option>Alpha Corp</option>
          <option>Zeta LLC</option>
          <option>Beta Inc.</option>
          <option>Delta Co.</option>
          <option>Gamma Ltd.</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold">
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3">Proposal</th>
              <th className="p-3">Client</th>
              <th className="p-3">Status</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Sent Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProposals.map((proposal) => (
              <tr
                key={proposal.id}
                className="border-t hover:bg-gray-50 text-sm"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3">{proposal.title}</td>
                <td className="p-3">{proposal.client}</td>
                <td className="p-3">{proposal.status}</td>
                <td className="p-3">{proposal.amount}</td>
                <td className="p-3">{proposal.sentDate}</td>
                <td className="p-3 space-x-3">
                  {proposal.actions.map((action, index) => (
                    <button
                      key={index}
                      className={`${
                        action === "Delete"
                          ? "text-red-600"
                          : action === "Edit"
                          ? "text-orange-600"
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
    </div>
  );
};

export default Proposals;

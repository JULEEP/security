import React, { useState } from "react";
import { FaSearch, FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import ClientList from "./ClientList";

export default function ProposalsList() {
  const [editProposalIndex, setEditProposalIndex] = useState(null);
  const [editProposalData, setEditProposalData] = useState(null);
  const [search, setSearch] = useState("");
  const [proposals, setProposals] = useState([
    {
      proposal: "Proposal 1",
      client: "Amazon",
      status: "Pending",
      amount: 5000,
      sentDate: "2025-04-01",
    },
    {
      proposal: "Proposal 2",
      client: "Flipkart",
      status: "Sent",
      amount: 3000,
      sentDate: "2025-04-05",
    },
    {
      proposal: "Proposal 3",
      client: "Google",
      status: "Accepted",
      amount: 7000,
      sentDate: "2025-04-10",
    },
  ]);

  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [viewProposal, setViewProposal] = useState(null);

  const handleAddProposal = (newProposal) => {
    if (
      newProposal.proposal &&
      newProposal.client &&
      newProposal.status &&
      newProposal.amount &&
      newProposal.sentDate
    ) {
      if (editProposalIndex !== null) {
        const updatedProposals = [...proposals];
        updatedProposals[editProposalIndex] = newProposal;
        setProposals(updatedProposals);
        setEditProposalIndex(null);
        setEditProposalData(null);
      } else {
        setProposals([...proposals, newProposal]);
      }
      setIsClientModalOpen(false);
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this proposal?")) {
      setProposals(proposals.filter((_, i) => i !== index));
    }
  };

  const statusColors = {
    Sent: "bg-blue-100 text-blue-700",
    Accepted: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-800",
    Viewed: "bg-purple-100 text-purple-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="flex flex-col p-6">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Proposals</h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-semibold flex items-center"
          onClick={() => setIsClientModalOpen(true)}
        >
          <FaPlus className="mr-2" /> Add Proposal
        </button>
      </div>

      <div className="flex gap-2 mt-4">
        <div className="relative w-3/5">
          <input
            type="text"
            placeholder="Search Proposals"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border w-full px-8 py-2 rounded-md"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <select className="border px-3 py-2 rounded-md">
          <option>Status</option>
        </select>
        <select className="border px-3 py-2 rounded-md">
          <option>Client</option>
        </select>
      </div>

      <table className="w-full mt-6 text-left">
        <thead>
          <tr className="border-b bg-gray-50 h-12">
            <th className="py-2 px-4">Proposals</th>
            <th className="py-2">Client</th>
            <th className="py-2">Status</th>
            <th className="py-2">Amount</th>
            <th className="py-2">SentDate</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((proposal, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{proposal.proposal}</td>
              <td>{proposal.client}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded text-xs font-medium ${
                    statusColors[proposal.status]
                  }`}
                >
                  {proposal.status}
                </span>
              </td>
              <td>{proposal.amount}</td>
              <td>{proposal.sentDate}</td>
              <td className="flex gap-3 py-3">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEye />
                </button>
                <button className="text-green-500 hover:text-green-700">
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isClientModalOpen && (
        <ClientList
          isClientModalOpen={isClientModalOpen}
          setIsClientModalOpen={setIsClientModalOpen}
          handleAddProposal={handleAddProposal}
        />
      )}
    </div>
  );
}

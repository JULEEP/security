import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const ProposalList = () => {
  const [proposals, setProposals] = useState([
    { proposal: "Proposal 1", client: "Amazon", status: "Pending", amount: 5000, sentDate: "2025-04-01" },
    { proposal: "Proposal 2", client: "Flipkart", status: "Sent", amount: 3000, sentDate: "2025-04-05" },
    { proposal: "Proposal 3", client: "Google", status: "Accepted", amount: 7000, sentDate: "2025-04-10" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProposal, setNewProposal] = useState({
    proposal: "",
    client: "",
    status: "",
    amount: "",
    sentDate: "",
  });

  const handleInputChange = (e) => {
    setNewProposal({ ...newProposal, [e.target.name]: e.target.value });
  };

  const handleAddProposal = () => {
    if (newProposal.proposal && newProposal.client && newProposal.status && newProposal.amount && newProposal.sentDate) {
      setProposals([...proposals, newProposal]);
      setNewProposal({ proposal: "", client: "", status: "", amount: "", sentDate: "" });
      setIsModalOpen(false);
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Proposals</h2>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus /> Add Proposal
        </button>
      </div>

      {/* Proposal Table */}
      <div className="overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border text-left">Proposal</th>
              <th className="p-3 border text-left">Client</th>
              <th className="p-3 border text-left">Status</th>
              <th className="p-3 border text-left">Amount</th>
              <th className="p-3 border text-left">Sent Date</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((proposal, index) => (
              <tr key={index} className="hover:bg-gray-100 border-b">
                <td className="p-3 border">{proposal.proposal}</td>
                <td className="p-3 border">{proposal.client}</td>
                <td className="p-3 border">{proposal.status}</td>
                <td className="p-3 border">${proposal.amount}</td>
                <td className="p-3 border">{proposal.sentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Proposal Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-[500px] relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-xl font-bold mb-6 text-center">Add New Proposal</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="proposal"
                placeholder="Proposal Name"
                value={newProposal.proposal}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="text"
                name="client"
                placeholder="Client Name"
                value={newProposal.client}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={newProposal.amount}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <input
                type="date"
                name="sentDate"
                value={newProposal.sentDate}
                onChange={handleInputChange}
                className="p-3 border rounded"
              />
              <select
                name="status"
                value={newProposal.status}
                onChange={handleInputChange}
                className="p-3 border rounded col-span-2"
              >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="Sent">Sent</option>
                <option value="Accepted">Accepted</option>
              </select>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProposal}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProposalList;

import React, { useEffect, useState } from "react";
import { FaSearch, FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import ClientList from "./ClientList";

export default function ProposalsList() {
  const [editProposalIndex, setEditProposalIndex] = useState(null);
  const [editProposalData, setEditProposalData] = useState(null);
  const [search, setSearch] = useState("");
  const [proposals, setProposals] = useState([]);

  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [viewProposal, setViewProposal] = useState(null);

  useEffect(() => {
    const freelancerId = localStorage.getItem("freelancerId");
    if (!freelancerId) {
      console.warn("freelancerId is not in localstorage");
    }
    const fetchProposals = async () => {
      const res = await fetch(
        `https://new-securebackend.onrender.com/api/freelancers/allproposals/${freelancerId}`
      );
      const data = await res.json();
      setProposals(data);
    };
    fetchProposals();
  }, []);

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

      <div className="w-full mt-6 overflow-y-auto max-h-[400px] border rounded-md">
        <table className="w-full text-left table-auto">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr className="border-b h-12">
              <th className="py-2 px-4">Proposals</th>
              <th className="py-2 px-4">Client</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Sent Date</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((proposal, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{proposal.title}</td>
                <td className="py-2 px-4">{proposal.client.name}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-3 py-1 rounded text-xs font-medium ${
                      statusColors[proposal.status]
                    }`}
                  >
                    {proposal.status}
                  </span>
                </td>
                <td className="py-2 px-4">{proposal.total}</td>
                <td className="py-2 px-4">{proposal.timeline.start.split("T")[0]}</td>
                <td className="py-2 px-4 flex gap-3">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => setViewProposal(proposal)}
                  >
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
      </div>

      {isClientModalOpen && (
        <ClientList
          isClientModalOpen={isClientModalOpen}
          setIsClientModalOpen={setIsClientModalOpen}
          handleAddProposal={handleAddProposal}
        />
      )}
      {viewProposal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center py-4">
          <div className="relative max-h-[90vh] w-full max-w-5xl  bg-white rounded-2xl shadow-lg border border-gray-200 font-inter pb-6">
            {/* Close Button */}
            <button
              onClick={() => setViewProposal(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-2xl font-bold"
            >
              ✕
            </button>

            <div className="p-10">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {viewProposal.title}
                  </h1>
                  <button className="bg-gray-200 text-gray-800 text-sm font-medium px-2 py-1 rounded-full">
                    {viewProposal.status}
                  </button>
                  <p className="text-sm text-gray-800">
                    Client: {viewProposal.client?.name} •{" "}
                    {new Date(viewProposal.createdAt).toDateString()}
                  </p>
                </div>
              </div>


              {/* Main Content */}
              <div className="flex flex-col md:flex-row justify-between mt-6">
                {/* Left Column */}
                <div className="space-y-6 border-r border-gray-200 pr-8 md:w-1/2">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <img
                        src="https://i.pravatar.cc/40?img=40"
                        alt="Client"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="px-4">
                        <p className="text-xl font-bold text-gray-800">
                          {viewProposal.client?.name}
                        </p>
                        <p className="text-lg text-gray-700">
                          {viewProposal.client?.company}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-800">
                        {viewProposal.client?.email}
                      </p>
                      <p className="text-sm text-gray-800">
                        {viewProposal.client?.phone}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      Overview
                    </h2>
                    <p className="text-sm text-gray-700">
                      {viewProposal.overview}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      Scope of Work
                    </h2>
                    <ul className="list-disc text-sm text-gray-700 space-y-1 ml-4">
                      {viewProposal.scopeOfWork?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6 pl-0 md:pl-10 md:w-1/2 mt-6 md:mt-0">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      Timeline
                    </h2>
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-700">Start Date:</p>
                      <p className="text-sm">
                        {viewProposal.timeline?.start?.split("T")[0]}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-700">End Date:</p>
                      <p className="text-sm">
                        {viewProposal.timeline?.end?.split("T")[0]}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      Total
                    </h2>
                    <p className="text-2xl font-bold text-gray-900">
                      ₹{viewProposal.total}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      Terms & Conditions
                    </h2>
                    <ul className="list-disc text-sm text-gray-700 space-y-1 ml-4">
                      {viewProposal.termsAndConditions?.map((term, idx) => (
                        <li key={idx}>{term}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

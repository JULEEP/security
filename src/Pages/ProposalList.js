import React from "react";
import { useState } from "react";
import { FaSearch, FaPlus, FaTimes,FaEye,FaEdit,FaTrash } from "react-icons/fa";
import ProposalModal from "./Editproposal";

export default function ProposalsList() {
  const [editProposalIndex, setEditProposalIndex] = useState(null);
  const [editProposalData, setEditProposalData] = useState(null);
  const [Search, setSearch] = useState("");
  const [proposals, setProposals] = useState([
    {
      proposal: "Proposal 1",
      client: "Amazon",
      status: "Pending",
      amount: 5000,
      sentDate: "2025-04-01",
      actions: ["View", "Edit", "Delete"],
    },
    {
      proposal: "Proposal 2",
      client: "Flipkart",
      status: "Sent",
      amount: 3000,
      sentDate: "2025-04-05",
      actions: ["View", "Edit", "Delete"],
    },
    {
      proposal: "Proposal 3",
      client: "Google",
      status: "Accepted",
      amount: 7000,
      sentDate: "2025-04-10",
      actions: ["View", "Edit", "Delete"],
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProposal, setNewProposal] = useState({
    proposal: "",
    client: "",
    status: "",
    amount: "",
    sentDate: "",
  });
  const [viewProposal, setViewProposal] = useState(null);

  // const handleInputChange = (e) => {
  //   setNewProposal({ ...newProposal, [e.target.name]: e.target.value });
  // };

  const handleAddProposal = (newProposal) => {
    if (
      newProposal.proposal &&
      newProposal.client &&
      newProposal.status &&
      newProposal.amount &&
      newProposal.sentDate
    ) {
      if (editProposalIndex !== null) {
        // Editing existing proposal
        const updatedProposals = [...proposals];
        updatedProposals[editProposalIndex] = newProposal;
        setProposals(updatedProposals);
        setEditProposalIndex(null);
        setEditProposalData(null);
      } else {
        // Adding new proposal
        setProposals([...proposals, newProposal]);
      }
      setNewProposal({
        proposal: "",
        client: "",
        status: "",
        amount: "",
        sentDate: "",
      });
      setIsModalOpen(false);
    } else {
      alert("Please fill all fields!");
    }
  };
  const handleView = (Proposals) => {
    setViewProposal(Proposals);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this proposal?")) {
      setProposals(proposals.filter((_, i) => i !== index));
      // if the deleted proposal is currently being viewed or edited, close those
      if (viewProposal && proposals[index] === viewProposal) {
        setViewProposal(null);
      }
      if (editProposalIndex === index) {
        setIsModalOpen(false);
        setEditProposalIndex(null);
        setEditProposalData(null);
      }
    }
  };
  const handleEdit = (index) => {
    setEditProposalIndex(index);
    setEditProposalData(proposals[index]);
    setIsModalOpen(true);
  };

  const statusColors = {
    Sent: "bg-blue-100 text-blue-700",
    Accepted: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-800",
    Viewed: "bg-purple-100 text-purple-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className=" flex flex-col">
      <div className="p-6">
        <div className="flex justify-between">
          <h2 className=" text-2xl font-semibold">Proposals</h2>
          <div className="flex justify-end mb-4 w-full max-w-6xl">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-semibold flex items-center"
              onClick={() => setIsModalOpen(true)}
            >
              <FaPlus /> Add Proposal
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
          {proposals.map((proposal, index) => (
            <tr key={index} className="border-b">
              <td className="p-2 px-0 sm:px-12">
                <input type="checkbox" className="mr-2" />
                {proposal.proposal}
              </td>
              <td className="py-3">{proposal.client}</td>
              <td className="p-2">
                <span
                  className={`px-3 py-2 rounded-none text-xs font-medium ${
                    statusColors[proposal.status]
                  }`}
                >
                  {proposal.status}
                </span>
              </td>
              <td className="py-3">{proposal.amount}</td>
              <td className="py-3">{proposal.sentDate}</td>
              <td className="p-3 border flex gap-3">
                  <button
                    onClick={() => handleView(proposal)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-green-500 hover:text-green-700"
                  >
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
      {/* Add Proposal Modal */}
      {isModalOpen && (
        <ProposalModal setIsModalOpen={setIsModalOpen} handleAddProposal={handleAddProposal}/>
      )}

      
      
      
      {viewProposal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative max-w-4xl w-full bg-white shadow-xl rounded-xl font-inter h-[90vh] overflow-y-auto pb-8">
          <button
            onClick={() => setViewProposal(null)}
            className="absolute right-2 top-0 text-gray-600 hover:text-black text-2xl z-50 mr-2"
          >
            x
          </button>
            {/* Header */}
            <div className="flex justify-between items-start p-10">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold text-gray-900">
                  {viewProposal?.proposal}
                </h1>
                <button className="bg-gray-200 text-gray-800 text-sm font-medium px-2 py-1 rounded-full">
                  {viewProposal?.status}
                </button>
                <p className="text-sm text-gray-800">
                  Client: {viewProposal?.client} • {viewProposal?.sentDate}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 border-y border-gray-200 py-3 px-6 font-semibold">
              <button className="px-4 py-2 text-lg  text-gray-800 ">
                Client Information
              </button>
              <button className="px-4 py-2 text-lg  text-gray-800 ">
                Edit
              </button>
              <button className="px-4 py-2  text-lg  text-gray-800 ">
                Download PDF
              </button>
              <button className="px-4 py-2 text-gray-800 rounded-md text-lg">
                Send to Client
              </button>
            </div>

            <div className="flex justify-between px-10">
              {/* Left Column */}
              <div className="md:col-span-1 space-y-6 border-r border-gray-200 pr-8 w-[50%] pt-6">
                <div className="items-center space-y-3">
                  <div className="flex items-center">
                    <img
                      src="https://i.pravatar.cc/40?img=40"
                      alt="Sarah Johnson"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="px-4">
                      <p className="text-xl font-bold text-gray-800">
                        Sarah Johnson
                      </p>
                      <p className="text-lg text-gray-700">Alpha Corp</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-800">
                      sjohnson@example.com
                    </p>
                    <p className="text-sm text-gray-800">(123) 456-7890</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Overview
                  </h2>
                  <p className="text-sm text-gray-700">
                    Hi Sarah, I’ve put together a proposal for the redesign of
                    your company’s website for your consideration.
                  </p>
                </div>
                <div className="md:col-span-1">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Scope of Work
                  </h2>
                  <ul className="list-disc text-sm text-gray-700 space-y-1 ml-4">
                    <li>Develop a new homepage design and layout</li>
                    <li>Refresh branding elements and color scheme</li>
                    <li>Improve site navigation and user experience</li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:col-span-1 space-y-4 pl-10 w-[50%] pt-6">
                <div className="md:col-span-1">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Scope of Work
                  </h2>
                  <ul className="list-disc text-sm text-gray-700 space-y-1 ml-4">
                    <li>Develop a new homepage design and layout</li>
                    <li>Refresh branding elements and color scheme</li>
                    <li>Improve site navigation and user experience</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Timeline
                  </h2>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-700">Start Date:</p>
                    <p className="text-sm">$750.00</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-sm text-gray-700">End Date: </p>
                    <p className="text-sm">Jun 30, 2025</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Total
                  </h2>
                  <p className="text-2xl font-bold text-gray-900">$3,750.00</p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Terms & Conditions
                  </h2>
                  <ul className="list-disc text-sm text-gray-700 space-y-1 ml-4">
                    <li>A 50% deposit is required to begin work</li>
                    <li>
                      The remaining balance is due upon project completion
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="mt-8 flex justify-center gap-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                Accept
              </button>
              <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100">
                Request Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

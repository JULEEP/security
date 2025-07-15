import React, { useEffect, useState } from "react";
import ProposalModal from "./getSingleProposal"; 
import { FaEye } from "react-icons/fa";

const ClientProposals = () => {
  const [clientId, setClientId] = useState("");
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProposal, setSelectedProposal] = useState(null);

  useEffect(() => {
    const storedClientId = localStorage.getItem("clientId");
    setClientId(storedClientId || "");
  }, []);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const response = await fetch(
          `https://new-securebackend.onrender.com/api/client/getallproposal/${clientId}`
        );
        if (!response.ok) throw new Error("Failed to fetch proposals");

        const data = await response.json();
        setProposals(data.data || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (clientId) {
      fetchProposals();
    }
  }, [clientId]);

  const handleStatusChange = async (proposalId, newStatus) => {
    try {
      const response = await fetch(
        `https://new-securebackend.onrender.com/api/client/update-proposal/${clientId}/${proposalId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      if (!response.ok) throw new Error("Failed to update status");

      setProposals((prev) =>
        prev.map((p) =>
          p._id === proposalId ? { ...p, status: newStatus } : p
        )
      );
    } catch (err) {
      alert("Error updating status: " + err.message);
    }
  };

  if (loading) return <p>Loading proposals...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 h-full">
      <h2 className="text-2xl font-bold mb-4">Proposals Table</h2>
      {proposals.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Freelancer</th>
                <th className="px-4 py-2 border">Company</th>
                {/* <th className="px-4 py-2 border">Email</th> */}
                {/* <th className="px-4 py-2 border">Phone</th> */}
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Start</th>
                <th className="px-4 py-2 border">End</th>
                <th className="px-4 py-2 border">Total ($)</th>
                <th className="px-4 py-2 border">View</th>
              </tr>
            </thead>
            <tbody>
              {proposals.map((proposal, index) => (
                <tr key={proposal._id} className="text-center hover:bg-gray-50">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{proposal.client?.name}</td>
                  <td className="px-4 py-2 border">{proposal.client?.company}</td>
                  
                  {/* <td className="px-4 py-2 border">{proposal.client?.phone}</td> */}
                  <td className="px-4 py-2 border">{proposal.title}</td>
                  <td className="px-4 py-2 border">
                    <select
                      value={proposal.status}
                      onChange={(e) => handleStatusChange(proposal._id, e.target.value)}
                      className="border px-2 py-1 rounded"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                  <td className="px-4 py-2 border">
                    {proposal.timeline?.start?.slice(0, 10)}
                  </td>
                  <td className="px-4 py-2 border">
                    {proposal.timeline?.end?.slice(0, 10)}
                  </td>
                  <td className="px-4 py-2 border">{proposal.total}</td>
                  <td className="px-4 py-2 border text-center">
                    <button onClick={() => setSelectedProposal(proposal)}>
                      <FaEye className="text-blue-600 hover:text-blue-800 cursor-pointer" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {selectedProposal && (
            <ProposalModal
              proposal={selectedProposal}
              onClose={() => setSelectedProposal(null)}
            />
          )}
        </div>
      ) : (
        <p>No proposals found.</p>
      )}
    </div>
  );
};

export default ClientProposals;

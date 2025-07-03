import React, { useEffect, useState } from "react";

const ClientProposals = () => {
  const [clientId, setClientId] = useState("");
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

        if (!response.ok) {
          throw new Error("Failed to fetch proposals");
        }

        const data = await response.json();
        setProposals(data.data || []); // ← 'data' key holds array
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

  if (loading) return <p>Loading proposals...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Proposals Table</h2>
      {proposals.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Client Name</th>
                <th className="px-4 py-2 border">Company</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Start</th>
                <th className="px-4 py-2 border">End</th>
                <th className="px-4 py-2 border">Total ($)</th>
              </tr>
            </thead>
            <tbody>
              {proposals.map((proposal, index) => (
                <tr key={proposal._id} className="text-center hover:bg-gray-50">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{proposal.client?.name}</td>
                  <td className="px-4 py-2 border">{proposal.client?.company}</td>
                  <td className="px-4 py-2 border">{proposal.client?.email}</td>
                  <td className="px-4 py-2 border">{proposal.client?.phone}</td>
                  <td className="px-4 py-2 border">{proposal.title}</td>
                  <td className="px-4 py-2 border">{proposal.status}</td>
                  <td className="px-4 py-2 border">
                    {proposal.timeline?.start?.slice(0, 10)}
                  </td>
                  <td className="px-4 py-2 border">
                    {proposal.timeline?.end?.slice(0, 10)}
                  </td>
                  <td className="px-4 py-2 border">{proposal.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No proposals found.</p>
      )}
    </div>
  );
};

export default ClientProposals;

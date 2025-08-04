import React from "react";
import { useEffect,useState } from "react";
export default function UpdateProposalModal({
  setIsModalOpen,
  proposal,
  handleUpdateProposal,
}) {
  const [editMode, setEditMode] = useState(true); // Always editable for update

  const [proposalTitle, setProposalTitle] = useState("");
  const [proposalStatus, setProposalStatus] = useState("Pending");
  const [overview, setOverview] = useState("");
  const [scopeOfWork, setScopeOfWork] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [total, setTotal] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    if (proposal) {
      setProposalTitle(proposal.title || "");
      setProposalStatus(proposal.status || "Pending");
      setOverview(proposal.overview || "");
      setScopeOfWork(proposal.scopeOfWork || []);
      setStartDate(proposal.timeline?.start?.split("T")[0] || "");
      setEndDate(proposal.timeline?.end?.split("T")[0] || "");
      setTotal(proposal.total || "");

      const c = proposal.client || {};
      setClientName(c.name || "");
      setClientCompany(c.company || "");
      setClientEmail(c.email || "");
      setClientPhone(c.phone || "");

      setTerms(proposal.termsAndConditions || []);
    }
  }, [proposal]);

  const handleScopeChange = (value, index) => {
    const updated = [...scopeOfWork];
    updated[index] = value;
    setScopeOfWork(updated);
  };

  const handleTermChange = (value, index) => {
    const updated = [...terms];
    updated[index] = value;
    setTerms(updated);
  };

  const handleUpdate = async () => {
    const freelancerId = localStorage.getItem("freelancerId");
    if (!freelancerId || !proposal?._id) return;

    const payload = {
      title: proposalTitle,
      status: proposalStatus,
      client: {
        name: clientName,
        company: clientCompany,
        email: clientEmail,
        phone: clientPhone,
        date: proposal.client?.date || new Date().toISOString().split("T")[0],
      },
      overview,
      scopeOfWork,
      timeline: {
        start: startDate,
        end: endDate,
      },
      total: parseFloat(total),
      termsAndConditions: terms,
    };

    try {
      const res = await fetch(
        `https://freelance-management-frontend.onrender.com/api/freelancers/updateproposal/${freelancerId}/${proposal._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      if (res.ok) {
        alert("Proposal updated!");
        handleUpdateProposal(data);
        setIsModalOpen(false);
       

      } else {
        console.error("Update failed:", data);
        alert("Failed to update proposal.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-w-4xl w-full bg-white shadow-xl rounded-xl font-inter h-[90vh] overflow-y-auto pb-8">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute right-2 top-2 text-gray-600 hover:text-black text-2xl z-50 mr-2"
        >
          ×
        </button>

        <div className="flex justify-between items-start p-10">
          <div className="space-y-3">
            <input
              value={proposalTitle}
              onChange={(e) => setProposalTitle(e.target.value)}
              className="text-3xl font-bold text-gray-900 w-full border rounded p-1"
            />
            <input
              value={proposalStatus}
              onChange={(e) => setProposalStatus(e.target.value)}
              className="bg-gray-200 text-gray-800 text-sm font-medium px-2 py-1 rounded-full"
            />
            <p className="text-sm text-gray-800">Client: {clientCompany}</p>
          </div>
        </div>

        <div className="flex justify-between px-10">
          {/* Left */}
          <div className="space-y-6 border-r border-gray-200 pr-8 w-[50%] pt-6">
            <div className="items-center space-y-3">
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/40?img=40"
                  alt="Client"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="px-4 space-y-1">
                  <input
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="text-xl font-bold text-gray-800 w-full border p-1 rounded"
                  />
                  <input
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                    className="text-lg text-gray-700 w-full border p-1 rounded"
                  />
                </div>
              </div>
              <input
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="text-sm text-gray-800 w-full border p-1 rounded"
              />
              <input
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="text-sm text-gray-800 w-full border p-1 rounded mt-1"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Overview</h2>
              <textarea
                value={overview}
                onChange={(e) => setOverview(e.target.value)}
                className="w-full text-sm border p-2 rounded"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Scope of Work</h2>
              <ul className="list-disc text-sm text-gray-700 space-y-1 ml-4">
                {scopeOfWork.map((item, i) => (
                  <li key={i}>
                    <input
                      value={item}
                      onChange={(e) => handleScopeChange(e.target.value, i)}
                      className="w-full text-sm border p-1 rounded"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4 pl-10 w-[50%] pt-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Timeline</h2>
              <div className="flex justify-between">
                <span className="text-sm text-gray-700">Start Date:</span>
                <input
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="text-sm border p-1 rounded"
                />
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-700">End Date:</span>
                <input
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="text-sm border p-1 rounded"
                />
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Total</h2>
              <input
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                className="text-2xl font-bold border p-1 rounded w-[120px]"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Terms & Conditions</h2>
              <ul className="list-disc text-sm text-gray-700 space-y-1 ml-4">
                {terms.map((term, index) => (
                  <li key={index}>
                    <input
                      value={term}
                      onChange={(e) => handleTermChange(e.target.value, index)}
                      className="w-full text-sm border p-1 rounded"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={handleUpdate}
            className="px-6 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700"
          >
            Update
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
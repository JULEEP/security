import { useState, useEffect } from 'react';
import { API_URL } from '../../../config';

export default function ProposalModal({
  setIsModalOpen,
  handleAddProposal,
  client,
  clientId,
}) {
  const [editMode, setEditMode] = useState(false);

  const [proposalTitle, setProposalTitle] = useState("Website Redesign Proposal");
  const [proposalStatus, setProposalStatus] = useState("Pending");
  const [overview, setOverview] = useState(
    "Hi Sarah, I’ve put together a proposal for the redesign of your company’s website for your consideration."
  );
  const [scopeOfWork, setScopeOfWork] = useState([
    "Develop a new homepage design and layout",
    "Refresh branding elements and color scheme",
    "Improve site navigation and user experience",
  ]);
  const [startDate, setStartDate] = useState("2025-06-01");
  const [endDate, setEndDate] = useState("2025-06-30");
  const [total, setTotal] = useState("3750.00");
  const [clientName, setClientName] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [terms, setTerms] = useState([
    "A 50% deposit is required to begin work",
    "The remaining balance is due upon project completion",
  ]);

  // Populate client info when modal opens
  useEffect(() => {
    if (client) {
      setClientName(client.name || "");
      setClientCompany(client.company || "");
      setClientEmail(client.email || "");
      setClientPhone(client.phone || "");
    }
  }, [client]);

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

  const handleSave = () => {
    setEditMode(false);
  };

  const handleSend = async () => {
    const freelancerId = localStorage.getItem("freelancerId");

    if (
      !freelancerId ||
      !clientId ||
      !proposalTitle.trim() ||
      !proposalStatus.trim() ||
      !overview.trim() ||
      scopeOfWork.length === 0 ||
      !startDate.trim() ||
      !endDate.trim() ||
      !total.trim() ||
      !clientName.trim() ||
      !clientCompany.trim() ||
      !clientEmail.trim() ||
      !clientPhone.trim() ||
      terms.length === 0
    ) {
      // alert("All fields are required.");
      return;
    }

    const payload = {
      clientId,
      title: proposalTitle,
      client: {
        name: clientName,
        company: clientCompany,
        email: clientEmail,
        phone: clientPhone,
        date: new Date().toISOString().split("T")[0], // e.g., "2025-07-03"
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
      const response = await fetch(
        `${API_URL}/api/freelancers/create-proposals/${freelancerId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.error("Error:", error);
        alert("Proposal sending failed.");
        return;
      }

      const data = await response.json();
      console.log("Proposal sent:", data);
      alert("Proposal sent successfully!");
      handleAddProposal(payload);
      setIsModalOpen(false);
    } catch (err) {
      console.error("Submission error:", err);
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

        {/* Header */}
        <div className="flex justify-between items-start p-10">
          <div className="space-y-3">
            {editMode ? (
              <input
                value={proposalTitle}
                onChange={(e) => setProposalTitle(e.target.value)}
                className="text-3xl font-bold text-gray-900 w-full border rounded p-1"
              />
            ) : (
              <h1 className="text-3xl font-bold text-gray-900">{proposalTitle}</h1>
            )}
            {editMode ? (
              <input
                value={proposalStatus}
                onChange={(e) => setProposalStatus(e.target.value)}
                className="bg-gray-200 text-gray-800 text-sm font-medium px-2 py-1 rounded-full"
              />
            ) : (
              <span className="bg-gray-200 text-gray-800 text-sm font-medium px-2 py-1 rounded-full">
                {proposalStatus}
              </span>
            )}
            <p className="text-sm text-gray-800">Client: {clientCompany}</p>
          </div>
        </div>

        {/* Edit Actions */}
        <div className="flex gap-3 border-y border-gray-200 py-3 px-6 font-semibold">
          <button className="px-4 py-2 text-lg text-gray-800">Client Info</button>
          <button onClick={() => setEditMode(!editMode)} className="px-4 py-2 text-lg text-gray-800">
            {editMode ? "Cancel" : "Edit"}
          </button>
          {editMode && (
            <button onClick={handleSave} className="px-4 py-2 text-lg text-blue-600 font-bold">
              Save
            </button>
          )}
        </div>

        <div className="flex justify-between px-10">
          {/* Left Section */}
          <div className="space-y-6 border-r border-gray-200 pr-8 w-[50%] pt-6">
            {/* Client Info */}
            <div className="items-center space-y-3">
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/40?img=40"
                  alt="Client"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="px-4 space-y-1">
                  {editMode ? (
                    <>
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
                    </>
                  ) : (
                    <>
                      <p className="text-xl font-bold text-gray-800">{clientName}</p>
                      <p className="text-lg text-gray-700">{clientCompany}</p>
                    </>
                  )}
                </div>
              </div>
              <div>
                {editMode ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <p className="text-sm text-gray-800">{clientEmail}</p>
                    <p className="text-sm text-gray-800">{clientPhone}</p>
                  </>
                )}
              </div>
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Overview</h2>
              {editMode ? (
                <textarea
                  value={overview}
                  onChange={(e) => setOverview(e.target.value)}
                  className="w-full text-sm border p-2 rounded"
                />
              ) : (
                <p className="text-sm text-gray-700">{overview}</p>
              )}
            </div>

            {/* Scope of Work */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Scope of Work</h2>
              <ul className="list-disc text-sm text-gray-700 space-y-1 ml-4">
                {scopeOfWork.map((item, i) => (
                  <li key={i}>
                    {editMode ? (
                      <input
                        value={item}
                        onChange={(e) => handleScopeChange(e.target.value, i)}
                        className="w-full text-sm border p-1 rounded"
                      />
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4 pl-10 w-[50%] pt-6">
            {/* Timeline */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Timeline</h2>
              <div className="flex justify-between">
                <span className="text-sm text-gray-700">Start Date:</span>
                {editMode ? (
                  <input
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="text-sm border p-1 rounded"
                  />
                ) : (
                  <p className="text-sm">{startDate}</p>
                )}
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-700">End Date:</span>
                {editMode ? (
                  <input
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="text-sm border p-1 rounded"
                  />
                ) : (
                  <p className="text-sm">{endDate}</p>
                )}
              </div>
            </div>

            {/* Total */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Total</h2>
              {editMode ? (
                <input
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                  className="text-2xl font-bold border p-1 rounded w-[120px]"
                />
              ) : (
                <p className="text-2xl font-bold text-gray-900">${total}</p>
              )}
            </div>

            {/* Terms */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Terms & Conditions</h2>
              <ul className="list-disc text-sm text-gray-700 space-y-1 ml-4">
                {terms.map((term, index) => (
                  <li key={index}>
                    {editMode ? (
                      <input
                        value={term}
                        onChange={(e) => handleTermChange(e.target.value, index)}
                        className="w-full text-sm border p-1 rounded"
                      />
                    ) : (
                      term
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={handleSend}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
          >
            Send
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






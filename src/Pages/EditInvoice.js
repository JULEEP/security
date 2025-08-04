import { useState } from "react";

export default function InvoiceModal({ setIsModalOpen,handleAddInvoice }) {
  const [editMode, setEditMode] = useState(false);
  const [clientName, setClientName] = useState("Sarah Smith");
  const [clientEmail, setClientEmail] = useState("sarah@email.com");
  const [totalBilled, setTotalBilled] = useState(9750);
  const [outstanding, setOutstanding] = useState(3250);
  const [status, setStatus] = useState("Active");

  const invoices = [
    {
      id: "INV001",
      project: "Website Redesign",
      issue: "2024-06-01",
      due: "2024-06-15",
      status: "Paid",
    },
    {
      id: "INV002",
      project: "SEO Optimization",
      issue: "2024-06-05",
      due: "2024-06-20",
      status: "Pending",
    },
  ];

  const statusColors = {
    Paid: "text-green-600 bg-green-100",
    Pending: "text-yellow-600 bg-yellow-100",
    Overdue: "text-red-600 bg-red-100",
  };
  const handleSave = () => {
    setEditMode(false);
    // Optional: Save to backend
  };
  const handleSendInvoice = () => {
  const invoiceData = {
    invoiceNo: "#INV0005",
    client: clientName,
    amount: totalBilled,
    date: "23-5-2025",
    status: status,
  };

  console.log("Sending invoice data:", invoiceData);

  // Call your parent or API function to handle this
  handleAddInvoice(invoiceData);
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-w-2xl w-full bg-white shadow-xl rounded-xl font-inter h-[98vh] overflow-y-auto p-8">
        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute right-2 top-0 text-gray-600 hover:text-black text-2xl z-50 mr-2"
        >
          x
        </button>

        {/* Header */}
        <div className="flex items-start justify-between pt-3 border-b-2 border-gray-200 pb-6">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt="Sarah Smith"
              className="w-20 h-20 rounded-full"
            />
            <div>
              {editMode ? (
                <>
                  <input
                    type="text"
                    className="text-3xl font-semibold border px-2 rounded w-full"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                  <input
                    type="email"
                    className="text-sm text-gray-500 border mt-1 px-2 rounded w-full"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-semibold">{clientName}</h2>
                  <p className="text-gray-500 text-sm">{clientEmail}</p>
                </>
              )}
            </div>
          </div>
          <button
            onClick={() => setEditMode((prev) => !prev)}
            className="bg-teal-700 text-white px-6 py-1 rounded-md text-sm mr-7 mt-3"
          >
            {editMode ? "Save" : "Edit"}
          </button>
          <button
            onClick={handleSendInvoice}
            className="bg-teal-700 text-white px-6 py-1 rounded-md text-sm mr-7 mt-3"
          >
            Send
          </button>
        </div>

        {/* Stats */}
        <div className="flex space-x-8">
          <div className="w-[70%] border-r border-gray-200 pr-6 pt-6">
            <div className="flex justify-between mb-8">
              <div>
                <p className="text-gray-800 text-lg mb-1">Total Billed</p>
                {editMode ? (
                  <input
                    type="number"
                    className="text-2xl font-bold border px-2 py-1 rounded w-24"
                    value={totalBilled}
                    onChange={(e) => setTotalBilled(e.target.value)}
                  />
                ) : (
                  <p className="text-2xl font-bold">${totalBilled}</p>
                )}
              </div>
              <div>
                <p className="text-gray-800 text-lg mb-1">Outstanding</p>
                {editMode ? (
                  <input
                    type="number"
                    className="text-2xl font-bold border px-2 py-1 rounded w-24"
                    value={outstanding}
                    onChange={(e) => setOutstanding(e.target.value)}
                  />
                ) : (
                  <p className="text-2xl font-bold">${outstanding}</p>
                )}
              </div>
              <div>
                <p className="text-gray-800 text-lg mb-1">Status</p>
                {editMode ? (
                  <select
                    className="text-2xl font-semibold border px-2 py-1 rounded"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option>Paid</option>
                    <option>Pending</option>
                    <option>Overdue</option>
                  </select>
                ) : (
                  <p className="text-2xl font-semibold">{status}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <button className="bg-teal-700 text-white px-6 py-2 rounded text-sm">
                + New invoice
              </button>
              <button className="bg-gray-200 px-6 py-2 rounded text-sm">
                Download All
              </button>
              <button className="bg-gray-200 px-6 py-2 rounded text-sm">
                Send Reminder
              </button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3 mb-4 ">
              <select className="border border-gray-300 px-6 py-2 rounded text-sm w-[33%]">
                <option>Status</option>
              </select>
              <select className="border border-gray-300 px-6 py-2 rounded text-sm w-[33%]">
                <option>Date Range</option>
              </select>
              <input
                type="text"
                placeholder="Search invoices"
                className="border border-gray-300 px-6 py-2 rounded text-sm w-[33%]"
              />
            </div>

            {/* Table */}
            <div className="overflow-x-auto border rounded ">
              <table className="w-full text-lg text-left">
                <thead className=" text-gray-600 uppercase text-sm border-b">
                  <tr>
                    <th className="px-4 py-3">Invoice</th>
                    <th className="px-4 py-3">Project</th>
                    <th className="px-4 py-3">Issue Date</th>
                    <th className="px-4 py-3">Due Date</th>
                    <th className="px-4 py-3">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((inv, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="px-4 py-3 text-blue-500 font-medium">
                        #{inv.id}
                      </td>
                      <td className="px-4 py-2">{inv.project}</td>
                      <td className="px-4 py-2">{inv.issue}</td>
                      <td className="px-4 py-2">{inv.due}</td>
                      <td className="px-4 py-2">
                        <span
                          className={`px-3 py-1 rounded-lg font-semibold text-sm ${
                            statusColors[inv.status]
                          }`}
                        >
                          {inv.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ...Rest of the code remains same (table, filters, sidebar, etc.) */}
          </div>

          {/* Sidebar Summary */}
          <div className="pl-6 rounded shadow-sm w-[30%] space-y-8 pt-6">
            <div>
              <p className="text-lg text-gray-800">Total Invoice</p>
              <p className="font-semibold text-2xl mb-3">10</p>
            </div>
            <div>
              <p className="text-lg text-gray-800">Total Paid</p>
              <p className="font-semibold text-2xl mb-3">$6,500</p>
            </div>
            <div>
              <p className="text-lg text-gray-800">Overdue</p>
              <p className="font-semibold text-2xl mb-3">$1,250</p>
            </div>
            <div>
              <p className="text-lg text-gray-800">Upcoming Due</p>
              <p className="font-semibold text-2xl">$3,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

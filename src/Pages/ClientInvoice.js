import React from "react";

const invoices = [
  {
    id: "INV-008",
    project: "E-commerce Platform",
    issue: "Mar 15, 2025",
    due: "Apr 15, 2025",
    status: "Paid",
  },
  {
    id: "INV-007",
    project: "Logo Design",
    issue: "Mar 22, 2025",
    due: "Apr 22, 2025",
    status: "Pending",
  },
  {
    id: "INV-006",
    project: "Marketing Materials",
    issue: "Mar 22, 2025",
    due: "Apr 22, 2025",
    status: "Overdue",
  },
  {
    id: "INV-005",
    project: "Website Redesign",
    issue: "May 16, 2025",
    due: "Apr 22, 2025",
    status: "Paid",
  },
  {
    id: "INV-004",
    project: "Website Redesign",
    issue: "Mar 25, 2025",
    due: "Apr 22, 2025",
    status: "Paid",
  },
];

const statusColors = {
  Paid: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Overdue: "bg-red-100 text-red-700",
};

function ClientInvoice() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 min-w-screen font-inter">
      <div className=" mx-auto bg-white rounded-lg shadow p-6 ">
        {/* Header */}
        <div className="flex items-start justify-between pt-3 border-b-2 border-gray-200 pb-6">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt="Sarah Smith"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-3xl font-semibold">Sarah Smith</h2>
              <p className="text-gray-500 text-sm">sarah@email.com</p>
            </div>
          </div>
          <button className="bg-teal-700 text-white px-6 py-1 rounded-md text-sm mr-7 mt-3">
            Invoice
          </button>
        </div>

        {/* Stats */}
        <div className="flex space-x-8 ">
          <div className="w-[70%]  border-r border-gray-200 pr-6 pt-6">
            <div className="flex justify-between mb-8">
              <div>
                <p className="text-gray-800 text-lg mb-1">Total Billed</p>
                <p className="text-2xl font-bold">$9,750</p>
              </div>
              <div>
                <p className="text-gray-800 text-lg mb-1">Outstanding</p>
                <p className="text-2xl font-bold">$3,250</p>
              </div>
              <div>
                <p className="text-gray-800 text-lg mb-1">Status</p>
                <p className="text-2xl font-semibold">Active</p>
              </div>
            </div>

            {/* Buttons */}
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

export default ClientInvoice;

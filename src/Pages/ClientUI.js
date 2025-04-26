import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import ClientSideSidebar from "../components/ClinetSideSidebar";
const invoicesData = [
  { id: '#1004', client: 'Acme Inc.', amount: 1200, date: 'Apr 8, 2024', status: 'Unpaid' },
  { id: '#1003', client: 'Globex Corporation', amount: 4500, date: 'Apr 2, 2024', status: 'Paid' },
  { id: '#1002', client: 'Synergy Ltd.', amount: 750, date: 'Mar 29, 2024', status: 'Unpaid' },
  { id: '#1001', client: 'Example Corp.', amount: 8750, date: 'Mar 15, 2024', status: 'Paid' },
  { id: '#1000', client: 'Ace Mogna', amount: 1200, date: 'Apr 11, 2024', status: 'Paid' },
];

const InvoicesPage = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInvoices = invoicesData.filter((invoice) => {
    const matchesFilter =
      filter === 'All' ||
      (filter === 'Paid' && invoice.status === 'Paid') ||
      (filter === 'Unpaid' && invoice.status === 'Unpaid') ||
      (filter === 'Overdue' && invoice.status === 'Unpaid');

    const matchesSearch = invoice.client.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const totalInvoiced = invoicesData.reduce((sum, inv) => sum + inv.amount, 0);
  const pending = invoicesData
    .filter((inv) => inv.status === 'Unpaid')
    .reduce((sum, inv) => sum + inv.amount, 0);
  const overdueCount = invoicesData.filter((inv) => inv.status === 'Unpaid').length;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <ClientSideSidebar/>
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <h1 className="text-2xl font-semibold">Invoices</h1>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            + New Invoice
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white shadow p-4 rounded">
            <div className="text-sm text-gray-500">Total Invoiced</div>
            <div className="text-xl font-bold">${totalInvoiced.toLocaleString()}</div>
          </div>
          <div className="bg-white shadow p-4 rounded">
            <div className="text-sm text-gray-500">Pending</div>
            <div className="text-xl font-bold">${pending.toLocaleString()}</div>
          </div>
          <div className="bg-white shadow p-4 rounded">
            <div className="text-sm text-gray-500">Overdue</div>
            <div className="text-xl font-bold">{overdueCount} Unpaid</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <div className="space-x-2">
            {['All', 'Unpaid', 'Paid', 'Overdue'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded ${
                  filter === tab ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="border px-3 py-2 rounded w-full sm:w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gray-100 text-sm">
                <th className="p-3">Invoice</th>
                <th className="p-3">Client</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((inv) => (
                <tr key={inv.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{inv.id}</td>
                  <td className="p-3">{inv.client}</td>
                  <td className="p-3">${inv.amount.toLocaleString()}</td>
                  <td className="p-3">{inv.date}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        inv.status === 'Paid'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
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
    </div>
  );
};

export default InvoicesPage;
// InvoiceDashboard.jsx
import React, { useState } from "react";
import invoices from'./InvoiceData';
import "./InvoiceDashboard.css";

const InvoiceDashboard = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredInvoices = invoices.filter(invoice => {
    return (
      (filter === "All" || invoice.status === filter) &&
      (invoice.client.toLowerCase().includes(search.toLowerCase()) ||
        invoice.id.includes(search))
    );
  });

  const totalInvoiced = "$15,200.00";
  const pending = "$3,750.00";
  const overdueCount = 4;

  return (
    <div className="dashboard-container">
      
      <div className="dashboard-header">
        <h1>Invoices</h1>
        <button className="new-invoice-button">+ New Invoice</button>
      </div>

      <div className="summary-cards">
        <div className="card">
          <p className="label">Total Invoiced</p>
          <p className="value">{totalInvoiced}</p>
        </div>
        <div className="card">
          <p className="label">Pending</p>
          <p className="value">{pending}</p>
        </div>
        <div className="card">
          <p className="label">Overdue</p>
          <p className="value">{overdueCount} Unpaid</p>
        </div>
      </div>
      
      <div className="hero">
      <div className="filters">
        <div className="tabs">
          {['All', 'Unpaid', 'Paid', 'Overdue'].map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`tab-button ${filter === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <table className="invoice-table">
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{invoice.client}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.date}</td>
              <td>
                <span className={`status ${invoice.status.toLowerCase()}`}>
                  {invoice.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table> 
      </div>
      </div>

  );
};

export default InvoiceDashboard;
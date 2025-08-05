import React, { useState,useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
      const fetchInvoices = async () => {
        try {
          const freelancerId = localStorage.getItem("freelancerId");
          if (!freelancerId) {
            console.warn("No freelancerId found in localStorage");
            return;
          }
  
          const res = await fetch(
            `https://freelance-management-frontend.onrender.com/api/freelancers/freelancerinvoices/${freelancerId}`
          );
  
          const data = await res.json(); // parse response as JSON
  
          if (data && data.invoices) {
            setInvoices(data.invoices);
          } else {
            console.warn("No invoices found in response");
          }
        } catch (error) {
          console.error("Error fetching invoices:", error);
        }
      };
  
      fetchInvoices();
    }, []);

  const generatePDF = (invoice) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    
    // Client Details (Top Section)
    doc.text("Client Details", 14, 20);
    doc.setFontSize(12);
    doc.text(`Client: ${invoice.client}`, 14, 30);
    doc.text(`Invoice No: ${invoice.invoiceNo}`, 14, 40);
    doc.text(`Date: ${invoice.date}`, 14, 50);
    doc.text(`Status: ${invoice.status}`, 14, 60);
    
    // Invoice Table Header
    const tableData = [
      ["Invoice No", "Amount", "Date", "Status"],
      [invoice.invoiceNo, `$${invoice.amount}`, invoice.date, invoice.status],
    ];

    // Invoice Table using autoTable
    autoTable(doc, {
      startY: 70,  // Starting Y position for the table
      head: tableData.slice(0, 1),  // Table Header
      body: tableData.slice(1),  // Table Body
      theme: "grid",
    });

    // Add Subtotal (for this example, we assume only one row in the table)
    const subtotal = invoice.amount;
    doc.text(`Subtotal: $${subtotal}`, 14, doc.lastAutoTable.finalY + 10);

    // Add Total (for this example, we sum the amounts for all invoices)
    const totalAmount = invoices.reduce((acc, curr) => acc + Number(curr.amount), 0);
    doc.text(`Total: $${totalAmount}`, 14, doc.lastAutoTable.finalY + 20);

    // Save PDF
    doc.save(`${invoice.invoiceNo}.pdf`);
  };

  const totalAmount = invoices.reduce((acc, curr) => acc + Number(curr.amount), 0);
  const pendingAmount = invoices
    .filter(inv => inv.status === "Pending")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);
  const overdueAmount = invoices
    .filter(inv => inv.status === "Overdue")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Invoices</h2>

      {/* Grid totals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-100 p-6 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Total Amount</h3>
          <p className="text-2xl font-bold mt-2">${totalAmount}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Pending Amount</h3>
          <p className="text-2xl font-bold mt-2 text-yellow-500">${pendingAmount}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Overdue Amount</h3>
          <p className="text-2xl font-bold mt-2 text-red-500">${overdueAmount}</p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2  border">Invoice No</th>
              <th className="px-4 py-2 border ">Freelancer</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {invoices.map((invoice, index) => (
              <tr key={index} className="hover:bg-gray-100 border-b">
                <td className="px-4 py-2 border">{invoice.invoiceNumber}</td>
                <td className="px-4 py-2 border">{invoice.freelancerId.name}</td>
                <td className="px-4 py-2 border">${invoice.grandTotal}</td>
                <td className="px-4 py-2 border">{invoice.invoiceDate.split("T")[0]}</td>
                 <td className="px-4 py-2 border">
                  <span
                    className={"px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-800" }
                  >
                   Pending
                  </span>
                </td>
                <td className="p-3 border text-center">
                  <button
                    onClick={() => generatePDF(invoice)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaDownload size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceList;

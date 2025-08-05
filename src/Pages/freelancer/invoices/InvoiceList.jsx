import React, { useEffect, useState } from "react";
import { FaPlus, FaTimes, FaDownload, FaEye } from "react-icons/fa";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import UpdateInvoiceModal from "./UpdateInvoice";

const statusColors = {
  Paid: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Overdue: "bg-red-100 text-red-700",
};

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

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const handleView = () => {
    setIsViewModalOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newInvoice, setNewInvoice] = useState({
    invoiceNo: "",
    client: "",
    amount: "",
    date: "",
    status: "",
  });

  const handleInputChange = (e) => {
    setNewInvoice({ ...newInvoice, [e.target.name]: e.target.value });
  };

  const handleAddInvoice = (newInvoice) => {
    if (
      newInvoice.invoiceNo &&
      newInvoice.client &&
      newInvoice.amount &&
      newInvoice.date &&
      newInvoice.status
    ) {
      setInvoices([...invoices, newInvoice]);
      setNewInvoice({
        invoiceNo: "",
        client: "",
        amount: "",
        date: "",
        status: "",
      });
      setIsModalOpen(false);
    } else {
      alert("Please fill all fields!");
    }
  };

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
      startY: 70, // Starting Y position for the table
      head: tableData.slice(0, 1), // Table Header
      body: tableData.slice(1), // Table Body
      theme: "grid",
    });

    // Add Subtotal (for this example, we assume only one row in the table)
    const subtotal = invoice.amount;
    doc.text(`Subtotal: $${subtotal}`, 14, doc.lastAutoTable.finalY + 10);

    // Add Total (for this example, we sum the amounts for all invoices)
    const totalAmount = invoices.reduce(
      (acc, curr) => acc + Number(curr.amount),
      0
    );
    doc.text(`Total: $${totalAmount}`, 14, doc.lastAutoTable.finalY + 20);

    // Save PDF
    doc.save(`${invoice.invoiceNo}.pdf`);
  };

  const totalAmount = invoices.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );
  const pendingAmount = invoices
    .filter((inv) => inv.status === "Pending")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);
  const overdueAmount = invoices
    .filter((inv) => inv.status === "Overdue")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Invoices</h2>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus /> Add New Invoice
        </button>
      </div>

      {/* Grid totals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-100 p-6 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Total Amount</h3>
          <p className="text-2xl font-bold mt-2">${totalAmount}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Pending Amount</h3>
          <p className="text-2xl font-bold mt-2 text-yellow-500">
            ${pendingAmount}
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow text-center">
          <h3 className="text-lg font-semibold">Overdue Amount</h3>
          <p className="text-2xl font-bold mt-2 text-red-500">
            ${overdueAmount}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border ">
          <thead className="bg-gray-200">
            <tr>
              <th className=" px-4 py-2 border ">Invoice No</th>
              <th className=" px-4 py-2 border">Client</th>
              <th className=" px-4 py-2 border ">Amount</th>
              <th className=" px-4 py-2 border ">Date</th>
              <th className=" px-4 py-2 border ">Status</th>
              <th className=" px-4 py-2 border ">Action</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={index} className="hover:bg-gray-100 border-b text-center px-4 py-2">
                <td className="px-4 py-3 border">{invoice.invoiceNumber}</td>
                <td className="px-4 py-2 border">{invoice.clientId.name}</td>
                <td className=" border">${invoice.grandTotal}</td>
                <td className=" border">{invoice.invoiceDate.split("T")[0]}</td>
                <td className=" border">
                  <span
                    className= "px-2 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800"
                  >
                    Pending
                  </span>
                </td>
                <td className="p-3 border text-center space-x-5">
                  <button
                    onClick={() => handleView()}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEye />
                  </button>
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

      {/* Add Invoice Modal */}
      {isModalOpen && (
        <UpdateInvoiceModal
          setIsModalOpen={setIsModalOpen}
          handleAddInvoice={handleAddInvoice}
        />
      )}

      {isViewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative max-w-2xl w-full bg-white shadow-xl rounded-xl font-inter h-[98vh] overflow-y-auto p-8">
            {/* Close Button */}
            <button
              onClick={() => setIsViewModalOpen(false)}
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
      )}
    </div>
  );
};

export default InvoiceList;

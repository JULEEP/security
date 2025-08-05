import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { API_URL } from "../../../config";

export default function InvoicePage({client}) {
  const [isEditMode, setIsEditMode] = useState(true);
  const freelancerId = localStorage.getItem("freelancerId")
  const [invoice, setInvoice] = useState({
    invoiceNo: "12345",
    date: "2022-06-25",
    clientName: client?.name || "",
  clientPhone: client?.mobile || "",
  clientEmail: client?.email || "",
    clientAddress: "123 Anywhere St., Any City",
    bankName: "Borcelle",
    accountNumber: "123-456-7890",
    notes: "Thank you for doing business with us!",
    terms:
      "Please send payments within 15 days of receiving this invoice. Late fee will be 10% after 15 days.",
    author: "Henrita Mitchel",
    role: "Administrator",
  });

  const [items, setItems] = useState([
    { description: "Logo Design", qty: 2, price: 100 },
  ]);

  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const tax = +(subtotal * 0.15).toFixed(2);
  const total = subtotal + tax;

  const handleItemChange = (index, key, value) => {
    const updated = [...items];
    updated[index][key] =
      key === "qty" || key === "price" ? Number(value) : value;
    setItems(updated);
  };

  const addRow = () => {
    setItems([...items, { description: "", qty: 1, price: 0 }]);
  };

  const deleteRow = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  const renderField = (value, onChange, className = "") =>
    isEditMode ? (
      <input
        value={value}
        onChange={onChange}
        className={`outline-none border-b border-gray-300 ${className}`}
      />
    ) : (
      <span>{value}</span>
    );

  const handleSubmit = async () => {
    const payload = {
      invoiceNumber: invoice.invoiceNo,
      invoiceDate: invoice.date,
      items: items.map((item) => ({
        description: item.description,
        quantity: item.qty,
        price: item.price,
      })),
      taxRate: 15,
      paymentMethod: {
        bankName: invoice.bankName,
        accountNumber: invoice.accountNumber,
      },
      terms: invoice.terms,
    };

    try {
      const response = await fetch(
        `${API_URL}/api/freelancers/createinvoice/${freelancerId}/${client._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create invoice");
      }

      alert("Invoice created successfully");
    } catch (err) {
      console.error(err);
      alert("Error creating invoice");
    }
  };

  return (
    <div className="p-4 bg-white min-h-screen">
      {/* Same JSX layout as before... */}
      <div className="bg-white shadow-xl rounded-xl w-full max-w-4xl px-16 py-8 text-base">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className="px-4 py-1 bg-blue-900 text-white rounded hover:bg-blue-600 text-sm"
          >
            {isEditMode ? "View Mode" : "Edit Mode"}
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-4xl font-bold text-black">Studio Shodwae</h1>
            <p>Creative Agency</p>
          </div>

          <h1 className="text-4xl font-bold text-blue-800">INVOICE</h1>
        </div>
        <hr className="text-black" />
        <div className="flex justify-between mt-8">
          {/* Client Info */}
          <div className="mb-4 text-base">
            <p className="text-gray-700 font-semibold">Invoice To:</p>
            {renderField(
              invoice.clientName,
              (e) => setInvoice({ ...invoice, clientName: e.target.value }),
              "font-bold"
            )}
            <br />
            {renderField(invoice.clientPhone, (e) =>
              setInvoice({ ...invoice, clientPhone: e.target.value })
            )}
            <br />
            {renderField(invoice.clientEmail, (e) =>
              setInvoice({ ...invoice, clientEmail: e.target.value })
            )}
            <br />
            {renderField(invoice.clientAddress, (e) =>
              setInvoice({ ...invoice, clientAddress: e.target.value })
            )}
          </div>
          {/* Invoice Header */}
          <div className="mb-4 text-xs">
            <div>
              <p className="text-gray-700 font-bold text-base">
                Invoice No:{" "}
                {renderField(invoice.invoiceNo, (e) =>
                  setInvoice({ ...invoice, invoiceNo: e.target.value })
                )}
              </p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold text-base">
                {renderField(invoice.date, (e) =>
                  setInvoice({ ...invoice, date: e.target.value })
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-lg border border-gray-300 border-collapse">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="text-centerpx-2 py-1 border border-gray-300">
                  #
                </th>
                <th className="px-2 py-1 border border-gray-300 items-center">
                  Description
                </th>
                <th className=" px-2 py-1 border border-gray-300">Qty</th>
                <th className=" px-2 py-1 border border-gray-300">Price</th>
                <th className=" px-2 py-1 border border-gray-300">Total</th>
                {isEditMode && (
                  <th className="text-right px-2 py-1 border border-gray-300">
                    Action
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="even:bg-sky-200">
                  <td className="px-2 py-1 border border-gray-300 text-center">
                    {index + 1}
                  </td>
                  <td className="px-2 py-1 border border-gray-300 text-center">
                    {renderField(item.description, (e) =>
                      handleItemChange(index, "description", e.target.value)
                    )}
                  </td>
                  <td className="px-2 py-1 text-center border border-gray-300">
                    {renderField(item.qty, (e) =>
                      handleItemChange(index, "qty", e.target.value)
                    )}
                  </td>
                  <td className="px-2 py-1 text-center border border-gray-300">
                    {renderField(item.price, (e) =>
                      handleItemChange(index, "price", e.target.value)
                    )}
                  </td>
                  <td className="px-2 py-1 text-center border border-gray-300">
                    {(item.qty * item.price).toFixed(2)}
                  </td>
                  {isEditMode && (
                    <td className="px-2 py-1 text-center border border-gray-300">
                      <button
                        onClick={() => deleteRow(index)}
                        className="text-red-500 hover:text-red-700 text-xs"
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>

          {isEditMode && (
            <button
              onClick={addRow}
              className="mt-2 px-3 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600"
            >
              + Add Item
            </button>
          )}
        </div>

        {/* Summary */}
        <div className="text-right text-lg space-y-3 mb-4">
          <div className="flex space-x-10 justify-end">
            <p>Subtotal: </p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex space-x-10 justify-end">
            <p>Tax (15%):</p>
            <p> ${tax.toFixed(2)}</p>
          </div>
          <div className="justify-between flex">
            <p className="font-bold text-blue-800 text-xl">PAYMENT METHOD</p>
            <div className="flex space-x-10 justify-end">
              <p className="font-bold text-blue-800">TOTAL:</p>
              <p> ${total.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Bank & Notes */}
        <div className="text-base mt-3 space-y-3">
          <div className="text-base">
            <p>
              Bank :{" "}
              {renderField(invoice.bankName, (e) =>
                setInvoice({ ...invoice, bankName: e.target.value })
              )}
            </p>
            <p>
              Account :{" "}
              {renderField(invoice.accountNumber, (e) =>
                setInvoice({ ...invoice, accountNumber: e.target.value })
              )}
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-700">Notes:</p>
            <p className="font-semibold">
              {renderField(invoice.notes, (e) =>
                setInvoice({ ...invoice, notes: e.target.value })
              )}
            </p>
          </div>
          <div className=" flex justify-between items-end">
            <div className="w-72">
              <p className="font-semibold text-gray-700">Terms:</p>
              {renderField(invoice.terms, (e) =>
                setInvoice({ ...invoice, terms: e.target.value })
              )}
            </div>
            <div className="flex flex-col items-end text-right">
              <h1 className="text-xl font-semibold">
                {renderField(invoice.author, (e) =>
                  setInvoice({ ...invoice, author: e.target.value })
                )}
              </h1>
              <p className="text-sm text-gray-600">
                {renderField(invoice.role || "Administrator", (e) =>
                  setInvoice({ ...invoice, role: e.target.value })
                )}
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="flex justify-between mt-5">
          <div className="flex justify-center space-x-2">
            <FiPhone className="size-7 text-blue-400" />
            <p className="text-base">785-646-73</p>
          </div>
          <div className="flex justify-center space-x-2">
            <FiMail className="size-7 text-blue-400" />
            <p className="text-base">shuhaishujwhnsk@gmail.com</p>
          </div>
          <div className="flex justify-center space-x-2">
            <FiMapPin className="size-7 text-blue-400" />
            <p className="text-base">123,Ashram12,Anycity</p>
          </div>
        </div>
      </div>
      <div className="text-right mt-6">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

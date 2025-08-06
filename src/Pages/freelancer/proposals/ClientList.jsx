import { useEffect, useState } from "react";
import ProposalModal from "./AddProposal";
import { API_URL } from "../../../config";

export default function ClientList({ setIsClientModalOpen, handleAddProposal }) {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch(`${API_URL}/api/client/getallclients`);
        const data = await res.json();
        setClients(data.clients || []);
      } catch (error) {
        console.error("Failed to fetch clients:", error);
      }
    };
    fetchClients();
  }, []);

  const openProposalModal = (client) => {
    setSelectedClient(client);
    setIsProposalModalOpen(true);
  };

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black bg-opacity-40 flex items-center justify-center mt-10">
        <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-3xl h-[80vh] overflow-y-auto p-8">
          <button
            onClick={() => setIsClientModalOpen(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
          >
            ×
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center">Select a Client</h2>
          <ul className="space-y-4">
            {clients.map((client) => (
              <li
                key={client._id}
                className="p-4 bg-gray-100 rounded-lg flex justify-between items-center shadow-sm"
              >
                <div>
                  <p className="font-semibold text-lg">{client.name}</p>
                  <p className="text-sm text-gray-600">{client.email}</p>
                </div>
                <button
                  onClick={() => openProposalModal(client)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Create Proposal
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isProposalModalOpen && selectedClient && (
        <ProposalModal
          setIsModalOpen={setIsProposalModalOpen}
          handleAddProposal={handleAddProposal}
          client={selectedClient}
          clientId={selectedClient._id}
        />
      )}
    </>
  );
}

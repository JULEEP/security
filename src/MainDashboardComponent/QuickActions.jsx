const QuickActions = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="font-bold mb-2 text-3xl">Quick Actions</div>
      <div className="grid grid-cols-2 gap-2">
        <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded text-l">
          + New Project
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded">
          Create Invoice
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded">
          Upload Proposal
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded">
          View Portfolio
        </button>
      </div>
    </div>
  );
};
export default QuickActions;

const TimeTracker = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="font-bold text-2xl">Time Tracker</div>
        
        <button className="bg-blue-600 text-white py-3 px-4 rounded-lg text-xl font-bold mt-2 w-full">
        00:00
        </button>
        <div className="flex justify-between">
        <p className="text-sm text-gray-500">History</p>
        <p className="text-sm text-gray-500">6.3h this week</p>
        </div>
        
      </div>

      
    </div>
  );
};
export default TimeTracker;

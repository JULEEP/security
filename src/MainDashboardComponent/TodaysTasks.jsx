
import { FiClock } from "react-icons/fi";
const TodaysTask = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-8">
      <div className="font-bold text-2xl">Today's Tasks</div>
      <div className="space-y-4">
        <div className="flex space-x-2 items-center">
        <FiClock className="bg-blue-100 size-8 p-2 rounded-lg text-blue-700 items-center"/>
        <p className="font-semibold text-xl">Design landing page</p>
        </div>
        
        <p className="text-gray-400 text-l">Due Sept 25 • Start Timer</p>
      </div>
      <div className="space-y-4">
        <div className="flex space-x-2 items-center">
        <FiClock className="bg-blue-100 size-8 p-2 rounded-lg text-blue-700 items-center"/>
          <p className="font-semibold text-xl"> Update product images</p>
        </div>
        
        <p className="text-gray-400 text-l">Online Store • Due Today</p>
      </div>
    </div>
  );
};
export default TodaysTask;

const PriorityTimeline = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full justify-between">
      <div className="space-y-5">
        <h2 className="font-semibold text-2xl mb-2">Priority Timeline</h2>

        <ul className="space-y-3 text-sm">
          <li className="flex items-start space-x-2">
            <span className="text-blue-600 font-bold">•</span>
            <div>
              <p className="text-xl">Follow up on proposal</p>
              <div className="flex justify-between">
              <div className="text-gray-500 text-xs">Senpia · Srom</div>
              <div className="text-gray-500 text-xs"> Speen</div>

              </div>
             
            </div>
          </li>

          <li className="flex items-start space-x-2">
            <span className="text-green-600 font-bold">•</span>
            <div>
              <p className="text-xl">Create checkout workflow</p>
              <div className="flex justify-between">
              <div className="text-gray-500 text-xs">Online Store </div>
              <div className="text-gray-500 text-xs"> $800</div>

              </div>
             
            </div>
          </li>

          <li className="flex items-start space-x-2">
            <span className="text-yellow-500 font-bold">•</span>
            <div>
              <p className="text-xl">Mobile design completed</p>
              <div className="flex justify-between">
              <div className="text-gray-500 text-xs">
                Website Redesign  
              </div>
              <div>Sep 23</div>

              </div>
             
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default PriorityTimeline;

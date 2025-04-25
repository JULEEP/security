import { FiHelpCircle } from "react-icons/fi";
import {
  AreaChart,
  Area,
  ResponsiveContainer
} from "recharts";

const hoursData = [
  { hour: '9AM', value: 1 },
  { hour: '10AM', value: 0.8 },
  { hour: '11AM', value: 1.2 },
  { hour: '12PM', value: 0.5 },
  { hour: '1PM', value: 0.7 },
  { hour: '2PM', value: 1.0 },
];

const HoursTrackedCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md items-center flex flex-col justify-center p-4 h-full">
      <div className="flex flex-col items-center gap-2 text-xl mb-1 pt--1">
        Hours Tracked Today 
        <div className="flex items-center justify-between text-sm mb-1 w-full">5.2 hrs <FiHelpCircle className="text-gray-400" /></div>

      </div>
        <div className="w-full h-24">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={hoursData}>
            <defs>
              <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#ef4444"
              strokeWidth={2}
              fill="url(#colorHours)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HoursTrackedCard;

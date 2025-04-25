import {
  AreaChart,
  Area,
  ResponsiveContainer
} from 'recharts';

const earningsData = [
  { day: 'Mon', earnings: 400 },
  { day: 'Tue', earnings: 300 },
  { day: 'Wed', earnings: 600 },
  { day: 'Thu', earnings: 800 },
  { day: 'Fri', earnings: 700 },
  { day: 'Sat', earnings: 1000 },
  { day: 'Sun', earnings: 650 }
];

const EarningsCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md items-center flex flex-col justify-center p-4 h-full">
      <div className="text-xl mb-1">This Week's Earnings</div>
      <div className="text-2xl font-bold mb-4">$2,150.00</div>
      <div className="w-full h-24">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={earningsData}>
            <defs>
              <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="earnings"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#colorEarnings)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EarningsCard;

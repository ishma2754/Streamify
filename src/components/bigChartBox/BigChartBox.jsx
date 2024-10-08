import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";



const BigChartBox = () => {
  const { data } = useSelector((state) => state.streamify);
  if (!data) return null;

  const combinedData = data.active_users.monthly_data.map(
    (activeUserData, index) => {
      return {
        month: activeUserData.month,
        active_users: activeUserData.active_users,
        registered_users:
          data.registered_users.monthly_data[index].registered_users,
        streams: data.streams.monthly_data[index].streams,
      };
    }
  );

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <h1 className="text-lg font-bold">User Analytics</h1>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={combinedData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="active_users"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="registered_users"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="streams"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;

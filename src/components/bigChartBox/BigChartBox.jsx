import { useState } from "react";
import { formatNumber } from "../../utils/index";
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
  const [timeframe, setTimeframe] = useState("monthly");
  if (!data) return null;

  const getCombinedData = () => {
    const selectedData =
      timeframe === "monthly"
        ? data.active_users.monthly_data
        : data.active_users.weekly_data;

    return selectedData.map((activeUserData, index) => ({
      label:
        timeframe === "monthly" ? activeUserData.month : activeUserData.week,
      active_users: activeUserData.active_users,
      registered_users:
        timeframe === "monthly"
          ? data.registered_users.monthly_data[index].registered_users
          : data.registered_users.weekly_data[index].registered_users,
      streams:
        timeframe === "monthly"
          ? data.streams.monthly_data[index].streams
          : data.streams.weekly_data[index].streams,
    }));
  };

  const combinedData = getCombinedData();
  return (
    <div className="w-full h-full flex flex-col justify-between">
     <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Streaming Analytics</h1>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="p-2 rounded w-32 bg-gray-700 border border-none" 
        >
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>

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
            <XAxis dataKey="label"/>
            <YAxis />
            <Tooltip
              contentStyle={{ background: "transparent", border: "none" }}
              labelStyle={{ display: "none" }}
              formatter={(value, name) => {
                return [formatNumber(value), name];
              }}
            />
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

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
          className="p-2 rounded w-32 bg-gray-200 dark:bg-gray-700 border border-gray-900 dark:border-none" 
        >
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>

      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <AreaChart
            data={combinedData}
            margin={{
              top: 10,
              right: 20,
              left: 30,
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
              stroke="#6a5bd1" 
              fill="#6a5bd1"
            />
            <Area
              type="monotone"
              dataKey="registered_users"
              stackId="1"
              stroke="#5aa973"
              fill="#5aa973" 
            />
            <Area
              type="monotone"
              dataKey="streams"
              stackId="1"
              stroke="#e2a100"
              fill="#e2a100" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;

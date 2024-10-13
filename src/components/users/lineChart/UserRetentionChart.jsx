import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const UserRetentionChart = ({ data }) => {
  if (!data) return null;
  const [retentionPeriod, setRetentionPeriod] = useState("weekly");

  const handleChange = (event) => {
    setRetentionPeriod(event.target.value);
  };

  const retentionData =
    retentionPeriod === "weekly"
      ? data.weekly_data
      : data.monthly_data;
  return (
    <div>
        <div className="flex justify-between items-center">
      <h2 className="lg:text-xl text-md font-semibold text-gray-100 mb-4">
        User Retention
      </h2>
      <select
        onChange={handleChange}
        value={retentionPeriod}
        className="mb-4 p-2 border border-none bg-gray-700 rounded lg:w-32 w-24"
      >
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={retentionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis  dataKey={retentionPeriod === "weekly" ? "name" : "month"} stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="retention"
              stroke="#8B5CF6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserRetentionChart;

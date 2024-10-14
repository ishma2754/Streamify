import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const UserActivityHeatmap = ({ data }) => {
  if (!data || !data.colors) return null;
  const timeSlots = Object.keys(data.colors);
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold font-poppins dark:text-gray-100 text-gray-900 mb-4">
        User Activity Heatmap
      </h2>
      <div className="w-full" style={{ height: 300 }}>
        <ResponsiveContainer >
          <BarChart data={data.data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
              cursor={{ fill: "none" }}
            />
            <Legend />
            {timeSlots.map((slot) => (
              <Bar
                key={slot}
                dataKey={slot}
                stackId="a"
                fill={data.colors[slot]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserActivityHeatmap;

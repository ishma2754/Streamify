import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";

const data = [
  { name: "Premium Subscribers", value: 2.5, color: "#0088FE" },
  { name: "Ad-Supported Users", value: 0.8, color: "#00C49F" },
  { name: "Merchandise Sales", value: 0.15, color: "#FFBB28" },
  { name: "Podcast Sponsorships", value: 0.35, color: "#FF8042" },
  { name: "Other Sources", value: 0.1, color: "#FF5733" },
];
const totalRevenue = data.reduce((acc, item) => acc + item.value, 0);
const PieChartBox = ({data}) => {
  return (
    <div className="h-full flex flex-col justify-between pieChartBox">
      <h1 className="text-lg font-bold">Streamify Revenue Breakdown</h1>
      <div className="flex items-center justify-center w-full h-full chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
              formatter={(value, name) => {
                const percentage = ((value / totalRevenue) * 100).toFixed(1);
                return [`${value}B (${percentage}%)`, name];
              }}
            />
            <Pie
              data={data}
              innerRadius="70%"
              outerRadius="80%"
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between gap-2 options text-sm">
        {data.map((item) => (
          <div className="flex flex-col gap-2 option" key={item.name}>
            <div className="flex items-center gap-2 title">
              <div
                className="w-2.5 h-2.5 rounded-full dot"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;

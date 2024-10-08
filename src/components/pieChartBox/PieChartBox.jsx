import { useSelector } from "react-redux";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";
const PieChartBox = () => {
  const { data } = useSelector((state) => state.streamify);
  if (!data || !data.revenue) return null;

  const revenue = data.revenue;

  return (
    <div className="h-full flex flex-col justify-between pieChartBox">
      <h1 className="text-lg font-bold">
        Streamify Revenue Breakdown {revenue.total_revenue}B
      </h1>
      <div className="flex items-center justify-center w-full h-full chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
              formatter={(value, name) => {
                const sourceItem = revenue.sources.find(
                  (item) => item.name === name
                );
                const percentage = (
                  (sourceItem.value / revenue.total_revenue) *
                  100
                ).toFixed(1);
                return [`${value}B (${percentage}%)`, name];
              }}
            />
            <Pie
              data={revenue.sources}
              innerRadius="70%"
              outerRadius="80%"
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {revenue.sources.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col gap-3 mt-6 options text-sm">
        {revenue.sources.map((item) => (
          <div
            className="flex justify-between items-center option"
            key={item.name}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="font-medium">{item.name}</span>
            </div>

            <span className="text-gray-200">{item.value}B</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;

import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

const BarChartBox = ({ data }) => {
  return (
    <div className="w-full h-full">
      <h1 className="text-xl mb-5">{data.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={data.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "0.5rem" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={data.dataKey} fill={data.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;

import { Link } from "react-router-dom";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

const ChartBox = ({ data }) => {
  if (!data) return null;

  return (
    <div className="flex h-full">
      <div className="flex flex-col justify-between flex-2">
        <div className="flex items-center title">
          <span>{data.title}</span>
        </div>
        <h1>{data.total}</h1>
        <Link to="/" style={{ color: data.color }}>
          View All
        </Link>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="w-full h-full chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={data.monthly_data}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={data.dataKey}
                stroke={data.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col text-right texts">
          <span
            className="font-bold text-2xl percentage"
            style={{
              color: data.growth_percentage < 0 ? "tomato" : "limegreen",
            }}
          >
            {data.growth_percentage}
          </span>
          <span className="text-sm duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;

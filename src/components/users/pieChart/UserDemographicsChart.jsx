import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
  } from "recharts";
  
  const UserDemographicsChart = ({ data }) => {
    if (!data) return null;
    const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];
   
    return (
      <div className="">
        <h2 className="text-xl font-semibold font-poppins dark:text-gray-100 text-gray-900 mb-4">
          User Demographics
        </h2>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data.data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({percent }) =>
                  `${(percent * 100).toFixed(0)}%`
                }
              >
                {data.data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  borderColor: "#4B5563",
                }}
                itemStyle={{ color: "#E5E7EB" }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default UserDemographicsChart;
  
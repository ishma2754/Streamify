import {
    ResponsiveContainer,
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Legend,
    Tooltip,
  } from "recharts";

const UserSegmentation = ({data}) => {
    if (!data) return null;
  return (
    <div>
    <h2 className="text-xl font-semibold font-poppins text-gray-900 dark:text-gray-100 mb-4">
      User Segmentation
    </h2>
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={data.data}
        >
          <PolarGrid stroke="#374151" />
          <PolarAngleAxis dataKey="subject" stroke="#9CA3AF" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#9CA3AF" />
          <Radar
            name="Segment A"
            dataKey="A"
            stroke="#8B5CF6"
            fill="#8B5CF6"
            fillOpacity={0.6}
          />
          <Radar
            name="Segment B"
            dataKey="B"
            stroke="#10B981"
            fill="#10B981"
            fillOpacity={0.6}
          />
          <Legend />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31, 41, 55, 0.8)",
              borderColor: "#4B5563",
            }}
            itemStyle={{ color: "#E5E7EB" }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  </div>
  )
}

export default UserSegmentation
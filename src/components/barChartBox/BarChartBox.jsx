import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { useSelector } from "react-redux";

const getTopStreamedSongs = (data) => {
  const sortedData = [...data].sort((a, b) => b.streams - a.streams);
  const topSongs = sortedData.slice(0, 5).map((song) => ({
    song_name: song.song_name,
    streams: song.streams,
    artist_name: song.artist_name,
  }));
  return topSongs;
};

const BarChartBox = () => {
  const { data } = useSelector((state) => state.streamify);
  if (!data || !data.streaming_data) return null;
  const streamingData = data.streaming_data;
  const topSongsData = getTopStreamedSongs(streamingData);

  const barChartData = {
    title: "Top 5 Streamed Songs",
    dataKey: "streams",
    color: "#8884d8",
    chartData: topSongsData,
  };

  return (
    <div className="w-full h-full ">
      <h1 className="text-xl mb-5">{barChartData.title}</h1>
      <div className="">
        <ResponsiveContainer width="99%" height={300}>
          <BarChart data={barChartData.chartData}>
            <XAxis dataKey="song_name" tick={{ fontSize: 15 }} angle={-20} />
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "0.5rem" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={barChartData.dataKey} fill={barChartData.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;

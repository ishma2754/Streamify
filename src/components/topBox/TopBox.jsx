import { useSelector } from "react-redux";

const TopBox = () => {
  const { data } = useSelector((state) => state.streamify); 
  if(!data) return null;
  const topStreamingSongs = data.streaming_data ? data.streaming_data.slice(0, 7) : []; 

  return (
    <div className="topBox">
      <h1 className="mb-5">Top Streaming Songs</h1>
      <div className="list">
        {topStreamingSongs.map((song) => (
          <div
            className="flex items-center justify-between mb-7 listItem"
            key={song.artist_id} 
          >
            <div className="flex gap-5 user">
              <img
                src={song.image_url} 
                alt={song.artist_name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col gap-1 userTexts">
                <span className="font-medium text-sm username">
                  {song.artist_name} 
                </span>
                <span className="text-xs email">
                  {song.song_name} 
                </span>
              </div>
            </div>
            <span className="font-medium amount ml-4">
              {song.streams.toLocaleString()} 
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;

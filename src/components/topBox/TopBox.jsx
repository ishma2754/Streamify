import { useSelector } from "react-redux";

const TopBox = () => {
  const { data } = useSelector((state) => state.streamify);
  if (!data) return null;
  const topStreamingSongs = data.streaming_data
    ? data.streaming_data.slice(0, 7)
    : [];

  return (
    <div>
      <h1 className="mb-5">Top Streaming Songs</h1>
      <div>
        {topStreamingSongs.map((song) => (
          <div
            className="flex items-center justify-between mb-7 "
            key={song.artist_id}
          >
            <div className="flex gap-5">
              <img
                src={song.image_url}
                alt={song.artist_name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col gap-1">
                <span className="font-medium lg:text-sm text-xs truncate w-28 md:w-40">
                  {song.artist_name}
                </span>
                <span className="text-xs truncate w-28 md:w-40">
                  {song.song_name}
                </span>
              </div>
            </div>
            <div className="font-medium  ml-1 lg:ml-4 ">{song.streams}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;

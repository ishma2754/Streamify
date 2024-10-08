export const getTopStreamedSongs = (data) => {
    const sortedData = [...data].sort((a, b) => b.streams - a.streams);
    const topSongs = sortedData.slice(0, 5).map((song) => ({
      song_name: song.song_name,
      streams: song.streams,
      artist_name: song.artist_name,
    }));
    return topSongs;
  };
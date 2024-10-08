import { Table } from "../../components/index";
import { useSelector } from "react-redux";

const Artists = () => {
  const { data } = useSelector((state) => state.streamify);

  const streamData = data?.streaming_data || [];

  return (
    <div className="p-3">
    <h1 className="text-3xl font-semibold mb-6 text-gray-200">Artists</h1>
    {streamData.length === 0 ? (
      <p>No artists available.</p>
    ) : (
      <Table data={streamData} />
    )}
  </div>
  );
};

export default Artists;

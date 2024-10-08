import { useState } from "react";
import { Direction, Pagination, InputField } from "../index";
import usePagination from "../../hook/pagination/usePagination"; 
import { FaEye } from 'react-icons/fa'; 
import { Link } from "react-router-dom"; 

const Table = ({ data }) => {
  if (!data) return null;

  const [sort, setSort] = useState({
    keyToSort: "song_name",
    direction: "asc",
  });
  const [filter, setFilter] = useState({ artist: "", songName: "" });
  const itemsPerPage = 5;

  const headers = [
    { id: 1, KEY: "song_name", LABEL: "Song Name" },
    { id: 2, KEY: "song_id", LABEL: "Song ID" },
    { id: 3, KEY: "artist_name", LABEL: "Artist" },
    { id: 4, KEY: "date_of_stream", LABEL: "Date Streamed" },
    { id: 5, KEY: "streams", LABEL: "Stream Count" },
    { id: 6, KEY: "artist_id", LABEL: "Artist ID" }, // Keep this for display
  ];

  const handleHeaderClick = (header) => {
    setSort((prev) => ({
      keyToSort: header.KEY,
      direction:
        header.KEY === prev.keyToSort
          ? prev.direction === "asc"
            ? "desc"
            : "asc"
          : "desc",
    }));
  };

  const getSortedArray = (arrayToSort) => {
    return [...arrayToSort].sort((a, b) => {
      const aValue = a[sort.keyToSort];
      const bValue = b[sort.keyToSort];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sort.direction === "asc"
          ? aValue.localeCompare(bValue, undefined, { sensitivity: "base" })
          : bValue.localeCompare(aValue, undefined, { sensitivity: "base" });
      } else {
        return sort.direction === "asc" ? aValue - bValue : bValue - aValue;
      }
    });
  };

  const filteredData = data.filter((item) => {
    return (
      item.artist_name.toLowerCase().includes(filter.artist.toLowerCase()) &&
      item.song_name.toLowerCase().includes(filter.songName.toLowerCase())
    );
  });

  const sortedData = getSortedArray(filteredData.length ? filteredData : data);
  const { currentPage, totalPages, currentItems, paginate } = usePagination(sortedData, itemsPerPage);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <div className="filter-container mb-4 flex gap-4">
        <InputField
          type="text"
          placeholder="Filter by artist"
          value={filter.artist}
          onChange={(e) => {
            setFilter({ ...filter, artist: e.target.value });
            paginate(1); 
          }}
        />
        <InputField
          type="text"
          placeholder="Filter by song name"
          value={filter.songName}
          onChange={(e) => {
            setFilter({ ...filter, songName: e.target.value });
            paginate(1);
          }}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-gray-100 text-left rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              {headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 text-sm font-medium cursor-pointer"
                  onClick={() => handleHeaderClick(header)}
                  aria-sort={sort.keyToSort === header.KEY ? sort.direction : "none"}
                >
                  <div className="flex items-center space-x-1">
                    <span>{header.LABEL}</span>
                    {header.KEY === sort.keyToSort && <Direction direction={sort.direction} />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.length > 0 ? (
              currentItems.map((row) => (
                <tr key={row.song_id} className="hover:bg-gray-50 transition-colors">
                  {headers.map((header) => (
                    <td key={header.id} className="px-4 py-2 text-sm text-gray-700">
                      {header.KEY === "artist_name" ? (
                        <div className="flex items-center">
                          <img src={row.image_url} alt={row.artist_name} className="w-10 h-10 rounded-full mr-3 object-cover" />
                          <span>{row.artist_name}</span>
                        </div>
                      ) : header.KEY === "artist_id" ? (
                        <div className="flex items-center">
                          <span className="mr-2 w-10 text-right">{row.artist_id}</span>
                          <Link to={`/artists/${row.artist_id}`} className="ml-2  text-blue-500 hover:underline">
                            <FaEye className="text-lg"/> 
                          </Link>
                        </div>
                      ) : (
                        row[header.KEY]
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={headers.length} className="px-4 py-2 text-sm text-gray-700 text-center">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination totalPages={totalPages} paginate={paginate} currentPage={currentPage} />
    </div>
  );
};

export default Table;

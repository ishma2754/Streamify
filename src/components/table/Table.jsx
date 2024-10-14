import { useState } from "react";
import { Direction, Pagination, InputField } from "../index";
import usePagination from "../../hook/pagination/usePagination";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Table = ({ data }) => {
  if (!data) return null;

  const [sort, setSort] = useState({
    keyToSort: "artist_id",
    direction: "asc",
  });
  const [filter, setFilter] = useState({ artist: "", songName: "" });
  const itemsPerPage = 5;

  const headers = [
    { id: 1, KEY: "artist_id", LABEL: "Artist ID" },
    { id: 2, KEY: "artist_name", LABEL: "Artist" },
    { id: 3, KEY: "song_id", LABEL: "Song ID" },
    { id: 4, KEY: "song_name", LABEL: "Song Name" },
    { id: 5, KEY: "date_of_stream", LABEL: "Date Streamed" },
    { id: 6, KEY: "streams", LABEL: "Stream Count" },
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

      if (typeof aValue === "number" && typeof bValue === "number") {
        if (aValue < bValue) return sort.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sort.direction === "asc" ? 1 : -1;
        return 0;
      }

      const aStr = String(aValue).toLowerCase();
      const bStr = String(bValue).toLowerCase();

      if (aStr < bStr) return sort.direction === "asc" ? -1 : 1;
      if (aStr > bStr) return sort.direction === "asc" ? 1 : -1;
      return 0;
    });
  };

  const filteredData = data.filter((item) => {
    const artistMatch = item.artist_name
      .toLowerCase()
      .includes(filter.artist.toLowerCase());
    const songNameMatch = item.song_name
      .toLowerCase()
      .includes(filter.songName.toLowerCase());

    return artistMatch && songNameMatch;
  });

  const sortedData = getSortedArray(filteredData);
  const { currentPage, totalPages, currentItems, paginate } = usePagination(
    sortedData,
    itemsPerPage
  );

  return (
    <div className="p-6 dark:bg-gray-800 bg-gray-200 shadow-lg rounded-lg">
      <div className="mb-4 flex flex-col sm:flex-row gap-4 ">
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
        <table className="border  dark:border-gray-700 border-gray-200 bg-gray-300 dark:bg-gray-900 text-left">
          <thead className="dark:bg-gray-600 bg-gray-400 text-gray-900 dark:text-gray-200 font-poppins">
            <tr>
              {headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 text-sm sm:text-lg font-medium cursor-pointer min-w-[165px]"
                  onClick={() => handleHeaderClick(header)}
                  aria-sort={
                    sort.keyToSort === header.KEY ? sort.direction : "none"
                  }
                >
                  <div className="flex items-center space-x-1">
                    <span>{header.LABEL}</span>
                    {header.KEY === sort.keyToSort && (
                      <Direction direction={sort.direction} />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="dark:bg-gray-900 bg-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
            {currentItems.length > 0 ? (
              currentItems.map((row) => (
                <tr
                  key={row.song_id}
                  className="dark:hover:bg-gray-800 hover:bg-gray-200 transition-colors"
                >
                  {headers.map((header) => (
                    <td
                      key={header.id}
                      className="px-4 py-2 text-sm sm:text-lg dark:text-gray-300 text-gray-900 min-w-[165px]"
                    >
                      {header.KEY === "artist_name" ? (
                        <div className="flex-1 items-center">
                          <img
                            src={row.image_url}
                            alt={row.artist_name}
                            className="w-10 h-10 rounded-full mr-3 object-cover"
                          />
                          <span>{row.artist_name}</span>
                        </div>
                      ) : header.KEY === "artist_id" ? (
                        <div className="flex items-center">
                          <span className="mr-2 w-10 text-right">
                            {row.artist_id}
                          </span>
                          <Link
                            to={`/artists/${row.artist_id}`}
                            className="ml-2 dark:text-blue-400 text-blue-500 hover:underline"
                          >
                            <FaEye className="text-2xl" />
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
                <td
                  colSpan={headers.length}
                  className="px-4 py-2 text-sm sm:text-lg text-gray-900 dark:text-gray-400 text-center"
                >
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Table;

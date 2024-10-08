import React from "react";

const Pagination = ({ totalPages, paginate, currentPage }) => {
  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <li key={index + 1}>
            <button
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

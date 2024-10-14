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
                  : "dark:bg-gray-200 bg-gray-300 text-gray-900 dark:text-gray-700 dark:hover:bg-blue-100 hover:bg-blue-200"
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

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate an array of page numbers based on total pages
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <ul className="page-numbers">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={currentPage === pageNumber ? 'active' : ''}
          >
            {pageNumber}
          </li>
        ))}
      </ul>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

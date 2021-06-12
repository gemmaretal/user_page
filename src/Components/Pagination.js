import React from 'react';

export default function Pagination({ usersPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination">
        {pageNumbers.map(number => (
          <div key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className="page-button"
            >
              {number}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
}

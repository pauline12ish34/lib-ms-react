import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='inline-flex -space-x-px'>
        {pageNumbers.map(number => (
          <li key={number} >
            <a onClick={() => paginate(number)} href='!#' className='text-blue-500 py-2 px-3 leading-tight bg-white border border-gray-300 hover:bg-gray-200 hover:text-red-600 hover:border-red-500'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;




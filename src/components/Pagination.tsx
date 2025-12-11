import React from 'react';
import { useSelector } from 'react-redux';
import { selectPage } from '../redux/archive/selectors';
import { selectTotalPages } from '../redux/archive/selectors';
import clsx from 'clsx';

interface PaginationProps {
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ onPageChange }) => {
  const currentPage = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className="flex justify-center gap-2 mt-6">
      <button
        className={clsx(
          'px-3 py-1 rounded-lg border text-sm',
          currentPage === 1
            ? 'cursor-not-allowed opacity-40'
            : 'hover:bg-gray-200'
        )}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ‹
      </button>

      {pages.map(page => (
        <button
          key={page}
          className={clsx(
            'px-3 py-1 rounded-lg border text-sm',
            currentPage === page
              ? 'bg-[#993333] text-white border-[#993333]'
              : 'hover:bg-gray-200 text-gray-700'
          )}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={clsx(
          'px-3 py-1 rounded-lg border text-sm',
          currentPage === totalPages
            ? 'cursor-not-allowed opacity-40'
            : 'hover:bg-gray-200'
        )}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;

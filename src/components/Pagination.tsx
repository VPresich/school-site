import React from 'react';
import { useSelector } from 'react-redux';
import { selectPage, selectTotalPages } from '../redux/archive/selectors';
import clsx from 'clsx';

interface PaginationProps {
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ onPageChange }) => {
  const currentPage = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  if (totalPages <= 1) return null;

  const createPages = () => {
    const pages: (number | 'dots')[] = [];
    pages.push(1);

    if (currentPage > 3) pages.push('dots');

    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push('dots');

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const pages = createPages();

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

      {pages.map((p, idx) =>
        p === 'dots' ? (
          <span key={idx} className="px-3 py-1 text-gray-500">
            …
          </span>
        ) : (
          <button
            key={p}
            className={clsx(
              'px-3 py-1 rounded-lg border text-sm',
              currentPage === p
                ? 'bg-[#993333] text-white border-[#993333]'
                : 'hover:bg-gray-200 text-gray-700'
            )}
            onClick={() => onPageChange(p as number)}
          >
            {p}
          </button>
        )
      )}

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

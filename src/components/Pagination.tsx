import React from 'react';
import { useSelector } from 'react-redux';
import { selectPage, selectTotalPages } from '../redux/archive/selectors';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsRight,
} from 'react-icons/fi';
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

    // Always show first page
    pages.push(1);

    // Left dots
    if (currentPage > 3) pages.push('dots');

    // Middle pages
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    // Right dots
    if (currentPage < totalPages - 2) pages.push('dots');

    // Always show last page
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const pages = createPages();

  return (
    <div className="flex justify-center gap-2 mt-6 flex-wrap">
      {/* First page button */}
      <button
        className={clsx(
          'px-2 py-1 rounded-lg border text-sm transition-all duration-300',
          currentPage === 1
            ? 'cursor-not-allowed opacity-40'
            : 'hover:bg-gray-200 cursor-pointer hover:border-gray-200'
        )}
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        <FiChevronsLeft size={18} className="text-gray-500" />
      </button>

      {/* Previous button */}
      <button
        className={clsx(
          'px-2 py-1 rounded-lg border text-sm transition-all duration-300',
          currentPage === 1
            ? 'cursor-not-allowed opacity-40'
            : 'hover:bg-gray-200 cursor-pointer hover:border-gray-200'
        )}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <FiChevronLeft size={18} className="text-gray-500" />
      </button>

      {/* Pages */}
      {pages.map((p, idx) =>
        p === 'dots' ? (
          <span
            key={`dots-${idx}`}
            className="px-3 py-1 text-gray-500 select-none"
          >
            …
          </span>
        ) : (
          <button
            key={`page-${p}`}
            className={clsx(
              'px-3 py-1 rounded-lg border text-sm transition-all duration-300',
              currentPage === p
                ? 'bg-[#993333] text-white border-[#993333] cursor-pointer'
                : 'hover:bg-gray-200 text-gray-700 cursor-pointer hover:border-gray-200'
            )}
            onClick={() => onPageChange(p as number)}
          >
            {p}
          </button>
        )
      )}

      {/* Next button */}
      <button
        className={clsx(
          'px-2 py-1 rounded-lg border text-sm transition-all duration-300',
          currentPage === totalPages
            ? 'cursor-not-allowed opacity-40'
            : 'hover:bg-gray-200 cursor-pointer hover:border-gray-200'
        )}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <FiChevronRight size={18} className="text-gray-500" />
      </button>
      <button
        className={clsx(
          'px-2 py-1 rounded-lg border text-sm transition-all duration-300',
          currentPage === totalPages
            ? 'cursor-not-allowed opacity-40'
            : 'hover:bg-gray-200 cursor-pointer hover:border-gray-200'
        )}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        <FiChevronsRight size={18} className="text-gray-500" />
      </button>
    </div>
  );
};

export default Pagination;

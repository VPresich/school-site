import React from 'react';
import clsx from 'clsx';

interface PaginationButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  children,
  disabled = false,
  active = false,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'px-3 py-1 rounded-lg text-sm border transition-all duration-200',

        disabled
          ? 'cursor-not-allowed opacity-40 shadow-none'
          : 'cursor-pointer border-transparent hover:bg-gray-200 hover:shadow-md',

        active && 'bg-[#993333] text-white border-[#993333] shadow-md'
      )}
    >
      {children}
    </button>
  );
};

export default PaginationButton;

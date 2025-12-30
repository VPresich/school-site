import React, { FC } from 'react';
import { FiSearch } from 'react-icons/fi';

interface MobileZoomIconProps {
  className?: string;
}

const MobileZoomIcon: FC<MobileZoomIconProps> = ({ className }) => {
  return (
    <span
      className={`
        absolute top-2 right-2
        md:hidden
        bg-black/70
        p-1
        rounded-full
        shadow-lg
        flex items-center justify-center
        ${className ?? ''}
        pointer-events-none
      `}
      aria-hidden="true"
    >
      <FiSearch className="w-4 h-4 text-white" />
    </span>
  );
};

export default MobileZoomIcon;

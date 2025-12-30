import React, { FC } from 'react';
import { FiSearch } from 'react-icons/fi';

interface MobileZoomIconProps {
  className?: string;
}

const MobileZoomIcon: FC<MobileZoomIconProps> = ({ className }) => {
  return (
    <span
      className={`
        absolute top-3 right-3
        md:hidden
        bg-black/60
        p-2
        rounded-full
        shadow-lg
        flex items-center justify-center
        ${className ?? ''}
        pointer-events-none
      `}
      aria-hidden="true"
    >
      <FiSearch className="w-5 h-5 text-white" />
    </span>
  );
};

export default MobileZoomIcon;

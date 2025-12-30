import React, { FC } from 'react';
import { FiSearch } from 'react-icons/fi';

interface MobileZoomIconProps {
  className?: string;
}

const MobileZoomIcon: FC<MobileZoomIconProps> = ({ className }) => {
  return (
    <span
      className={`
        absolute top-1 right-1
        md:hidden
        bg-black/50
        p-1.5
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

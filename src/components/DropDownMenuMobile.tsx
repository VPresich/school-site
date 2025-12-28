import React from 'react';
import { GiMusicalNotes } from 'react-icons/gi';
import { FaChevronDown } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from './NavBar/Navbar.types';

interface DropDownMenuMobileProps extends MenuItem {
  id: number;
  openIndex: number | null;
  setOpenIndex: (id: number | null) => void;
  closeMobileMenu: () => void;
}

const DropDownMenuMobile: React.FC<DropDownMenuMobileProps> = ({
  id,
  title,
  to,
  items = [],
  openIndex,
  setOpenIndex,
  closeMobileMenu,
}) => {
  const currentPath = useLocation().pathname;

  const isOpen = openIndex === id;
  const isActive = currentPath === to;

  // переход по основному пункту
  const handleNavigate = () => {
    closeMobileMenu();
  };

  // открытие / закрытие подменю ТОЛЬКО по стрелке
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenIndex(isOpen ? null : id);
  };

  return (
    <div className="flex flex-col w-full">
      <Link
        to={to}
        onClick={handleNavigate}
        className={`flex items-center justify-between w-full px-4 py-2 font-medium 
          rounded-t-md transition-colors

          ${isActive ? 'bg-[#ffd6d6] text-[#993333]' : ''} 
          ${isOpen && !isActive ? 'bg-[#ffecec] text-[#993333]' : ''}
          ${!isOpen && !isActive ? 'bg-white text-[#993333]' : ''}
        `}
      >
        <div className="flex items-center gap-2">
          <GiMusicalNotes className="text-xl text-[#993333]" />
          <span>{title}</span>
        </div>

        {items.length > 0 && (
          <FaChevronDown
            onClick={handleToggle}
            className={`ml-2 text-[#993333] transition-transform duration-300
              ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        )}
      </Link>

      {isOpen && items.length > 0 && (
        <div
          className="flex flex-col bg-white/90 backdrop-blur-md 
                     text-[#993333] border-t border-gray-200 rounded-b-md
                     animate-slideDown"
        >
          {items.map((subItem, idx) => {
            const subActive = currentPath === subItem.path;

            return (
              <Link
                key={idx}
                to={subItem.path}
                onClick={closeMobileMenu}
                className={`relative px-6 py-2 flex justify-between items-center 
                  transition-colors 
                  ${
                    subActive
                      ? 'bg-[#ffe3e3] font-semibold'
                      : 'hover:bg-gray-100'
                  }
                `}
              >
                {subItem.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDownMenuMobile;

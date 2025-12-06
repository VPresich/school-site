import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "./NavBar/Navbar.types";

const DropDownMenu: React.FC<MenuItem> = ({ title, to, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative flex-1">
      <button
        onClick={toggleMenu}
        className="
          relative 
          w-full 
          py-2 
          pl-4 pr-8   
          text-left   
          font-medium 
          text-white 
          bg-[#993333] 
          hover:bg-[#d66044] 
          transition-colors 
          duration-200 
          rounded-t-[10px]    
        "
      >
        <Link to={to} className="block w-full">
          {title}
        </Link>

        {items && items.length > 0 && (
          <svg
            className={`
              w-4 h-4 
              absolute 
              right-3 top-1/2 
              -translate-y-1/2 
              transform 
              transition-transform 
              duration-200 
              ${isOpen ? "rotate-180" : ""}
            `}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>

      {items && isOpen && (
        <div className="absolute left-0 w-full bg-[#993333]/90 backdrop-blur-md text-white rounded-b-md shadow-lg z-10">
          {items.map((subItem, idx) => (
            <Link
              key={idx}
              to={subItem.path}
              className="block px-4 py-2 hover:bg-[#d66044] transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { selectOpenIndex } from "../redux/menu/selector";
import { setOpenIndex, closeMenu } from "../redux/menu/slice";
import { Link } from "react-router-dom";
import { MenuItem } from "./NavBar/Navbar.types";

interface DropDownMenuProps extends MenuItem {
  id: number;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  id,
  title,
  to,
  items = [],
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const openIndex = useSelector(selectOpenIndex);
  const isOpen = openIndex === id;

  const handleClick = () => {
    dispatch(setOpenIndex(isOpen ? null : id));
  };

  return (
    <div className="relative group flex-1">
      {/* Верхняя кнопка */}
      <button
        onClick={handleClick}
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
          flex justify-between items-center
        "
      >
        <Link to={to} className="block w-full">
          {title}
        </Link>

        {items.length > 0 && (
          <svg
            className={`
              w-4 h-4 
              transition-transform duration-200
              ${isOpen ? "rotate-180" : ""} group-hover:rotate-180
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

      {/* Подменю */}
      {items.length > 0 && (
        <div
          className={`
            absolute left-0 top-full w-full bg-[#993333]/90 backdrop-blur-md text-white rounded-b-md shadow-lg z-10
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            ${isOpen ? "opacity-100 visible" : ""}
            transition-opacity duration-300
          `}
        >
          {items.map((subItem, idx) => (
            <Link
              key={idx}
              to={subItem.path}
              className="block px-4 py-2 hover:bg-[#d66044] transition-colors duration-200"
              onClick={() => dispatch(closeMenu())}
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

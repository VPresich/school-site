import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { selectOpenIndex } from "../redux/menu/selector";
import { setOpenIndex, closeMenu } from "../redux/menu/slice";
import { Link } from "react-router-dom";
import { MenuItem } from "./NavBar/Navbar.types";

interface DropDownMenuProps extends MenuItem {
  id: number; // уникальный идентификатор для логики открытия
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

  // клик по стрелке для открытия/закрытия
  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(setOpenIndex(isOpen ? null : id));
  };

  // клик по ссылке закрывает меню
  const handleLinkClick = () => {
    dispatch(closeMenu());
  };

  return (
    <div className="relative flex-1">
      {/* Верхняя кнопка с названием и стрелкой */}
      <button
        onClick={handleToggle}
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
        <Link to={to} className="block w-full" onClick={handleLinkClick}>
          {title}
        </Link>

        {items.length > 0 && (
          <svg
            className={`
              w-4 h-4 
              absolute 
              right-3 top-1/2 
              -translate-y-1/2 
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

      {/* Подменю */}
      {items.length > 0 && isOpen && (
        <div className="absolute left-0 w-full bg-[#993333]/90 backdrop-blur-md text-white rounded-b-md shadow-lg z-10">
          {items.map((subItem, idx) => (
            <Link
              key={idx}
              to={subItem.path}
              className="block px-4 py-2 hover:bg-[#d66044] transition-colors duration-200"
              onClick={handleLinkClick}
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

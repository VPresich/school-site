import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setOpenIndex } from "../redux/menu/slice";
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

  const handleClick = () => {
    dispatch(setOpenIndex(id));
  };

  return (
    <div className="relative group flex-1">
      <Link
        to={to}
        onClick={handleClick}
        className="
          relative w-full py-2 pl-4 pr-8 block
          font-medium text-white bg-[#993333]
          hover:bg-[#d66044] transition-colors
          rounded-t-[10px]
        "
      >
        {title}
      </Link>

      {items.length > 0 && (
        <div
          className="
            absolute left-0 top-full w-full
            bg-[#993333]/90 backdrop-blur-md text-white rounded-b-md shadow-lg z-10
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transition-all duration-300
          "
        >
          {items.map((subItem, idx) => (
            <Link
              key={idx}
              to={subItem.path}
              onClick={handleClick}
              className="block px-4 py-2 hover:bg-[#d66044] transition-colors"
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

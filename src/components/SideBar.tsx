import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { selectActiveMenuItem } from "../redux/menu/selector";
import { Link, useLocation } from "react-router-dom";
import { MenuItem } from "./NavBar/Navbar.types";

interface SidebarProps {
  menu: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menu }) => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const activeMenuItem = useSelector(selectActiveMenuItem);

  if (!activeMenuItem || !activeMenuItem.items) return null;

  return (
    <aside className="w-64 bg-white/80 backdrop-blur-md shadow-md p-4 flex flex-col gap-2">
      {activeMenuItem.items.map((subItem, idx) => (
        <Link
          key={idx}
          to={subItem.path}
          className={`block px-4 py-2 rounded hover:bg-[#d66044] hover:text-white transition-colors ${
            location.pathname === subItem.path
              ? "bg-[#993333] text-white"
              : "text-[#993333]"
          }`}
          // onClick={handleClick}
        >
          {subItem.label}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;

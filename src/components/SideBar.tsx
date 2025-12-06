import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { Link, useLocation } from "react-router-dom";
import { closeMenu } from "../redux/menu/slice";
import { MenuItem } from "./NavBar/Navbar.types";

interface SidebarProps {
  menu: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menu }) => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(closeMenu());
  };

  const activeMenu = menu.find(
    (item) =>
      location.pathname === item.to ||
      location.pathname.startsWith(item.to + "/")
  );

  if (!activeMenu || !activeMenu.items || activeMenu.items.length === 0)
    return null;

  return (
    <aside className="w-64 bg-white/80 backdrop-blur-md shadow-md p-4 flex flex-col gap-2">
      <h2 className="text-xl font-bold text-[#993333] mb-4">
        {activeMenu.title}
      </h2>
      {activeMenu.items.map((subItem, idx) => (
        <Link
          key={idx}
          to={subItem.path}
          className={`block px-4 py-2 rounded hover:bg-[#d66044] hover:text-white transition-colors ${
            location.pathname === subItem.path
              ? "bg-[#993333] text-white"
              : "text-[#993333]"
          }`}
          onClick={handleClick}
        >
          {subItem.label}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;

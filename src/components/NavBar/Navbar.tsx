import React from "react";
import DropDownMenu from "../DropDownMenu";
import { MenuItem } from "./Navbar.types";
import { menu } from "./MenuData";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white/30 backdrop-blur-md p-0 shadow-none">
      <div className="w-full flex justify-center gap-0">
        {menu.map((item: MenuItem, idx: number) => (
          <DropDownMenu
            key={idx}
            title={item.title}
            to={item.to}
            items={item.items || []}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

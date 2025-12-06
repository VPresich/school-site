import React from "react";
import { useSelector } from "react-redux";
import { selectOpenIndex } from "../../redux/menu/selector";
import DropDownMenu from "../DropDownMenu";
import { MenuItem } from "./Navbar.types";
import { menu } from "./MenuData";

const Navbar: React.FC = () => {
  const openIndex = useSelector(selectOpenIndex);

  return (
    <nav className="bg-white/30 backdrop-blur-md p-0 shadow-none">
      <div className="w-full max-w-7xl mx-auto flex justify-center gap-0">
        {menu.map((item: MenuItem, idx: number) => (
          <DropDownMenu
            key={idx} // для React
            id={idx} // логический id для открытия/закрытия
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

import React, { useState } from 'react';
import DropDownMenu from '../DropDownMenu';
import { MenuItem } from './Navbar.types';
import { menu } from './MenuData';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/30 backdrop-blur-md p-2 shadow-md relative">
      <div className="hidden md:flex w-full max-w-7xl mx-auto justify-center gap-0">
        {menu.map((item: MenuItem, idx: number) => (
          <DropDownMenu
            key={idx}
            id={idx}
            title={item.title}
            to={item.to}
            items={item.items || []}
          />
        ))}
      </div>

      <div className="flex md:hidden justify-between items-center px-4">
        <div className="text-xl font-bold text-[#993333]">Menu</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-700"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col bg-white w-full absolute top-full left-0 shadow-md z-10">
          {menu.map((item: MenuItem, idx: number) => (
            <DropDownMenu
              key={idx}
              id={idx}
              title={item.title}
              to={item.to}
              items={item.items || []}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

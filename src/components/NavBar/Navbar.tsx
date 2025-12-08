import React, { useState } from 'react';
import DropDownMenu from '../DropDownMenu';
import MobileMenu from './MobileMenu';
import { MenuItem } from './Navbar.types';
import { menu } from './MenuData';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

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

      <div className="flex justify-end md:hidden items-center px-4">
        <button onClick={toggleMenu} className="text-2xl text-[#993333]">
          <RxHamburgerMenu />
        </button>
      </div>

      <MobileMenu menu={menu} isOpen={isOpen} closeMenu={closeMenu} />
    </nav>
  );
};

export default Navbar;

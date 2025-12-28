import React, { useState } from 'react';
import DropDownMenuMobile from '../DropDownMenuMobile';
import { MenuItem } from './Navbar.types';
import { IoCloseSharp } from 'react-icons/io5';

interface MobileMenuProps {
  menu: MenuItem[];
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menu, isOpen, closeMenu }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  if (!isOpen) return null;

  return (
    <div
      className="md:hidden flex flex-col w-full absolute top-full left-0 shadow-md z-10 gap-4 p-4
                bg-[#993333]/90 backdrop-blur-md"
    >
      {/* <div className="flex justify-end p-4">
        <button onClick={closeMenu} className="text-2xl text-white">
          <IoCloseSharp />
        </button>
      </div> */}

      {menu.map((item: MenuItem, idx: number) => (
        <DropDownMenuMobile
          key={idx}
          id={idx}
          title={item.title}
          to={item.to}
          items={item.items || []}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          closeMobileMenu={closeMenu}
        />
      ))}
    </div>
  );
};

export default MobileMenu;

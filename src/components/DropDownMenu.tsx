import React from 'react';
import { GiMusicalNotes } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { setOpenIndex } from '../redux/menu/slice';
import { selectOpenIndex } from '../redux/menu/selector';
import { Link } from 'react-router-dom';
import { MenuItem } from './NavBar/Navbar.types';

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
  const isActive = openIndex === id;

  const handleClick = () => {
    dispatch(setOpenIndex(id));
  };

  return (
    <div className="relative group flex-1 z-20">
      <Link
        to={to}
        onClick={handleClick}
        className="
          relative w-full py-2 pl-8 pr-8 block
          font-medium text-white bg-[#993333]
          hover:bg-[#d66044] transition-colors
          rounded-t-[10px]
        "
      >
        <GiMusicalNotes
          className={`absolute z-200 left-2 top-1/2 -translate-y-1/2 text-white text-xl transition-all duration-300
          ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
         `}
        />

        {title}
      </Link>

      {items.length > 0 && id != 0 && (
        <div
          className=" absolute left-0 top-full w-full
           bg-[#993333]/70 backdrop-blur-lg text-white rounded-b-md shadow-lg z-100
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-300"
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

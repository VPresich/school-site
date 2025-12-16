import React from 'react';
import { useSelector } from 'react-redux';
import { GiMusicalScore } from 'react-icons/gi';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { MenuItem } from './NavBar/Navbar.types';
import {
  selectOpenIndex,
  selectActiveMenuItem,
  selectHomeMenu,
} from '../redux/menu/selector';

import MenuLink from './MenuLink';
import SidebarContacts from './SidebarContacts';

interface SidebarProps {
  menu: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = () => {
  const location = useLocation();
  const menuOpenIndex = useSelector(selectOpenIndex);
  const activeMenu = useSelector(selectActiveMenuItem);
  const homeMenu = useSelector(selectHomeMenu);
  const homeMenuItems = homeMenu?.items || [];
  const activeMenuItems = activeMenu?.items || [];

  return (
    <aside
      className="lg:flex flex-[0_0_20%] bg-white shadow-md pl-4 pr-2 py-6
  flex flex-col gap-1 rounded-xl sticky top-0 h-screen"
    >
      {/* Верхня прокручувана частина меню */}
      <div className="flex-1 overflow-y-auto min-h-0 pr-2">
        {homeMenuItems.map(subItem => (
          <MenuLink
            key={subItem.path}
            to={subItem.path}
            label={subItem.label}
            Icon={GiMusicalScore}
            isActive={location.pathname === subItem.path}
          />
        ))}

        <AnimatePresence>
          {menuOpenIndex &&
            activeMenuItems.map(subItem => (
              <motion.div
                key={subItem.path}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                exit={{ scaleY: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <MenuLink
                  to={subItem.path}
                  label={subItem.label}
                  Icon={GiMusicalScore}
                  isActive={location.pathname === subItem.path}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Контакти завжди внизу */}
      <div className="mt-auto flex justify-left">
        <SidebarContacts />
      </div>
    </aside>
  );
};

export default Sidebar;

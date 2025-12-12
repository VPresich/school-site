import React from 'react';
import { useSelector } from 'react-redux';
import { GiMusicalScore } from 'react-icons/gi';
import { selectActiveMenuItem } from '../redux/menu/selector';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from './NavBar/Navbar.types';
import DateRangePicker from './DataPicker/DateRangePicker/DateRangePicker';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  menu: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menu }) => {
  const location = useLocation();
  const activeMenuItem = useSelector(selectActiveMenuItem);

  if (!activeMenuItem || !activeMenuItem.items) return null;

  return (
    <aside
      className="lg:flex flex-[0_0_20%] bg-white/80 shadow-md p-6 flex flex-col gap-1 
      rounded-xl sticky top-0 h-screen overflow-auto"
    >
      <AnimatePresence>
        {activeMenuItem.items.map(subItem => {
          const isActive = location.pathname === subItem.path;
          return (
            <motion.div
              key={subItem.path}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <Link
                to={subItem.path}
                className={`flex items-center px-2 py-1 rounded hover:bg-[#d66044] hover:text-white transition-colors ${
                  isActive ? 'bg-[#993333] text-white' : 'text-[#993333]'
                }`}
              >
                <GiMusicalScore className="text-xl shrink-0 mr-2" />
                <span className="flex-1">{subItem.label}</span>
              </Link>
            </motion.div>
          );
        })}
      </AnimatePresence>
      <DateRangePicker
        onChange={({ startDate, endDate }) => {
          console.log('START:', startDate);
          console.log('END:', endDate);
        }}
      />
    </aside>
  );
};

export default Sidebar;

import React from 'react';
import { useSelector } from 'react-redux';
import { GiMusicalScore } from 'react-icons/gi';
import { selectActiveMenuItem } from '../redux/menu/selector';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from './NavBar/Navbar.types';
import FilterForm from './FilterForm/FilterForm';
import { motion, AnimatePresence } from 'framer-motion';
import { selectOpenIndex } from '../redux/menu/selector';
import Separator from './Separator';

interface SidebarProps {
  menu: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menu }) => {
  const location = useLocation();
  const activeMenuItem = useSelector(selectActiveMenuItem);
  const openIndex = useSelector(selectOpenIndex);

  if (!activeMenuItem || !activeMenuItem.items) return null;

  return (
    <aside
      className="lg:flex flex-[0_0_20%] bg-white/80 shadow-md pl-4 pr-2 py-6 flex flex-col gap-1 
      rounded-xl sticky top-0 h-screen"
    >
      <div className="flex-1 overflow-y-auto min-h-0 pr-2">
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
                  className={`flex font-semibold items-center px-2 py-2 rounded-t-xl hover:bg-[#d66044] hover:text-white transition-colors ${
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
        {openIndex === 0 && (
          <>
            <Separator />
            <p className="font-semibold text-[#993333] mt-4">Фільтр подій</p>
            <FilterForm />
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;

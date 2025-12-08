import React, { ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { fetchArchive } from '../redux/archive/operation';
import { selectActiveMenuItem } from '../redux/menu/selector';
import HeadSlider from './HeadSlider/HeadSlider';
import {
  successNotify,
  errNotify,
} from '../auxiliary/notification/notification';
import Sidebar from './SideBar';
import { menu } from './NavBar/MenuData';
import Navbar from './NavBar/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const activeMenuItem = useSelector(selectActiveMenuItem);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const initApp = async () => {
      try {
        const archiveList = await dispatch(fetchArchive()).unwrap();
        console.log('ARCHIVE: ', archiveList);
        successNotify('Success loading ARCHIVE');
      } catch {
        errNotify('Error loading ARCHIVE');
      }
    };

    initApp();
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div className="w-full py-4 text-center text-3xl font-bold text-[#993333] bg-white/0">
        Київська дитяча школа мистецтв №1
      </div>
      <HeadSlider />
      <Navbar />
      <div className="flex w-full max-w-7xl mx-auto gap-4">
        {activeMenuItem && (
          <div className="hidden lg:flex flex-[0_0_20%]">
            <Sidebar menu={menu} />
          </div>
        )}
        <main className="flex-[1_1_auto] p-0 md:p-4 bg-white rounded shadow">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

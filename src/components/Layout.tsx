import React, { ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { fetchArchivePage } from '../redux/archive/operations';
import { fetchHome } from '../redux/home/operations';
import { selectActiveMenuItem } from '../redux/menu/selector';
import { fetchAbout } from '../redux/about/operations';
import { fetchDepartments } from '../redux/departments/operations';
import { fetchMedia } from '../redux/media/operations';
import { fetchUpcomingEvents } from '../redux/announcement/operations';
import HeadSlider from './HeadSlider/HeadSlider';
import HeaderTitle from './HeaderTitle/HeaderTitle';
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

const isDevMode = import.meta.env.VITE_DEVELOPED_MODE === 'true';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const activeMenuItem = useSelector(selectActiveMenuItem);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const initApp = async () => {
      try {
        const archiveList = await dispatch(
          fetchArchivePage({ page: 1, limit: 10 })
        ).unwrap();
        if (isDevMode) {
          successNotify('Success loading ARCHIVE');
        }
      } catch {
        errNotify('Error loading ARCHIVE');
      }

      try {
        await dispatch(fetchHome()).unwrap();
        if (isDevMode) {
          successNotify('Success loading HOMEPAGE');
        }
      } catch {
        errNotify('Error loading HOMEPAGE');
      }

      try {
        await dispatch(fetchAbout()).unwrap();
        if (isDevMode) {
          successNotify('Success loading ABOUTPAGE');
        }
      } catch {
        errNotify('Error loading ABOUTPAGE');
      }

      try {
        await dispatch(fetchDepartments()).unwrap();
        if (isDevMode) {
          successNotify('Success loading DEPARTMENTS');
        }
      } catch {
        errNotify('Error loading DEPARTMENTS');
      }

      try {
        await dispatch(fetchMedia()).unwrap();
        if (isDevMode) {
          successNotify('Success loading MEDIA');
        }
      } catch {
        errNotify('Error loading MEDIA');
      }

      try {
        await dispatch(fetchUpcomingEvents()).unwrap();
        if (isDevMode) {
          successNotify('Success loading ANNOUNCEMENTS');
        }
      } catch {
        errNotify('Error loading ANNOUNCEMENTS');
      }
    };

    initApp();
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col gap-1">
      <HeaderTitle />
      <HeadSlider />
      <Navbar />
      <div className="flex w-full max-w-7xl mx-auto gap-3">
        {activeMenuItem && (
          <div className="hidden lg:block flex-[0_0_20%]">
            <Sidebar menu={menu} />
          </div>
        )}
        <main className="flex-[1_1_auto] p-0 md:p-4 bg-white rounded-xl shadow">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

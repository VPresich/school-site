import React, { ReactNode } from "react";
import { useSelector, UseSelector } from "react-redux";
import { selectActiveMenuItem } from "../redux/menu/selector";
import HeadSlider from "./HeadSlider/HeadSlider";
import Sidebar from "./SideBar";
import { menu } from "./NavBar/MenuData";
import Navbar from "./NavBar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const activeMenuItem = useSelector(selectActiveMenuItem);
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div className="w-full py-4 text-center text-3xl font-bold text-[#993333] bg-white/0">
        Київська дитяча школа мистецтв №1
      </div>
      <HeadSlider />
      <Navbar />
      <div className="flex w-full max-w-7xl mx-auto gap-4">
        {activeMenuItem && (
          <div className="flex-[0_0_20%]">
            <Sidebar menu={menu} />
          </div>
        )}
        <main className="flex-[1_1_auto] p-6 bg-white rounded shadow">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

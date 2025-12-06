import React, { ReactNode } from "react";
import Navbar from "./NavBar/Navbar";
import HeadSlider from "./HeadSlider/HeadSlider";
import Sidebar from "./SideBar";
import { menu } from "./NavBar/MenuData";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div className="w-full py-4 text-center text-3xl font-bold text-[#993333] bg-white/0">
        Київська дитяча школа мистецтв №1
      </div>
      <HeadSlider />
      <Navbar />

      <div className="flex w-full max-w-full mx-auto gap-4">
        <Sidebar menu={menu} />
        <main className="flex-[0_0_80%] p-6 bg-white rounded shadow">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

import React, { ReactNode } from "react";
import Navbar from "./NavBar/Navbar";
import Sidebar from "./SideBar";
import HeadSlider from "./HeadSlider/HeadSlider";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { menu } from "./NavBar/MenuData";
import { openSidebar, closeSidebar } from "../redux/menu/slice";

interface LayoutProps {
  children: ReactNode;
}

const LayoutHover: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div className="w-full py-4 text-center text-3xl font-bold text-[#993333] bg-white/0">
        Київська дитяча школа мистецтв №1
      </div>
      <HeadSlider />
      <Navbar />
      <div className="flex w-full max-w-7xl mx-auto gap-4 relative">
        <div
          className="absolute top-0 left-0 h-full w-8 z-1"
          onMouseEnter={() => dispatch(openSidebar())}
          onMouseLeave={() => dispatch(closeSidebar())}
        />
        <Sidebar menu={menu} />
      </div>
      <main className="flex-1 p-6 bg-white rounded shadow">{children}</main>
    </div>
  );
};

export default LayoutHover;

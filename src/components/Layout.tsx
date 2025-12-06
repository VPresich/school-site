import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import HeadSlider from "./HeadSlider/HeadSlider";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col gap-8">
      <div className="w-full py-4 text-center text-3xl font-bold text-[#993333] bg-white/0">
        Title
      </div>
      <HeadSlider />
      <Navbar />
      <main className="flex-1 max-w-5xl w-full mx-auto p-8">{children}</main>
    </div>
  );
};

export default Layout;

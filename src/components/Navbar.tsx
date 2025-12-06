// Navbar.tsx
import React from "react";
import DropDownMenu, { SubMenuItem } from "./DropDownMenu";

const Navbar: React.FC = () => {
  const emptySubMenu: SubMenuItem[] = [];

  return (
    <nav className="bg-white/30 backdrop-blur-md p-0 shadow-none">
      <div className="max-w-6xl mx-auto flex justify-center gap-0">
        <DropDownMenu
          title="Головна"
          to="/"
          items={[
            { label: "Архів", path: "/archive" },
            { label: "Події", path: "/events" },
          ]}
        />
        <DropDownMenu
          title="Про школу"
          to="/about"
          items={[
            { label: "Загальні відомості", path: "/about/general-info" },
            { label: "Історія школи", path: "/about/history" },
            { label: "Матеріально-технічна база", path: "/about/facilities" },
            {
              label: "Організація освітнього процесу",
              path: "/about/organization",
            },
            { label: "Досягнення та нагороди", path: "/about/achievements" },
          ]}
        />
        <DropDownMenu
          title="Відділи школи"
          to="/departments"
          items={[
            { label: "Фортепіанний відділ", path: "/departments/piano" },
            {
              label: "Відділ народних інструментів",
              path: "/departments/folk",
            },
            {
              label: "Відділ струнно-смичкових інструментів",
              path: "/departments/strings",
            },
            {
              label: "Відділ духових і ударних інструментів",
              path: "/departments/wind-percussion",
            },
            {
              label: "Відділ музично-теоретичних дисциплін",
              path: "/departments/theory",
            },
            {
              label: "Вокально-хоровий відділ",
              path: "/departments/vocal-chorus",
            },
            { label: "Художнє віддідення", path: "/departments/art" },
            {
              label: "Відділення естетичного виховання",
              path: "/departments/aesthetic",
            },
          ]}
        />
        <DropDownMenu title="Медіатека" to="/media" items={emptySubMenu} />
        <DropDownMenu title="Контакти" to="/contact" items={emptySubMenu} />
      </div>
    </nav>
  );
};

export default Navbar;

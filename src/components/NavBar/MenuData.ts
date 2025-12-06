import { MenuItem } from "./Navbar.types";

export const menu: MenuItem[] = [
  {
    title: "Головна",
    to: "/",
    items: [
      { label: "Архів", path: "/archive" },
      { label: "Події", path: "/events" },
    ],
  },
  {
    title: "Про школу",
    to: "/about",
    items: [
      { label: "Загальні відомості", path: "/about/general-info" },
      { label: "Історія школи", path: "/about/history" },
      { label: "Матеріально-технічна база", path: "/about/facilities" },
      { label: "Організація освітнього процесу", path: "/about/organization" },
      { label: "Досягнення та нагороди", path: "/about/achievements" },
    ],
  },
  {
    title: "Відділи школи",
    to: "/departments",
    items: [
      { label: "Фортепіанний відділ", path: "/departments/piano" },
      { label: "Відділ народних інструментів", path: "/departments/folk" },
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
      { label: "Вокально-хоровий відділ", path: "/departments/vocal-chorus" },
      { label: "Художнє віддідення", path: "/departments/art" },
      {
        label: "Відділення естетичного виховання",
        path: "/departments/aesthetic",
      },
    ],
  },
  {
    title: "Медіатека",
    to: "/media",
    items: [],
  },
  {
    title: "Контакти",
    to: "/contact",
    items: [],
  },
];

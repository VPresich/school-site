import { MenuItem } from './Navbar.types';

export const menu: MenuItem[] = [
  {
    title: 'Головна',
    to: '/',
    items: [
      { label: 'Анонси', path: '/announcements' },
      { label: 'Події', path: '/archive' },
      { label: 'Афіші', path: '/posters' },
    ],
  },
  {
    title: 'Про школу',
    to: '/about',
    items: [
      { label: 'Загальні відомості', path: '/about/general' },
      { label: 'Історія школи', path: '/about/history' },
      { label: 'Матеріально-технічна база', path: '/about/facilities' },
      { label: 'Організація освітнього процесу', path: '/about/organization' },
      { label: 'Досягнення та нагороди', path: '/about/achievements' },
    ],
  },
  {
    title: 'Відділи школи',
    to: '/departments',
    items: [
      { label: 'Фортепіанний відділ', path: '/departments/piano' },
      { label: 'Відділ народних інструментів', path: '/departments/folk' },
      {
        label: 'Відділ струнно-смичкових інструментів',
        path: '/departments/strings',
      },
      {
        label: 'Відділ духових і ударних інструментів',
        path: '/departments/wind-percussion',
      },
      {
        label: 'Відділ музично-теоретичних дисциплін',
        path: '/departments/theory',
      },
      { label: 'Вокально-хоровий відділ', path: '/departments/vocal-chorus' },
      { label: 'Художнє віддідення', path: '/departments/art' },

      {
        label: 'Відділ сучасного та естрадного мистецтва',
        path: '/departments/modern-estrada',
      },
      { label: 'Відділ предмету за вибором', path: '/departments/elective' },
    ],
  },
  {
    title: 'Медіатека',
    to: '/media',
    items: [],
  },
  {
    title: 'Контакти',
    to: '/contact',
    items: [],
  },
];

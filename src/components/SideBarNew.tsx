import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const SidebarNew: React.FC = () => {
  return (
    <aside className="w-full md:w-80 bg-white rounded-lg shadow-md p-6 flex flex-col gap-6">
      {/* Логотип або назва школи */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#993333]">Школа мистецтв №1</h2>
        <p className="text-sm text-gray-500">м. Київ, Солом'янський район</p>
      </div>

      {/* Контактна інформація */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-[#993333]">Контакти</h3>
        <p className="text-sm">📍 вул. Андрія Мельника, 29, 03058</p>
        <p className="text-sm">☎ 457-71-93 (Секретар)</p>
        <p className="text-sm">☎ 457-71-75 (Черговий)</p>
        <p className="text-sm">✉ kdshm1@ukr.net</p>
        <div className="flex gap-3 mt-2">
          <a href="#" className="text-[#4267B2] hover:text-[#2a4d8b]">
            <FaFacebookF />
          </a>
          <a href="#" className="text-[#C13584] hover:text-[#89255a]">
            <FaInstagram />
          </a>
          <a href="#" className="text-[#FF0000] hover:text-[#aa0000]">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Навігація */}
      <nav className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-[#993333]">Меню</h3>
        <Link
          to="/about"
          className="text-sm text-gray-700 hover:text-[#993333]"
        >
          Про школу
        </Link>
        <Link
          to="/departments"
          className="text-sm text-gray-700 hover:text-[#993333]"
        >
          Відділи
        </Link>
        <Link
          to="/teachers"
          className="text-sm text-gray-700 hover:text-[#993333]"
        >
          Викладачі
        </Link>
        <Link
          to="/students"
          className="text-sm text-gray-700 hover:text-[#993333]"
        >
          Учні та досягнення
        </Link>
        <Link
          to="/festival"
          className="text-sm text-gray-700 hover:text-[#993333]"
        >
          Фестиваль мистецтв
        </Link>
        <Link
          to="/contacts"
          className="text-sm text-gray-700 hover:text-[#993333]"
        >
          Контакти
        </Link>
      </nav>

      {/* Останні новини / події */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-[#993333]">Останні новини</h3>
        <Link
          to="/news/1"
          className="text-sm text-gray-700 hover:text-[#993333]"
        >
          Концерт учнів молодших класів
        </Link>
        <Link
          to="/news/2"
          className="text-sm text-gray-700 hover:text-[#993333]"
        >
          Виставка образотворчого мистецтва
        </Link>
        <Link
          to="/news/3"
          className="text-sm text-gray-700 hover:text-[#993333]"
        >
          Відкриття 10-го сезону Фестивалю
        </Link>
      </div>

      {/* Швидкі посилання */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-[#993333]">
          Швидкі посилання
        </h3>
        <Link
          to="/schedule"
          className="text-sm text-gray-700 hover:text-[#993333]"
        >
          Розклад занять
        </Link>
        <Link
          to="/admission"
          className="text-sm text-gray-700 hover:text-[#993333]"
        >
          Абітурієнтам
        </Link>
        <Link
          to="/library"
          className="text-sm text-gray-700 hover:text-[#993333]"
        >
          Бібліотека матеріалів
        </Link>
      </div>
    </aside>
  );
};

export default SidebarNew;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const SidebarNew: React.FC = () => {
  return (
    <aside className="w-full md:w-80 bg-white rounded-lg shadow-md p-6 flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#993333]">Школа мистецтв №1</h2>
        <p className="text-sm text-gray-500">м. Київ, Солом'янський район</p>
      </div>

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

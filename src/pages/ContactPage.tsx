import React from 'react';
import clsx from 'clsx';
import css from './home/HomePage.module.css';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
      <h2
        className={clsx(
          css.font,
          'mb-12 text-center text-5xl font-bold text-[#993333]'
        )}
      >
        Наші контакти
      </h2>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Адреса</h2>
        <p className="text-gray-700">
          м. Київ, 03058, вул. Андрія Мельника, 29, Солом'янський район
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Контактні телефони</h2>
        <ul className="text-gray-700 space-y-1">
          <li>457-71-93 — Секретар Шаройко Олена Валеріївна</li>
          <li>457-71-75 — Черговий</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">E-mail</h2>
        <p className="text-gray-700">
          <a
            href="mailto:kdshm1@ukr.net"
            className="text-[#993333] hover:underline"
          >
            kdshm1@ukr.net
          </a>
        </p>
      </section>
    </div>
  );
};

export default ContactPage;

import React from 'react';
import clsx from 'clsx';
import css from './home/HomePage.module.css';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
      <h1
        className={clsx(
          css.font,
          'mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#993333]'
        )}
      >
        Наші контакти
      </h1>

      <section className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
          Адреса
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          м. Київ, 03058, вул. Андрія Мельника, 29, Солом'янський район
        </p>
      </section>

      <section className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
          Контактні телефони
        </h2>
        <ul className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-1">
          <li>457-71-93 — Секретар Шаройко Олена Валеріївна</li>
          <li>457-71-75 — Черговий</li>
        </ul>
      </section>

      <section className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
          E-mail
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          <a
            href="mailto:kdshm1@ukr.net"
            className="text-[#993333] hover:underline"
          >
            kdshm1@ukr.net
          </a>
        </p>
      </section>

      <section className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Ми на карті</h2>
        <div className="relative w-full pb-[56.25%] rounded overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.123456789!2d30.5!3d50.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c3b3a9f9e9c1%3A0xabcdef1234567890!2z0JHQtdC70YzRhtC10YHQutC40Lkg0JrQsNC70LjRhtC10L3RgdC60LDRjyDQm9C-0LTQsNC90LAg0JDQvdGB0LrQuNC5!5e0!3m2!1suk!2sua!4v1690000000000!5m2!1suk!2sua"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Мапа школи"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

import React from 'react';
import clsx from 'clsx';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
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
        <div className="flex gap-3 items-center">
          <FaMapMarkerAlt className="text-[#993333] mt-1 shrink-0" />
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            м. Київ, 03058, вул. Андрія Мельника, 29, Солом'янський район
          </p>
        </div>
      </section>

      <section className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
          Контактні телефони
        </h2>
        <ul className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-1">
          <li>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#993333] shrink-0 mt-1" />

              <span>
                <a href="tel:+380444577193" className="hover:underline">
                  +38 (044) 457-71-93
                </a>
                {' — '}Секретар Шаройко Олена Валеріївна
              </span>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-2 ">
              <FaPhoneAlt className="text-[#993333] shrink-0 mt-1" />
              <span>
                <a href="tel:+380444577175">+38 (044) 457-71-75</a>
                {' — '}Черговий
              </span>
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
          E-mail
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          <div className="flex gap-2 text-sm items-center">
            <FaEnvelope className="text-[#993333] shrink-0" />
            <a
              href="mailto:kdshm1@ukr.net"
              className="text-[#993333] hover:underline"
            >
              kdshm1@ukr.net
            </a>
          </div>
        </p>
      </section>

      <section className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Ми на карті</h2>
        <div className="relative w-full pb-[56.25%] rounded overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.013226968132!2d30.439436875781308!3d50.44085428805563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc1f11ca5ac7%3A0xff7f9bfccdebbf1c!2sAndriia%20Melnyka%20St%2C%2029%2C%20Kyiv%2C%20Ukraine%2C%2002000!5e0!3m2!1sen!2spl!4v1766535774662!5m2!1sen!2spl"
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

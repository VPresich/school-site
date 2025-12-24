import React from 'react';
import clsx from 'clsx';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';
import css from './home/HomePage.module.css';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mx-auto p-4 sm:p-6 md:p-8">
      <h1
        className={clsx(
          css.font,
          'text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#993333] mb-2 sm:mb-4 md:mb-6'
        )}
      >
        Наші контакти
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 bg-gray-100 rounded-xl shadow hover:shadow-md transition p-4 sm:p-6 md:p-8">
        <div className="flex-[0_0_360px] flex flex-col gap-6 sm:gap-8 md:gap-10 max-w-md">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Адреса</h2>
            <div className="flex gap-3 items-start">
              <FaMapMarkerAlt className="text-[#993333] mt-1 shrink-0" />
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                м. Київ, 03058, вул. Андрія Мельника, 29, Солом'янський район
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Контактні телефони
            </h2>
            <ul className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-2 sm:space-y-3">
              <li>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-[#993333] shrink-0 sm:mt-1" />
                  <span>
                    <a href="tel:+380444577193" className="hover:underline">
                      +38 (044) 457-71-93
                    </a>
                    {' — '}Секретар Шаройко Олена Валеріївна
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-[#993333] shrink-0 sm:mt-1" />
                  <span>
                    <a href="tel:+380444577175" className="hover:underline">
                      +38 (044) 457-71-75
                    </a>
                    {' — '}Черговий
                  </span>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">E-mail</h2>
            <div className="flex gap-2 items-center">
              <FaEnvelope className="text-[#993333] shrink-0" />
              <a
                href="mailto:kdshm1@ukr.net"
                className="text-[#993333] hover:underline"
              >
                kdshm1@ukr.net
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Ми в соцмережах
            </h2>
            <div className="flex gap-3 mt-3">
              <a
                href="https://www.facebook.com/groups/1858115981099923/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white shadow hover:bg-[rgba(153,51,51,0.1)] transition duration-300 ease-in-out"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-[#1877F2] w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@no1586"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white shadow hover:bg-[rgba(153,51,51,0.1)] transition duration-300 ease-in-out"
                aria-label="YouTube"
              >
                <FaYoutube className="text-[#FF0000] w-4 h-4" />
              </a>
            </div>
          </section>
        </div>

        <div className="flex-1">
          <h2 className="sr-only">Ми на карті</h2>
          <div className="relative w-full pb-[110%] sm:pb-[80%] md:pb-[65%] rounded overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.013226968132!2d30.439436875781308!3d50.44085428805563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc1f11ca5ac7%3A0xff7f9bfccdebbf1c!2sAndriia%20Melnyka%20St%2C%2029%2C%20Kyiv%2C%20Ukraine%2C%2002000!5e0!3m2!1sen!2spl!4v1766535774662!5m2!1sen!2spl"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Мапа школи"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

import React from 'react';
import {
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const SidebarContacts: React.FC = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow">
      <div className="bg-[#993333] px-1 py-2">
        <h3 className="text-white font-medium text-center">Контакти</h3>
      </div>

      <div className="bg-gray-50 p-3 space-y-4 text-gray-800">
        <div className="flex gap-3 items-start">
          <FaMapMarkerAlt className="text-[#993333] mt-1 shrink-0" />
          <p className="text-sm leading-snug">
            м. Київ, 03058
            <br />
            вул. Андрія Мельника, 29
            <br />
            Солом'янський район
          </p>
        </div>

        <div className="space-y-1 text-sm">
          <div className="flex gap-2 items-center">
            <FaPhoneAlt className="text-[#993333] shrink-0" />

            <a href="tel:+380444577193" className="hover:underline">
              +38 (044) 457-71-93
            </a>
          </div>

          <div className="flex gap-2 items-center">
            <FaPhoneAlt className="text-[#993333] shrink-0" />

            <a href="tel:+380444577175" className="hover:underline">
              +38 (044) 457-71-75
            </a>
          </div>
        </div>

        <div className="flex gap-2 text-sm items-center">
          <FaEnvelope className="text-[#993333] shrink-0" />
          <a
            href="mailto:kdshm1@ukr.net"
            className="hover:underline hover:text-[#993333]"
          >
            kdshm1@ukr.net
          </a>
        </div>

        <div className="flex gap-2 justify-center">
          <a
            href="https://www.facebook.com/groups/1858115981099923/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white shadow hover:bg-[rgba(153,51,51,0.1)] transition duration-300 ease-in-out"
          >
            <FaFacebookF className="text-[#1877F2]" />
          </a>
          <a
            href="https://www.youtube.com/@no1586"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white shadow hover:bg-[rgba(153,51,51,0.1)] transition duration-300 ease-in-out"
          >
            <FaYoutube className="text-[#FF0000]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarContacts;

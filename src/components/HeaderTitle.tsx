import React from 'react';
import css from '../pages/home/HomePage.module.css';
import clsx from 'clsx';

const HeaderTitle: React.FC = () => {
  return (
    <div
      className={clsx(
        css.font,
        'text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#993333] text-center tracking-wide py-2 sm:py-4 md:py-6 lg:py-8 px-2'
      )}
    >
      Київська дитяча школа мистецтв №1
    </div>
  );
};

export default HeaderTitle;

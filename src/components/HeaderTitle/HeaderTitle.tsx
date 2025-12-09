import React, { ReactNode, useEffect } from 'react';
import css from './HeaderTitle.module.css';
import clsx from 'clsx';

const HeaderTitle: React.FC = () => {
  return (
    <div
      className={clsx(
        css.font,
        'text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold font-playfair text-[#993333] text-center tracking-wide py-2 sm:py-5 md:py-6 lg:py-8'
      )}
    >
      Київська дитяча школа мистецтв №1
    </div>
  );
};

export default HeaderTitle;

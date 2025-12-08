import React, { ReactNode, useEffect } from 'react';
import css from './HeaderTitle.module.css';
import clsx from 'clsx';

const HeaderTitle: React.FC = () => {
  return (
    <div
      className={clsx(
        css.font,
        'text-5xl font-bold font-playfair text-[#993333] text-center tracking-wide py-4'
      )}
    >
      Київська дитяча школа мистецтв №1
    </div>
  );
};

export default HeaderTitle;

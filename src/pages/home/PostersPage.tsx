import React from 'react';
import clsx from 'clsx';
import css from './HomePage.module.css';

function PostersPage(): React.JSX.Element {
  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 gap-4">
      <h2
        className={clsx(
          css.font,
          'text-2xl sm:text-3xl md:text-4xl font-semibold text-[#993333] text-center shrink-0'
        )}
      >
        Афіші
      </h2>
      <p>Тут будуть афіші</p>
    </div>
  );
}

export default PostersPage;

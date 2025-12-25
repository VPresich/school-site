// import React from 'react';
// function AnnouncementsPage(): React.JSX.Element {
//   return (
//     <div className="text-center p-4 sm:p-6 md:p-8">
//       <h1 className="text-3xl font-bold mb-4">Анонси подій</h1>
//       <p>Огляд шкільних подій.</p>
//     </div>
//   );
// }

// export default AnnouncementsPage;

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAnnouncementsUI } from '../../redux/announcement/selectors';
import clsx from 'clsx';
import { PortableText } from '@portabletext/react';
import { ImageLightbox } from '../../components/ImageLightbox';
import { getImageUrl } from '../../api/getImageUrl';
import PortableTextConfig from '../../components/PortableTextConfig';
import css from './HomePage.module.css';

const AnnouncementsPage: React.FC = () => {
  const items = useSelector(selectAnnouncementsUI);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 space-y-12">
      <h2
        className={clsx(
          css.font,
          'text-2xl sm:text-3xl md:text-4xl font-semibold text-[#993333] text-center shrink-0'
        )}
      >
        Анонси подій
      </h2>

      {items.length === 0 && (
        <p className="text-center text-gray-600">Немає майбутніх подій</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((event, idx) => (
          <div
            key={idx}
            className="group bg-gray rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-full h-32 md:h-40">
              <img
                src={`/${event.category.value}.jpg`}
                alt={event.title}
                className="object-contain max-w-full max-h-full "
              />
            </div>

            <div className="p-4">
              <h3 className="text-[#993333] font-semibold text-lg">
                {event.title}
              </h3>
              <p className="text-gray-700 text-sm">{event.date}</p>
              {event.description && (
                <PortableText value={event.description[0]} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsPage;

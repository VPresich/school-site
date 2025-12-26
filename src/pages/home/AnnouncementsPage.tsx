import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { selectAnnouncementsUI } from '../../redux/announcement/selectors';
import { ImageLightbox } from '../../components/ImageLightbox';
import PosterImage from '../../components/PosterImage';
import { getImageUrl } from '../../api/getImageUrl';
import css from './HomePage.module.css';

const AnnouncementsPage: React.FC = () => {
  const items = useSelector(selectAnnouncementsUI);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 space-y-12">
      <h2
        className={clsx(
          css.font,
          'text-2xl sm:text-3xl md:text-4xl font-semibold text-[#993333] text-center'
        )}
      >
        Анонси подій
      </h2>

      {items.length === 0 && (
        <p className="text-center text-gray-600">Немає майбутніх подій</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-50 gap-4">
        {items.map(event => (
          <div
            key={event._id}
            className="
              group
              bg-white
              rounded-xl
              overflow-hidden
              shadow
              hover:shadow-lg
              transition-shadow
              duration-300
            "
          >
            <div className="flex items-center justify-center w-full h-60 md:h-68 rounded-lg p-2 sm:p-3 md:p-4">
              <PosterImage
                src={
                  event.poster
                    ? getImageUrl(event.poster.asset._ref, 1200)
                    : undefined
                }
                categoryValue={event.category.value}
                alt={event.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="px-4 py-2 space-y-2">
              <h3 className="text-[#993333] font-semibold text-lg leading-snug">
                {event.title}
              </h3>
              <p className="text-gray-700 text-sm">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsPage;

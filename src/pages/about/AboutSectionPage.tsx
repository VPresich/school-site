import React from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PortableText } from '@portabletext/react';
import { ImageLightbox } from '../../components/ImageLightbox';
import { getImageUrl } from '../../api/getImageUrl';
import AchievementGallery from '../../components/AchievementsGallery';
import PortableTextConfig from '../../components/PortableTextConfig';
import {
  selectSectionBySlug,
  selectGalleryBySectionSlug,
  selectMainPhotoBySectionSlug,
} from '../../redux/about/selectors';

import css from './AboutPage.module.css';

const AboutSectionPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const section = useSelector(selectSectionBySlug(slug ?? ''));
  const gallery = useSelector(selectGalleryBySectionSlug(slug ?? ''));
  const mainPhoto = useSelector(selectMainPhotoBySectionSlug(slug ?? ''));

  if (!section) return <div>Секція не знайдена</div>;

  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-4 md:p-8 space-y-1 sm:space-y-4 md:space-y-8">
      <h2
        className={clsx(
          css.font,
          'text-4xl font-semibold text-[#993333] text-center'
        )}
      >
        {section.title}
      </h2>
      <div className="text-md text-gray-700 bg-gray-50 p-8 rounded-xl shadow hover:shadow-md">
        {section.content && (
          <PortableText
            value={section.content}
            components={PortableTextConfig}
          />
        )}
      </div>
      {mainPhoto && (
        <div className="flex justify-center py-1 sm:py-2 md:py-4 lg:py-6">
          <div
            className="
              group
              w-56 h-56
              sm:w-64 sm:h-64
              md:w-80 md:h-80
              lg:w-126 lg:h-126
              rounded-full
              bg-white
              p-2
             
              shadow-lg
              hover:shadow-2xl
              transition-shadow duration-300
            "
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={getImageUrl(mainPhoto.asset._ref, 1200)}
                alt="Основне фото"
                className="
                  w-full h-full
                  object-cover
                  transition-transform duration-300 ease-out
                  group-hover:scale-105
                "
              />
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {gallery.map((photo, idx) => (
          <div
            key={idx}
            className="
              group relative bg-white rounded-xl overflow-hidden
              shadow transition-all duration-300 ease-out
              hover:shadow-xl
            "
          >
            <div className="relative w-full pb-[70%] overflow-hidden">
              <ImageLightbox
                src={getImageUrl(photo.image.asset._ref, 1200)}
                alt={`Фото ${idx + 1}`}
                className="
                absolute top-0 left-0 w-full h-full object-cover
                transform transition duration-300 ease-out
                group-hover:scale-105
                cursor-zoom-in
              "
              />

              <div
                className="
                absolute inset-0
                bg-black/0
                transition duration-300
                group-hover:bg-black/20
                pointer-events-none
              "
              />
            </div>

            {photo.title && (
              <div
                className="
                absolute bottom-0 left-0 w-full
                bg-black/60
                p-3
                transition-opacity duration-300
              "
              >
                <h3 className="font-semibold text-sm sm:text-base text-white truncate">
                  {photo.title}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>
      <AchievementGallery />
    </div>
  );
};

export default AboutSectionPage;

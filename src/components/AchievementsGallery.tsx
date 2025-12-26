import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDiplomas } from '../redux/achievement/selectors';
import { ImageLightbox } from './ImageLightbox';
import { getImageUrl } from '../api/getImageUrl';

const AchievementGallery: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (slug !== 'achievements') return null;

  const diplomas = useSelector(selectDiplomas);

  return (
    <div
      className="grid grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-2 sm:gap-3"
    >
      {diplomas.map((item, idx) => (
        <div
          key={idx}
          className="
              group relative bg-white overflow-hidden
              shadow transition-all duration-300 ease-out
              hover:shadow-xl
            "
        >
          <div className="relative w-full pb-[120%] overflow-hidden">
            <ImageLightbox
              src={getImageUrl(item.diploma.asset._ref, 1200)}
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
        </div>
      ))}
    </div>
  );
};

export default AchievementGallery;

import React from 'react';
import { SanityImage } from '../redux/types';
import { ImageLightbox } from './ImageLightbox';
import { getImageUrl } from '../api/getImageUrl';

interface DiplomasGalleryProps {
  diplomas: SanityImage[];
}

const DiplomasGallery: React.FC<DiplomasGalleryProps> = ({ diplomas }) => {
  if (!diplomas || diplomas.length === 0) return null;

  return (
    <div className="mt-1 sm:mt-2 md:mt-3 lg:mt-4">
      <h3 className="text-xl md:text-2xl font-semibold text-[#993333] mb-2">
        Дипломи
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {diplomas.map((diploma, index) => (
          <ImageLightbox
            key={index}
            src={getImageUrl(diploma.asset._ref, 1200)}
            alt="Диплом"
            className="
              w-full
              h-48
              sm:h-56
              md:h-64
              object-cover
              rounded
              shadow
              cursor-zoom-in
              hover:opacity-90
              transition
            "
          />
        ))}
      </div>
    </div>
  );
};

export default DiplomasGallery;

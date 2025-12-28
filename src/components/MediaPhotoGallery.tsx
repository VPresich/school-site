import React from 'react';
import { ImageLightbox } from './ImageLightbox';
import { getImageUrl } from '../api/getImageUrl';
import { GalleryPhotoItem } from '../redux/media/types';

interface PhotoGalleryProps {
  photoList: GalleryPhotoItem[];
}

const MediaPhotoGallery: React.FC<PhotoGalleryProps> = ({ photoList }) => {
  if (!photoList || photoList.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
      {photoList.map((photo, idx) => (
        <div
          key={idx}
          className="group relative bg-white rounded-xl overflow-hidden shadow transition-shadow duration-300 ease-out hover:shadow-lg"
        >
          <div className="relative w-full pb-[56.25%] overflow-hidden min-h-[200px] sm:min-h-[300px]">
            <ImageLightbox
              src={getImageUrl(photo.image.asset._ref, 1200)}
              alt={photo.title || `Фото ${idx + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover transform transition duration-300 ease-out group-hover:scale-[1.02] cursor-zoom-in"
            />
          </div>
          {photo.title && (
            <div className="absolute bottom-0 left-0 w-full bg-black/40 p-2">
              <h3 className="font-semibold text-sm sm:text-base text-white truncate">
                {photo.title}
              </h3>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MediaPhotoGallery;

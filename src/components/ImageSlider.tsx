import React, { useState } from 'react';
import { getImageUrl } from '../api/getImageUrl';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

interface ImageSliderProps {
  images: { asset: { _ref: string } }[];
  alt?: string;
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  alt,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];
  if (!currentImage?.asset?._ref) return null;

  const nextImage = () => setCurrentIndex(prev => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <>
      <div className={`relative w-full ${className}`}>
        <img
          key={currentImage.asset._ref}
          src={getImageUrl(currentImage.asset._ref, 600)}
          alt={alt}
          className="w-full max-h-96 object-contain mx-auto cursor-zoom-in transition-transform duration-500 ease-in-out"
          onClick={() => setLightboxOpen(true)}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 hover:scale-110 transition-transform transition-bg  duration-300 p-3 rounded-full shadow-lg cursor-pointer"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 hover:scale-110 transition-transform transition-bg  duration-300 p-3 rounded-full shadow-lg cursor-pointer"
            >
              <FaChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={getImageUrl(currentImage.asset._ref, 1200)}
            alt={alt}
            className="max-h-full max-w-full object-contain rounded"
          />
        </div>
      )}
    </>
  );
};

export default ImageSlider;

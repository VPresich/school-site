import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { getImageUrl } from '../api/getImageUrl';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';

interface ImageCardSliderProps {
  images: { asset: { _ref: string } }[];
  alt?: string;
  className?: string;
}

const ImageCardSlider: React.FC<ImageCardSliderProps> = ({
  images,
  alt,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const nextImage = () => setCurrentIndex(prev => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <>
      <div
        className={`relative w-full h-[500px] flex items-center justify-center ${className}`}
      >
        <img
          key={currentImage.asset._ref}
          src={getImageUrl(currentImage.asset._ref, 600)}
          alt={alt}
          className="
            max-w-full
            max-h-full
            object-contain
            cursor-zoom-in
            transition-opacity duration-300
          "
          onClick={() => setLightboxOpen(true)}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute -left-4  md:left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 hover:scale-110 transition-transform transition-bg  duration-300 p-3 rounded-full shadow-lg cursor-pointer"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute -right-4  md:right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 hover:scale-110 transition-transform transition-bg  duration-300 p-3 rounded-full shadow-lg cursor-pointer"
            >
              <FiChevronRight size={20} />
            </button>
          </>
        )}
      </div>
      <Dialog
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-black/80"
          aria-hidden="true"
          onClick={() => setLightboxOpen(false)}
        />

        <div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
          <div className="relative pointer-events-auto flex items-center justify-center w-full h-full">
            <img
              src={getImageUrl(currentImage.asset._ref, 1200)}
              alt={alt}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded shadow-2xl"
            />

            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 bg-black text-white w-10 h-10 rounded-full text-2xl flex items-center justify-center hover:bg-gray-800 cursor-pointer"
            >
              <IoCloseOutline size={20} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full text-2xl flex items-center justify-center hover:bg-gray-800 cursor-pointer"
                >
                  <FiChevronLeft size={20} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full text-2xl flex items-center justify-center hover:bg-gray-800 cursor-pointer"
                >
                  <FiChevronRight size={20} />
                </button>
              </>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ImageCardSlider;

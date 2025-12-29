import React, { useState } from 'react';
import clsx from 'clsx';
import { ImageLightbox } from './ImageLightbox';
import MobileZoomButton from './MobileZoomButton';

interface PosterImageProps {
  src?: string;
  categoryValue?: string;
  alt: string;
  className?: string;
}

const FALLBACK_SRC = '/poster-fallback.svg';

const PosterImage: React.FC<PosterImageProps> = ({
  src,
  categoryValue,
  alt,
  className,
}) => {
  const [error, setError] = useState(false);

  if (src && !error) {
    return (
      <div className="relative h-full w-full">
        <ImageLightbox
          src={src}
          alt={alt}
          className={clsx(
            className,
            'cursor-zoom-in hover:scale-105 transition-transform duration-300 shadow-xl'
          )}
          onError={() => setError(true)}
        />
        <MobileZoomButton onClick={() => {}} />
      </div>
    );
  }

  const categoryFallback = categoryValue && `/${categoryValue}.jpg`;

  return (
    <img
      src={categoryFallback ?? FALLBACK_SRC}
      alt="Постер відсутній"
      className={clsx(className, 'opacity-90')}
    />
  );
};

export default PosterImage;

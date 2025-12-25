import React from 'react';
import { useSelector } from 'react-redux';
import { getImageUrl } from '../api/getImageUrl';
import { ImageLightbox } from '../components/ImageLightbox';
import {
  selectMediaTitle,
  selectMediaVideos,
  selectMediaPhotos,
} from '../redux/media/selectors';
import clsx from 'clsx';
import { getYouTubeId } from '../auxiliary/getYuotubeId';
import css from './home/HomePage.module.css';

function MediaPage(): React.JSX.Element {
  const videoList = useSelector(selectMediaVideos);
  const mediaTitle = useSelector(selectMediaTitle);
  const photoList = useSelector(selectMediaPhotos);
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <h2
        className={clsx(
          css.font,
          'text-center font-bold text-[#993333] mb-8 sm:mb-10 text-3xl sm:text-4xl md:text-5xl'
        )}
      >
        {mediaTitle}
      </h2>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videoList.map(item => {
            const videoId = getYouTubeId(item.url);
            if (!videoId) return null;

            return (
              <div
                key={item.url}
                className="
                      group bg-white rounded-xl overflow-hidden
                      shadow transition-shadow duration-300 ease-out
                      hover:shadow-lg
                    "
              >
                <div className="relative w-full pb-[56.25%] overflow-hidden">
                  <iframe
                    className="
                      absolute top-0 left-0 w-full h-full
                      transform transition duration-300 ease-out
                      group-hover:scale-102
                      group-hover:blur-[0.5px]
                    "
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="p-3">
                  <h3 className="font-semibold text-sm sm:text-base text-[#993333]">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {photoList.map((photo, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl overflow-hidden shadow transition-shadow duration-300 ease-out hover:shadow-lg"
            >
              <div className="relative w-full pb-[56.25%] overflow-hidden">
                <ImageLightbox
                  src={getImageUrl(photo.image.asset._ref, 1200)}
                  alt={`Фото ${idx + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover transform transition duration-300 ease-out group-hover:scale-102 cursor-zoom-in"
                />
              </div>
              {photo.title && (
                <div className="absolute bottom-0 left-0 w-full bg-opacity-80 p-2">
                  <h3 className="font-semibold text-sm sm:text-base text-white truncate">
                    {photo.title}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MediaPage;

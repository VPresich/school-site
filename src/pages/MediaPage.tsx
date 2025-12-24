import React from 'react';
import { media } from '../auxiliary/media';
import clsx from 'clsx';
import { getYouTubeId } from '../auxiliary/getYuotubeId';
import css from './home/HomePage.module.css';

function MediaPage(): React.JSX.Element {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <h2
        className={clsx(
          css.font,
          'text-center font-bold text-[#993333] mb-8 sm:mb-10 text-3xl sm:text-4xl md:text-5xl'
        )}
      >
        Медіатека
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {media.map(item => {
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
    </div>
  );
}

export default MediaPage;

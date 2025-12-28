import React from 'react';
import { useSelector } from 'react-redux';
import VideoGallery from '../components/VideoGallery';
import MediaPhotoGallery from '../components/MediaPhotoGallery';
import {
  selectMediaTitle,
  selectMediaVideos,
  selectMediaPhotos,
} from '../redux/media/selectors';
import clsx from 'clsx';
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
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        <VideoGallery
          videoList={videoList}
          className={
            'grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6'
          }
        />
        <MediaPhotoGallery photoList={photoList} />
      </div>
    </div>
  );
}

export default MediaPage;

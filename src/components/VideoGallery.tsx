import React from 'react';
import { SanityVideo } from '../redux/types';
import { getYouTubeId } from '../auxiliary/getYouTubeId';

interface VideoGalleryProps {
  videoList: SanityVideo[];
  className?: string;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({
  videoList,
  className,
}) => {
  if (!videoList || videoList.length === 0) return null;

  return (
    <div className={className}>
      {videoList.map(item => {
        const videoId = getYouTubeId(item.url);
        if (!videoId) return null;

        return (
          <div
            key={item.url}
            className="group bg-white rounded-xl overflow-hidden shadow transition-shadow duration-300 ease-out hover:shadow-lg"
          >
            <div className="relative w-full pb-[56.25%] overflow-hidden min-h-[200px] sm:min-h-[300px]">
              <iframe
                className="absolute top-0 left-0 w-full h-full transform transition duration-300 ease-out group-hover:scale-[1.01] group-hover:blur-[0.5px]"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={item.title ?? 'Відео'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoGallery;

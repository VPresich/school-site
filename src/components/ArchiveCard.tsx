import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ArchiveItemUI } from '../redux/archive/types';
import { formatDate } from '../auxiliary/formatDate';
import { PortableText } from '@portabletext/react';
import PortableTextConfig from './PortableTextConfig';
import DiplomasGallery from './DiplomasGallery';
import ImageCardSlider from './ImageCardSlider';
import { selectItemImages } from '../redux/archive/selectors';
import VideoGallery from './VideoGallery';

interface ArchiveCardProps {
  item: ArchiveItemUI;
  preview_blocks?: number;
  isCurrent?: boolean;
}

const ArchiveCard: React.FC<ArchiveCardProps> = ({
  item,
  preview_blocks = 3,
  isCurrent = false,
}) => {
  const [expanded, setExpanded] = useState(false);

  const itemImages = useSelector(
    selectItemImages({
      card: item,
      isCurrent,
    })
  );

  if (!item.description || item.description.length === 0) return null;

  const previewBlocks = item.description.slice(0, preview_blocks);

  return (
    <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl p-4 sm:p-6 md:p-8 transition-shadow duration-300 relative">
      <div
        className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-cover bg-center opacity-25 pointer-events-none"
        style={{ backgroundImage: `url('/${item.category.value}.jpg')` }}
      ></div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center gap-2">
          <h2
            className="
              text-xl md:text-2xl lg:text-2xl
              font-semibold text-[#993333] leading-snug
              max-w-[70%] sm:max-w-full
              wrap-break-words
            "
          >
            {item.title}
          </h2>

          <div className="flex flex-col gap-1 items-end shrink-0">
            <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 text-right leading-tight">
              <span>{formatDate(item.date)}</span>
              {item.enddate && <span>{formatDate(item.enddate)}</span>}
            </span>
            <span className="text-xs md:text-sm font-medium text-[#993333] tracking-tight">
              {item.category.title}
            </span>
          </div>
        </div>

        <div className="mt-1">
          <div className="prose prose-sm max-w-none text-left ">
            <PortableText
              value={expanded ? item.description : previewBlocks}
              components={PortableTextConfig}
            />
          </div>
          {item.description.length > preview_blocks && (
            <div className="text-right mt-0">
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-[#993333] underline cursor-pointer"
              >
                {expanded ? 'Сховати' : 'Читати далі'}
              </button>
            </div>
          )}
        </div>

        {itemImages && itemImages.length > 0 && (
          <div className="mt-2 sm:mt-4 md:mt-6 lg:mt-8">
            <ImageCardSlider images={itemImages} alt={item.title} />
          </div>
        )}

        {item.videos && item.videos.length > 0 && (
          <VideoGallery
            videoList={item.videos}
            className="grid grid-cols-1 mx-auto w-full max-w-5xl mt-2 sm:mt-4 md:mt-6 lg:mt-8"
          />
        )}

        {item.diplomas && <DiplomasGallery diplomas={item.diplomas} />}
      </div>
    </div>
  );
};

export default ArchiveCard;

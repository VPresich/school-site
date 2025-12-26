import React, { useState } from 'react';
import { ArchiveCardProps } from './ArchiveCard.types';
import { formatDate } from '../../auxiliary/formatDate';
import { PortableText } from '@portabletext/react';
import PortableTextConfig from '../PortableTextConfig';
import DiplomasGallery from '../DiplomasGallery';
import ImageCardSlider from '../ImageCardSlider';
import { ImageLightbox } from '../ImageLightbox';
import { getImageUrl } from '../../api/getImageUrl';

const DEFAULT_PREVIEW_BLOCKS = 3;

const ArchiveCard: React.FC<ArchiveCardProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  if (!item.description || item.description.length === 0) return null;

  const previewBlocks = item.description.slice(0, DEFAULT_PREVIEW_BLOCKS);

  return (
    <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl p-4 sm:p-6 md:p-8 transition-shadow duration-300 relative">
      <div
        className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-cover bg-center opacity-25 pointer-events-none"
        style={{ backgroundImage: `url('/${item.category.value}.jpg')` }}
      ></div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold text-[#993333] leading-snug">
              {item.title}
            </h2>

            {item.poster && (
              <ImageLightbox
                src={getImageUrl(item.poster.asset._ref, 1200)}
                alt={`${item.title} афіша`}
                className="w-8 h-8 cursor-zoom-in"
              />
            )}
          </div>

          <span className="text-sm sm:text-base font-semibold text-gray-700">
            {formatDate(item.date)}
            {item.enddate ? ` - ${formatDate(item.enddate)}` : ''}
          </span>
        </div>

        <div className="w-full text-right">
          <span className="text-xs md:text-sm font-medium text-[#993333] tracking-tight capitalize">
            {item.category.title}
          </span>
        </div>
        <div>
          <div className="prose prose-sm max-w-none text-left mt-0.5">
            <PortableText
              value={expanded ? item.description : previewBlocks}
              components={PortableTextConfig}
            />
          </div>
          {item.description.length > DEFAULT_PREVIEW_BLOCKS && (
            <div className="text-right mt-0.5">
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-[#993333] underline cursor-pointer"
              >
                {expanded ? 'Сховати' : 'Читати далі'}
              </button>
            </div>
          )}
        </div>

        {item.images && item.images.length > 0 && (
          <ImageCardSlider images={item.images} alt={item.title} />
        )}

        {item.diplomas && <DiplomasGallery diplomas={item.diplomas} />}
      </div>
    </div>
  );
};

export default ArchiveCard;

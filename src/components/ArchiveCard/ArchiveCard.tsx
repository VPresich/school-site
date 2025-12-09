import React from 'react';
import { ArchiveCardProps } from './ArchiveCard.types';
import { formatDate } from '../../auxiliary/formatDate';
import { PortableText } from '@portabletext/react';
import PortableTextConfig from '../PortableTextConfig';
import ImageSlider from '../ImageSlider';

const ArchiveCard: React.FC<ArchiveCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-4 transition-shadow duration-300">
      <div className="flex flex-col gap-4 relative">
        <div
          className="absolute top-0 right-0 w-32 h-32 bg-cover bg-center opacity-30 pointer-events-none"
          style={{ backgroundImage: `url('/${item.category.value}.jpg')` }}
        ></div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold text-[#993333] leading-snug">
            {item.title}
          </h2>
          <span className="text-sm sm:text-base font-medium text-red-500">
            {formatDate(item.date)}
            <span className="hidden sm:inline">
              {item.enddate ? ` - ${formatDate(item.enddate)}` : ''}
            </span>
          </span>
        </div>

        <div className="w-full text-right">
          <span className="text-sm font-bold text-red-700 capitalize">
            {item.category.title}
          </span>
        </div>

        {item.description && (
          <div className="prose prose-sm max-w-none text-left">
            <PortableText
              value={item.description}
              components={PortableTextConfig}
            />
          </div>
        )}

        {item.images && item.images.length > 0 && (
          <ImageSlider images={item.images} alt={item.title} />
        )}
      </div>
    </div>
  );
};

export default ArchiveCard;

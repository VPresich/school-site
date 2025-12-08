import React from 'react';
import { ArchiveCardProps } from './ArchiveCard.types';
import { formatDate } from '../../auxiliary/formatDate';
import ImageSlider from '../ImageSlider';

const ArchiveCard: React.FC<ArchiveCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#993333]">{item.title}</h2>
        <span className="text-base font-medium text-gray-500">
          {formatDate(item.date)}
          {item.enddate ? ` - ${formatDate(item.enddate)}` : ''}
        </span>
      </div>

      <div className="w-full text-right">
        <span className="text-sm font-medium text-gray-700 capitalize">
          {item.category.title}
        </span>
      </div>

      {item.description && (
        <p className="text-gray-600 text-sm">{item.description}</p>
      )}

      {item.images && item.images.length > 0 && (
        <ImageSlider images={item.images} alt={item.title} />
      )}
    </div>
  );
};

export default ArchiveCard;

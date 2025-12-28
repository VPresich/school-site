import React, { useState } from 'react';
import { PortableTextBlock } from '@portabletext/types';
import { ImageLightbox } from './ImageLightbox';
import { Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { getImageUrl } from '../api/getImageUrl';
import PortableTextConfig from './PortableTextConfig';

export interface DepGalleryItemProps {
  dep: {
    slug: { current: string };
    title: string;
    resume?: PortableTextBlock[];
    teachersGallery?: { asset: { _ref: string } }[];
  };
}

const DepGalleryItem: React.FC<DepGalleryItemProps> = ({ dep }) => {
  const [isOpen, setIsOpen] = useState(false);
  const firstParagraph = dep.resume?.find(
    (block: PortableTextBlock) => block._type === 'block'
  );
  const gallery = dep.teachersGallery || [];
  return (
    <div className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col h-full">
      {gallery.length > 0 && (
        <ImageLightbox
          src={getImageUrl(gallery[0].asset._ref, 1200)}
          alt={dep.title}
        />
      )}

      <h3 className="text-2xl font-semibold text-[#993333] mt-4">
        {dep.title}
      </h3>

      {dep.resume && (
        <div className="mt-2 text-gray-700">
          {firstParagraph && (
            <PortableText
              value={[firstParagraph]}
              components={PortableTextConfig}
            />
          )}
        </div>
      )}

      {/* <Link
        to={`/departments/${dep.slug.current}`}
        className="mt-auto pt-4 inline-block text-[#993333] font-medium hover:underline"
      >
        Детальніше
      </Link> */}
      <div className="flex justify-end mt-auto">
        <button
          className="
              bottom-3
              right-3
              z-10
              bg-white/90            
              backdrop-blur
              text-[#993333]
              text-xs
              px-3
              py-1.5
              rounded-full
              shadow
              hover:bg-white
              hover:cursor-pointer
              transition
            "
        >
          <Link to={`/departments/${dep.slug.current}`}>Деталі</Link>
        </button>
      </div>
    </div>
  );
};

export default DepGalleryItem;

import React from 'react';
import clsx from 'clsx';
import { PortableText } from '@portabletext/react';
import { BannerItem } from '../redux/banner/types';
import PortableTextConfig from './PortableTextConfig';
import { getImageUrl } from '../api/getImageUrl';
import css from '../pages/home/HomePage.module.css';

interface BannerListProps {
  banners: BannerItem[];
}

const BannerList: React.FC<BannerListProps> = ({ banners = [] }) => {
  if (!banners || banners.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-10 md:mb-12">
      {banners.map(banner => (
        <div
          key={banner._id}
          className="rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 mx-auto w-full"
          style={{ maxWidth: '600px' }}
        >
          <div className="relative w-full aspect-1 overflow-hidden bg-gray-100">
            {banner.image && (
              <img
                src={getImageUrl(banner.image.asset._ref, 600)}
                alt={banner.title || 'Банер'}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="p-2 sm:p-4 md:p-6 text-center">
            {banner.title && (
              <h2
                className={clsx(
                  css.font,
                  'text-xl sm:text-2xl md:text-3xl font-bold text-[#993333]'
                )}
              >
                {banner.title}
              </h2>
            )}

            {banner.text && (
              <div className="mt-2 prose prose-sm sm:prose md:prose-md max-w-none text-gray-700">
                <PortableText
                  value={banner.text}
                  components={PortableTextConfig}
                />
              </div>
            )}

            {banner.link && (
              <a
                href={banner.link}
                className="mt-3 sm:mt-4 inline-block bg-[#993333] text-white px-4 py-2 rounded hover:bg-[#aa4444] transition"
              >
                Перейти
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerList;

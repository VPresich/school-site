import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import css from './HomePage.module.css';
import { getImageUrl } from '../../api/getImageUrl';
import { selectAdmissionPosters } from '../../redux/poster/selectors';
import PosterImage from '../../components/PosterImage';

const AdmissionsPage: React.FC = () => {
  const posters = useSelector(selectAdmissionPosters);

  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 gap-8">
      <h2
        className={clsx(
          css.font,
          'text-2xl sm:text-3xl md:text-4xl font-semibold text-[#993333] text-center'
        )}
      >
        Вступ до школи
      </h2>

      {posters.length === 0 && (
        <p className="text-gray-600">Немає афіш за останній рік</p>
      )}

      {/* Сетка */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {posters.map(item => (
          <div
            key={item._id}
            className="
              group bg-white rounded-xl shadow
              hover:shadow-lg transition-shadow duration-300
              flex flex-col
            "
          >
            <div
              className="
              w-full
              aspect-3/4
              bg-gray-50
              rounded-t-xl
              p-3
              flex items-center justify-center
            "
            >
              <PosterImage
                src={
                  item.poster
                    ? getImageUrl(item.poster.asset._ref, 800)
                    : undefined
                }
                categoryValue={item.category.value}
                alt={item.title}
                className="
                  w-full h-full
                  object-contain
                  rounded-lg
                "
              />
            </div>

            <div className="px-4 py-3 space-y-1">
              <h3 className="text-[#993333] font-semibold text-lg leading-snug">
                {item.title}
              </h3>
              <button className="text-[#993333] text-sm hover:underline">
                Деталі
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionsPage;

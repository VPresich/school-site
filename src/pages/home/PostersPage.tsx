import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import css from './HomePage.module.css';
import { getImageUrl } from '../../api/getImageUrl';
import { selectPostersUI } from '../../redux/poster/selectors';
import PosterImage from '../../components/PosterImage';

const PostersPage: React.FC = () => {
  const posters = useSelector(selectPostersUI);

  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 gap-8">
      <h2
        className={clsx(
          css.font,
          'text-2xl sm:text-3xl md:text-4xl font-semibold text-[#993333] text-center'
        )}
      >
        Афіші
      </h2>

      {posters.length === 0 && (
        <p className="text-gray-600">Немає афіш за останній рік</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full">
        {posters.map(item => (
          <div
            key={item._id}
            className="group bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <div className="flex items-center justify-center w-full h-64 sm:h-76 bg-gray-50 rounded-lg p-2 sm:p-3 md:p-4">
              <PosterImage
                src={
                  item.poster
                    ? getImageUrl(item.poster.asset._ref, 1200)
                    : undefined
                }
                categoryValue={item.category.value}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostersPage;

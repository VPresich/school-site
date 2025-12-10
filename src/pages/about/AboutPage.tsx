import React from 'react';
import { PortableText } from '@portabletext/react';
import { getImageUrl } from '../../api/getImageUrl';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import {
  selectAboutPage,
  selectAboutTitle,
  selectAboutInfo,
  selectDirector,
  selectDirectorInfo,
  selectDirectorPhoto,
  selectAboutDevelopment,
  selectAboutGoals,
  selectAboutTasks,
  selectTeachersSection,
  selectTeachersText,
  selectTeachersGallery,
} from '../../redux/about/selectors';
import PortableTextConfig from '../../components/PortableTextConfig';
import css from './AboutPage.module.css';

function AboutPage(): React.JSX.Element {
  const aboutPage = useSelector(selectAboutPage);
  const title = useSelector(selectAboutTitle);
  const info = useSelector(selectAboutInfo);
  const director = useSelector(selectDirector);
  const directorInfo = useSelector(selectDirectorInfo);
  const directorPhoto = useSelector(selectDirectorPhoto);
  const teachersSection = useSelector(selectTeachersSection);
  const teachersText = useSelector(selectTeachersText);
  const teachersGallery = useSelector(selectTeachersGallery);
  const goals = useSelector(selectAboutGoals);
  const tasks = useSelector(selectAboutTasks);
  const development = useSelector(selectAboutDevelopment);

  if (!aboutPage) return <div>Дані не знайдено</div>;

  return (
    <div className="flex flex-col p-8">
      <h2
        className={clsx(
          css.font,
          'mb-12 text-center text-5xl font-bold text-[#993333]'
        )}
      >
        {title}
      </h2>
      <div className="flex flex-col gap-4">
        {info && (
          <div className="text-md text-gray-700 bg-gray-100 p-4 rounded-xl shadow hover:shadow-md">
            <PortableText value={info} components={PortableTextConfig} />
          </div>
        )}

        {director && (
          <div className="text-md text-gray-700 bg-gray-100 p-4 rounded-xl shadow hover:shadow-md">
            <h3
              className={clsx(
                css.font,
                'text-2xl font-semibold text-[#993333] mb-4'
              )}
            >
              Директор
            </h3>

            <PortableText
              value={directorInfo}
              components={PortableTextConfig}
            />
            {directorPhoto && (
              <div className="flex justify-center">
                <div className="max-w-sm w-full">
                  <div className="p-4 bg-white">
                    <img
                      src={getImageUrl(directorPhoto.asset._ref, 1200)}
                      alt="Директор школи"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {teachersSection && (
          <div className="text-md text-gray-700 bg-gray-100 p-4 rounded-xl shadow hover:shadow-md">
            <h3
              className={clsx(
                css.font,
                'text-2xl font-semibold text-[#993333] mb-4'
              )}
            >
              Викладачі
            </h3>
            <PortableText
              value={aboutPage.teachersSection.statsText}
              components={PortableTextConfig}
            />
          </div>
        )}

        {/* {teachersGallery.length > 0 && (
                <div className="flex flex-col gap-8 px-0 sm:px-0 md:px-10">
                  {teachersGallery.map((photo, idx) => (
                    <img
                      key={idx}
                      src={getImageUrl(photo.asset._ref, 1200)}
                      alt={`Викладачі ${idx + 1}`}
                      className="w-full h-auto rounded-lg object-cover shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-101"
                    />
                  ))}
                </div>
              )} */}

        {goals && (
          <div className="text-md text-gray-700 bg-gray-100 p-4 rounded-xl shadow hover:shadow-md">
            <h3
              className={clsx(
                css.font,
                'text-2xl font-semibold text-[#993333] mb-4'
              )}
            >
              Мета нашого закладу
            </h3>
            <PortableText value={goals} components={PortableTextConfig} />
          </div>
        )}

        {tasks && (
          <div className="text-md text-gray-700 bg-gray-100 p-4 rounded-xl shadow hover:shadow-md">
            <h3
              className={clsx(
                css.font,
                'text-2xl font-semibold text-[#993333] mb-4'
              )}
            >
              Основні завдання
            </h3>
            <PortableText value={tasks} components={PortableTextConfig} />
          </div>
        )}
        {development && (
          <div className="mb-12 text-md text-gray-700 bg-gray-100 p-4 rounded-xl shadow hover:shadow-md">
            <h3
              className={clsx(
                css.font,
                'text-2xl font-semibold text-[#993333] mb-4'
              )}
            >
              Розвиток та інновації
            </h3>
            <PortableText value={development} components={PortableTextConfig} />
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutPage;

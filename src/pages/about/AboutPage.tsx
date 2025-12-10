import React, { useEffect } from 'react';
import { PortableText } from '@portabletext/react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectAboutPage } from '../../redux/about/selectors';
import PortableTextConfig from '../../components/PortableTextConfig';
import css from './AboutPage.module.css';

function AboutPage(): React.JSX.Element {
  const aboutPage = useSelector(selectAboutPage);
  if (!aboutPage) return <div>Дані не знайдено</div>;

  return (
    <div className="flex flex-col gap-4 p-8">
      <h2
        className={clsx(
          css.font,
          'mb-12 text-center text-5xl font-bold text-[#993333]'
        )}
      >
        {aboutPage.title}
      </h2>
      <div className="flex flex-col gap-2">
        {aboutPage.schoolInfo && (
          <div className="text-md text-gray-700 bg-gray-100 p-4 rounded-xl shadow hover:shadow-md">
            <PortableText
              value={aboutPage.schoolInfo}
              components={PortableTextConfig}
            />
          </div>
        )}

        {aboutPage.director && (
          <div className="text-md text-gray-700 bg-gray-100 p-4 rounded-xl shadow hover:shadow-md">
            <PortableText value={aboutPage.director?.info} />
          </div>
        )}

        {aboutPage.goals && (
          <div className="text-md text-gray-700 bg-gray-100 p-4 rounded-xl shadow hover:shadow-md">
            <PortableText
              value={aboutPage.goals}
              components={PortableTextConfig}
            />
          </div>
        )}

        {aboutPage.tasks && (
          <div className="text-md text-gray-700 bg-gray-100 p-4 rounded-xl shadow hover:shadow-md">
            <PortableText
              value={aboutPage.tasks}
              components={PortableTextConfig}
            />
          </div>
        )}
        {aboutPage.development && (
          <div className="mb-12 text-md text-gray-700 bg-gray-100 p-4 rounded-xl shadow hover:shadow-md">
            <PortableText
              value={aboutPage.development}
              components={PortableTextConfig}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutPage;

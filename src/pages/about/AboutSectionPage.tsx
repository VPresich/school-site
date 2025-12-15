import React from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PortableText } from '@portabletext/react';
import PortableTextConfig from '../../components/PortableTextConfig';
import { selectSectionBySlug } from '../../redux/about/selectors';
import css from './AboutPage.module.css';

const AboutSectionPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const section = useSelector(selectSectionBySlug(slug ?? ''));

  if (!section) return <div>Секція не знайдена</div>;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      <h2
        className={clsx(
          css.font,
          'text-4xl font-semibold text-[#993333] text-center'
        )}
      >
        {section.title}
      </h2>
      <div className="text-md text-gray-700 bg-gray-50 p-8 rounded-xl shadow hover:shadow-md">
        {section.content && (
          <PortableText
            value={section.content}
            components={PortableTextConfig}
          />
        )}
      </div>
    </div>
  );
};

export default AboutSectionPage;

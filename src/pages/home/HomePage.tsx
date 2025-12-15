import React from 'react';
import { PortableText } from '@portabletext/react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectHomePage } from '../../redux/home/selectors';
import DepartmentList from '../../components/DepartmentList';
import PortableTextConfig from '../../components/PortableTextConfig';
import CTASection from '../../components/CtaSection';
import css from './HomePage.module.css';

function HomePage(): React.JSX.Element {
  const homePage = useSelector(selectHomePage);
  if (!homePage) return <div>Дані не знайдено</div>;

  const cta = homePage?.ctaSection;

  return (
    <div className="text-center px-4 py-6 sm:px-6 md:py-8">
      <h2
        className={clsx(
          css.font,
          'font-bold mb-4 sm:mb-6 text-[#993333] text-3xl sm:text-4xl md:text-5xl'
        )}
      >
        {homePage.title}
      </h2>

      {homePage.welcomeText && (
        <div className="mb-6 sm:mb-8 text-[#993333] font-semibold text-2xl sm:text-3xl md:text-4xl leading-snug">
          <PortableText
            value={homePage.welcomeText}
            components={PortableTextConfig}
          />
        </div>
      )}

      {homePage.shortDescription && (
        <div className="mb-8 sm:mb-10 md:mb-12 text-[15px] sm:text-base text-gray-700 bg-gray-100 p-4 rounded-xl shadow hover:shadow-md transition">
          <PortableText
            value={homePage.shortDescription}
            components={PortableTextConfig}
          />
        </div>
      )}

      {cta && (
        <div className="mb-8 sm:mb-10 md:mb-12">
          <CTASection
            heading={cta.heading}
            subheading={cta.subheading}
            buttons={cta.buttons ?? []}
          />
        </div>
      )}

      <DepartmentList departments={homePage.departments ?? []} />
    </div>
  );
}

export default HomePage;

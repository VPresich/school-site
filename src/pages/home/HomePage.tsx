import React, { useEffect } from 'react';
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
    <div className="text-center p-8">
      <h2 className={clsx(css.font, 'text-5xl font-bold mb-8 text-[#993333]')}>
        {homePage.title}
      </h2>

      {homePage.welcomeText && (
        <div className="mb-10 text-[#993333] font-semibold text-4xl">
          <PortableText value={homePage.welcomeText} />
        </div>
      )}

      {homePage.shortDescription && (
        <div className="mb-12 text-md text-gray-700 bg-gray-100 p-4 rounded-xl shadow hover:shadow-md">
          <PortableText
            value={homePage.shortDescription}
            components={PortableTextConfig}
          />
        </div>
      )}

      {cta && (
        <div className="mb-14">
          <CTASection
            heading={cta.heading}
            subheading={cta.subheading}
            buttons={cta.buttons ?? []}
          />
        </div>
      )}

      <div className="flex flex-col gap-6 mt-10">
        <DepartmentList departments={homePage.departments ?? []} />
      </div>
    </div>
  );
}

export default HomePage;

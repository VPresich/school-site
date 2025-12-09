import React, { useEffect } from 'react';
import { PortableText } from '@portabletext/react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchHome } from '../../redux/home/operations';
import { selectHomePage } from '../../redux/home/selectors';
import DepartmentList from '../../components/DepartmentList';
import PortableTextConfig from '../../components/PortableTextConfig';
import CTASection from '../../components/CtaSection';
import {
  successNotify,
  errNotify,
} from '../../auxiliary/notification/notification';
import css from './HomePage.module.css';

function HomePage(): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const homePage = useSelector(selectHomePage);

  useEffect(() => {
    const initHomePage = async () => {
      try {
        await dispatch(fetchHome()).unwrap();
        successNotify('Success loading HOMEPAGE');
      } catch {
        errNotify('Error loading HOMEPAGE');
      }
    };
    initHomePage();
  }, [dispatch]);

  if (!homePage) return <div>Дані не знайдені</div>;
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

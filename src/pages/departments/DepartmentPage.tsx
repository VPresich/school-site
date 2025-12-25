import React, { useEffect } from 'react';
import clsx from 'clsx';
import { AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { PortableText } from '@portabletext/react';
import PortableTextConfig from '../../components/PortableTextConfig';
import { getImageUrl } from '../../api/getImageUrl';
import { fetchDepartmentBySlug } from '../../redux/departments/operations';
import { selectDepartmentBySlug } from '../../redux/departments/selectors';
import { ImageLightbox } from '../../components/ImageLightbox';
import { useParams } from 'react-router-dom';
import {
  errNotify,
  successNotify,
} from '../../auxiliary/notification/notification';
import css from './DepartmentPage.module.css';

const isDevMode = import.meta.env.VITE_DEVELOPED_MODE === 'true';

const DepartmentPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const department = useSelector(selectDepartmentBySlug(slug));

  useEffect(() => {
    const initDepartment = async () => {
      if (!slug) return;
      try {
        await dispatch(fetchDepartmentBySlug(slug)).unwrap();
        if (!slug) return;
        if (isDevMode) {
          successNotify(`Success loading DEPARTMENT - ${slug}`);
        }
      } catch {
        errNotify(`Error loading DEPARTMENT - ${slug}`);
      }
    };

    initDepartment();
  }, [dispatch, slug]);

  if (!department) return <div>Відділ не знайдено</div>;

  const teachersGallery = department.teachersGallery ?? [];
  const studentsGallery = department.studentsGallery ?? [];

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 space-y-12">
      <h2
        className={clsx(
          css.font,
          'text-2xl sm:text-3xl md:text-4xl font-semibold text-[#993333] text-center mb-2 sm:mb-3 md:mb-4'
        )}
      >
        {department.title}
      </h2>
      {department.resume && (
        <div className="bg-gray-50 mb-4 sm:mb-8 md:mb-10 text-[15px] sm:text-base text-gray-700 p-4 sm:px-6 md:px-10 rounded-xl shadow hover:shadow-md transition">
          <PortableText
            value={department.resume}
            components={PortableTextConfig}
          />
        </div>
      )}
      {department.teachersList && (
        <div className="bg-gray-50 mb-8 sm:mb-10 md:mb-12 p-4 sm:px-6 md:px-10 rounded-xl shadow hover:shadow-md transition">
          <h3
            className={clsx(
              css.font,
              'text-2xl font-semibold text-[#993333] mb-2'
            )}
          >
            Викладачі
          </h3>
          <PortableText
            value={department.teachersList}
            components={PortableTextConfig}
          />
        </div>
      )}
      {teachersGallery.length > 0 && (
        <div className="flex flex-col gap-8 md:gap-12 px-0 sm:px-0 md:px-10">
          {teachersGallery.map((photo, idx) => (
            <img
              key={idx}
              src={getImageUrl(photo.asset._ref, 1200)}
              alt={`Викладачі ${idx + 1}`}
              className="w-full h-auto rounded-lg object-cover shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-101"
            />
          ))}
        </div>
      )}

      {department.teachersText && (
        <div className="bg-gray-50 mb-8 sm:mb-10 text-[15px] sm:text-base text-gray-700 p-4 sm:px-6 md:px-10 rounded-xl shadow hover:shadow-md transition">
          <PortableText
            value={department.teachersText}
            components={PortableTextConfig}
          />
        </div>
      )}

      {studentsGallery.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-0 sm:px-0 md:px-8">
          {studentsGallery.map((photo, idx) => (
            <ImageLightbox
              key={idx}
              src={getImageUrl(photo.asset._ref, 1200)}
              alt={`Учень ${idx + 1}`}
              className="w-full h-48 sm:h-80 md:h-[620px] rounded-lg object-cover shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-101 cursor-zoom-in"
            />
          ))}
        </div>
      )}

      {department.studentsText && (
        <div className="bg-gray-50 mb-8 sm:mb-10 md:mb-12 p-4 sm:px-6 md:px-10 rounded-xl shadow hover:shadow-md transition">
          <h3
            className={clsx(
              css.font,
              'text-2xl font-semibold text-[#993333] mb-2'
            )}
          >
            Учні
          </h3>

          <PortableText
            value={department.studentsText}
            components={PortableTextConfig}
          />
        </div>
      )}
    </div>
  );
};

export default DepartmentPage;

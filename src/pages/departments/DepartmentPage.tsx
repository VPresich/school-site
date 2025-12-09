import React, { useEffect } from 'react';
import { PortableText } from '@portabletext/react';
import clsx from 'clsx';
import { AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getImageUrl } from '../../api/getImageUrl';
import { fetchDepartmentBySlug } from '../../redux/departments/operations';
import { selectDepartmentBySlug } from '../../redux/departments/selectors';
import PortableTextConfig from '../../components/PortableTextConfig';
import { useParams } from 'react-router-dom';
import { Department } from '../../redux/departments/types';
import {
  errNotify,
  successNotify,
} from '../../auxiliary/notification/notification';
import css from './DepartmentPage.module.css';

const DepartmentPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useDispatch<AppDispatch>();

  if (!slug) return <div>Відділ не знайдено</div>;

  const department = useSelector(selectDepartmentBySlug(slug)) as Department;

  useEffect(() => {
    const initDepartment = async () => {
      if (!slug) return;
      try {
        const department = await dispatch(fetchDepartmentBySlug(slug)).unwrap();
        if (!slug) return;
        successNotify(`Success loading DEPARTMENT - ${slug}`);
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
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      <h2
        className={clsx(
          css.font,
          'text-4xl font-semibold text-[#993333] text-center'
        )}
      >
        {department.title}
      </h2>
      {department.resume && (
        <PortableText
          value={department.resume}
          components={PortableTextConfig}
        />
      )}
      {department.teachersList && (
        <>
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
        </>
      )}
      {teachersGallery.length > 0 && (
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
      )}

      {department.teachersText && (
        <PortableText
          value={department.teachersText}
          components={PortableTextConfig}
        />
      )}
      {studentsGallery.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {studentsGallery.map((photo, idx) => (
            <img
              key={idx}
              src={getImageUrl(photo.asset._ref, 1200)}
              alt={`Учень ${idx + 1}`}
              className="w-full h-auto rounded-lg object-cover shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-101"
            />
          ))}
        </div>
      )}
      {department.studentsText && (
        <>
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
        </>
      )}
    </div>
  );
};

export default DepartmentPage;

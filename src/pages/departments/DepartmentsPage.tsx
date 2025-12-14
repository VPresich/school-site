import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import DepGalleryItem from '../../components/DepGalleryItem';
import { selectAllDepartments } from '../../redux/departments/selectors';
import css from './DepartmentPage.module.css';

const DepartmentsPage: React.FC = () => {
  const departments = useSelector(selectAllDepartments);

  return (
    <div className="p-8">
      <h2
        className={clsx(
          css.font,
          'mb-12 text-center text-5xl font-bold text-[#993333]'
        )}
      >
        Відділи школи
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {departments.map(dep => (
          <DepGalleryItem key={dep.slug.current} dep={dep} />
        ))}
      </div>
    </div>
  );
};

export default DepartmentsPage;

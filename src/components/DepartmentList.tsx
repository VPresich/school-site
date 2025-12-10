// DepartmentList.tsx
import React from 'react';
import DepartmentCard from './DepartmentCard';
import { HomeDepartment } from '../redux/home/types';

interface DepartmentListProps {
  departments: HomeDepartment[];
}

const DepartmentList: React.FC<DepartmentListProps> = ({ departments }) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 md:gap-10">
      {departments.map(dep => (
        <DepartmentCard key={dep.slug?.current || dep.name} department={dep} />
      ))}
    </div>
  );
};

export default DepartmentList;

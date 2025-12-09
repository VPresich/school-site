// DepartmentList.tsx
import React from 'react';
import DepartmentCard from './DepartmentCard';
import { HomeDepartment } from '../redux/home/types';

interface DepartmentListProps {
  departments: HomeDepartment[];
}

const DepartmentList: React.FC<DepartmentListProps> = ({ departments }) => {
  return (
    <div className="mt-12 flex flex-col gap-6">
      {departments.map(dep => (
        <DepartmentCard key={dep.slug?.current || dep.name} department={dep} />
      ))}
    </div>
  );
};

export default DepartmentList;

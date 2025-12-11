import React from 'react';
import { AboutTeacher } from '../redux/about/types';
import TeacherCard from './TeacherCard';

interface TeachersGridProps {
  teachers: AboutTeacher[];
}

const TeachersGrid: React.FC<TeachersGridProps> = ({ teachers }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {teachers.map((teacher, idx) => (
        <TeacherCard key={idx} teacher={teacher} />
      ))}
    </div>
  );
};

export default TeachersGrid;

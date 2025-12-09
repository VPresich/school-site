// DepartmentCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '../api/getImageUrl';
import { PortableText } from '@portabletext/react';
import { HomeDepartment } from '../redux/home/types';
import PortableTextConfig from './PortableTextConfig';

interface DepartmentCardProps {
  department: HomeDepartment;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ department }) => {
  const navigate = useNavigate();

  const handleClick = (slug?: { current: string }) => {
    if (!slug?.current) {
      navigate('/departments/piano');
    } else {
      navigate(`/departments/${slug.current}`);
    }
  };

  return (
    <div
      className="flex flex-col bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition-all cursor-pointer gap-6"
      onClick={() => handleClick(department.slug)}
    >
      <h3 className="text-2xl font-semibold text-center text-[#993333]">
        {department.name}
      </h3>

      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-full md:w-60 h-44 rounded-xl overflow-hidden shadow-sm mx-auto md:mx-0">
          <img
            src={getImageUrl(department.image)}
            alt={department.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="
          flex-1 text-left text-gray-700
          max-h-48 overflow-hidden
          md:columns-2 md:gap-4
        "
        >
          <PortableText
            value={department.description}
            components={PortableTextConfig}
          />
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;

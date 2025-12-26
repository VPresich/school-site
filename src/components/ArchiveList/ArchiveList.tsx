import React from 'react';
import ArchiveCard from '../ArchiveCard/ArchiveCard';
import { ArchiveListProps } from './ArchiveList.types';
import { ArchiveItemUI } from '../../redux/archive/types';

const ArchiveList: React.FC<ArchiveListProps> = ({ list = [] }) => {
  if (list.length === 0) {
    return <p className="text-gray-500">Архів порожній</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      {list.map((item: ArchiveItemUI) => (
        <ArchiveCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ArchiveList;

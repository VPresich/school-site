import React from 'react';
import { useSelector, UseSelector } from 'react-redux';
import { selectArchiveList } from '../../redux/archive/selectors';
import ArchiveList from '../../components/ArchiveList/ArchiveList';

function ArchivePage(): React.JSX.Element {
  const archiveList = useSelector(selectArchiveList);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 gap-1 sm:gap-2 md:gap-4">
      <h1 className="text-3xl font-bold mb-4">Архів</h1>
      <ArchiveList list={archiveList} />
    </div>
  );
}

export default ArchivePage;

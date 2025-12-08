import React from 'react';
import { useSelector, UseSelector } from 'react-redux';
import { selectArchiveList } from '../../redux/archive/selectors';
import ArchiveList from '../../components/ArchiveList/ArchiveList';

function ArchivePage(): React.JSX.Element {
  const archiveList = useSelector(selectArchiveList);

  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4">Архів</h1>
      <ArchiveList list={archiveList} />
    </div>
  );
}

export default ArchivePage;

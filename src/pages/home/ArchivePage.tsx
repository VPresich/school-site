import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArchivePage } from '../../redux/archive/operation';
import { setActivePage } from '../../redux/archive/slice';
import Pagination from '../../components/Pagination';
import { AppDispatch } from '../../redux/store';
import ArchFilterForm from '../../components/ArchFilterForm/ArchFilterForm';
import {
  selectArchiveItemsUI,
  selectPage,
  selectLimit,
  selectTotalPages,
} from '../../redux/archive/selectors';
import ArchiveList from '../../components/ArchiveList/ArchiveList';
import {
  errNotify,
  successNotify,
} from '../../auxiliary/notification/notification';
import css from './HomePage.module.css';

const isDevMode = import.meta.env.VITE_DEVELOPED_MODE === 'true';

function ArchivePage(): React.JSX.Element {
  const archiveList = useSelector(selectArchiveItemsUI);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getArchivePage = async () => {
      try {
        await dispatch(fetchArchivePage({ page, limit })).unwrap();
        if (isDevMode) {
          successNotify('Success loading ARCHIVE PAGE');
        }
      } catch {
        errNotify('Error loading ARCHIVE PAGE');
      }
    };
    getArchivePage();
  }, [dispatch, page, limit]);

  const handlePageChange = (p: number) => {
    dispatch(setActivePage(p));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 gap-1">
      <h2
        className={clsx(
          css.font,
          'mb-4 md:mb-6 text-center text-5xl font-bold text-[#993333]'
        )}
      >
        Архів подій
      </h2>
      <ArchFilterForm />
      <ArchiveList list={archiveList} />
      <Pagination onPageChange={handlePageChange} />
    </div>
  );
}

export default ArchivePage;

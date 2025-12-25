import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { IoColorFilterOutline } from 'react-icons/io5';
import { fetchArchivePage } from '../../redux/archive/operations';
import { setActivePage } from '../../redux/archive/slice';
import Pagination from '../../components/Pagination';
import FilterSlider from '../../components/FilterSlider';
import { AppDispatch } from '../../redux/store';
import ArchFilterForm from '../../components/ArchFilterForm/ArchFilterForm';
import {
  selectArchiveItemsUI,
  selectPage,
  selectLimit,
} from '../../redux/archive/selectors';
import ArchiveList from '../../components/ArchiveList/ArchiveList';
import {
  errNotify,
  successNotify,
} from '../../auxiliary/notification/notification';
import css from './HomePage.module.css';

const isDevMode = import.meta.env.VITE_DEVELOPED_MODE === 'true';

function ArchivePage(): React.JSX.Element {
  const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false);
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
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 gap-4">
      <h2
        className={clsx(
          css.font,
          'text-2xl sm:text-3xl md:text-4xl font-semibold text-[#993333] text-center shrink-0'
        )}
      >
        Новини / події
      </h2>

      <div className="flex items-start justify-between w-full gap-4">
        <div className="hidden sm:flex">
          <ArchFilterForm />
        </div>

        <div className="shrink-0">
          <button
            onClick={() => setIsSliderOpen(true)}
            className={clsx(
              'sm:hidden py-2 px-3 rounded-xl border font-semibold flex items-center gap-2',
              'transition-colors duration-300',
              isSliderOpen
                ? 'bg-[#993333] text-white border-[#993333]'
                : 'bg-white text-[#993333] border-[#993333] hover:bg-[#d66044] hover:text-white'
            )}
          >
            <IoColorFilterOutline className="text-2xl" />
            <span>Фільтр</span>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        <ArchiveList list={archiveList} />
        <Pagination onPageChange={handlePageChange} />
      </div>

      {isSliderOpen && (
        <div className="lg:hidden">
          <FilterSlider onClose={() => setIsSliderOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default ArchivePage;

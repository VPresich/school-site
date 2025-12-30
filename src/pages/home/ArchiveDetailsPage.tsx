import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchArchiveById } from '../../redux/archive/operations';
import { selectCurrentItemUI } from '../../redux/archive/selectors';
import ArchiveCard from '../../components/ArchiveCard';

function ArchiveDetailsPage(): React.JSX.Element | null {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const item = useSelector(selectCurrentItemUI);

  useEffect(() => {
    if (id) {
      dispatch(fetchArchiveById(id));
    }
  }, [id, dispatch]);

  if (!item) {
    return null;
  }

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/posters');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <ArchiveCard item={item} preview_blocks={30} isCurrent={true} />
      <div className="flex  justify-end">
        <button
          onClick={handleBack}
          className="             
              bg-[#993333]           
              backdrop-blur
              text-white
              text-xs md:text-sm
              px-3
              py-1.5
              rounded-full              
              shadow-2xl
              hover:bg-[#d66044]
              hover:cursor-pointer
              transition
              flex gap-1 items-center justify-center
              mt-2 md:mt-4"
        >
          <IoMdArrowBack size={16} /> Назад
        </button>
      </div>
    </div>
  );
}

export default ArchiveDetailsPage;

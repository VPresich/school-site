import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchArchiveById } from '../../redux/archive/operations';
import { selectCurrentItemUI } from '../../redux/archive/selectors';
import ArchiveCard from '../../components/ArchiveCard';

const ArchiveDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const item = useSelector(selectCurrentItemUI);

  useEffect(() => {
    if (id) {
      dispatch(fetchArchiveById(id));
    }
  }, [id, dispatch]);

  if (!item) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <ArchiveCard item={item} preview_blocks={30} />
    </div>
  );
};

export default ArchiveDetailsPage;

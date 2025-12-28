import { Dialog } from '@headlessui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { fetchArchiveById } from '../redux/archive/operations';
import { selectCurrentItemUI } from '../redux/archive/selectors';
import { IoCloseOutline } from 'react-icons/io5';
import ArchiveCard from './ArchiveCard';

interface Props {
  archiveId: string | null;
  onClose: () => void;
}

const ArchiveDetailsModal: React.FC<Props> = ({ archiveId, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const item = useSelector(selectCurrentItemUI);

  useEffect(() => {
    if (archiveId) {
      dispatch(fetchArchiveById(archiveId));
    }
  }, [archiveId, dispatch]);

  if (!archiveId) return null;

  return (
    <Dialog open={true} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/70" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div
          className="
          relative bg-white rounded-xl shadow-xl
          max-w-3xl w-full max-h-[90vh] overflow-y-auto
          p-6
        "
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-black"
          >
            <IoCloseOutline size={28} />
          </button>

          {item && <ArchiveCard item={item} />}
        </div>
      </div>
    </Dialog>
  );
};

export default ArchiveDetailsModal;

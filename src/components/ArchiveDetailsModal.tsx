import { Dialog } from '@headlessui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { fetchArchiveById } from '../redux/archive/operations';
import { selectCurrentItemUI } from '../redux/archive/selectors';
import { PortableText } from '@portabletext/react';
import PortableTextConfig from './PortableTextConfig';
import { IoCloseOutline } from 'react-icons/io5';
import { formatDate } from '../auxiliary/formatDate';
import ArchiveCard from './ArchiveCard';
import { getImageUrl } from '../api/getImageUrl';

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
        <Dialog.Panel
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
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ArchiveDetailsModal;

// <div className="space-y-4">
//   <h2 className="text-2xl font-semibold text-[#993333]">
//     {item.title}
//   </h2>

//   <p className="text-sm text-gray-600">
//     {formatDate(item.date)}
//     {item.enddate && ` – ${formatDate(item.enddate)}`}
//   </p>

//   {item.poster && (
//     <img
//       src={getImageUrl(item.poster.asset._ref, 900)}
//       alt={item.title}
//       className="w-full rounded-lg object-contain bg-gray-50"
//     />
//   )}

//   {item.description && (
//     <div className="prose prose-sm max-w-none">
//       <PortableText
//         value={item.description}
//         components={PortableTextConfig}
//       />
//     </div>
//   )}
// </div>

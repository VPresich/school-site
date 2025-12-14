import { Dialog } from '@headlessui/react';
import { useState, FC } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

interface ImageLightboxProps {
  src: string;
  alt?: string;
  className?: string;
}

export const ImageLightbox: FC<ImageLightboxProps> = ({
  src,
  alt,
  className,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={
          className ??
          'w-full h-48 object-cover rounded cursor-pointer hover:opacity-90 transition'
        }
        onClick={() => setOpen(true)}
      />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-black/80"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
        <div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
          <div className="relative pointer-events-auto">
            <img
              src={src}
              alt={alt}
              className="max-w-[90vw] max-h-[90vh] rounded shadow-2xl"
            />

            <button
              onClick={() => setOpen(false)}
              className="absolute -top-4 -right-4 bg-black text-white w-10 h-10 rounded-full text-2xl flex items-center justify-center hover:bg-gray-800 cursor-pointer"
            >
              <IoCloseOutline size={20} />
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

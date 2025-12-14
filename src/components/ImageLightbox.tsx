import { Dialog } from '@headlessui/react';
import { useState, FC } from 'react';

interface ImageLightboxProps {
  src: string;
  alt?: string;
}

export const ImageLightbox: FC<ImageLightboxProps> = ({ src, alt }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover rounded cursor-pointer hover:opacity-90 transition"
        onClick={() => setOpen(true)}
      />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative">
            <img
              src={src}
              alt={alt}
              className="max-w-[90vw] max-h-[90vh] rounded shadow-2xl"
            />

            <button
              onClick={() => setOpen(false)}
              className="absolute -top-4 -right-4 bg-black text-white w-10 h-10 rounded-full text-2xl flex items-center justify-center hover:bg-gray-800"
            >
              ×
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

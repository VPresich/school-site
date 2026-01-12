import { Dialog } from '@headlessui/react';
import { useState, FC } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

interface ImageLightboxProps {
  src: string;
  srcLarge?: string;
  alt?: string;
  className?: string;
  onError?: React.ReactEventHandler<HTMLImageElement>;
  mode?: 'slider' | 'document';
}

export const ImageLightbox: FC<ImageLightboxProps> = ({
  src,
  srcLarge = src,
  alt,
  className,
  onError,
  mode = 'slider',
}) => {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const displaySrc = mode === 'document' && zoomed && srcLarge ? srcLarge : src;

  const containerClass =
    mode === 'document' && zoomed
      ? 'overflow-auto max-w-[90vw] max-h-[90vh]'
      : 'w-full h-full flex items-center justify-center';

  const imageClass = () => {
    if (isMobile) {
      return 'object-contain rounded shadow-2xl';
    }
    if (mode === 'slider') {
      return `
        max-w-[90vw]
        max-h-[90vh]
        object-contain
        rounded shadow-2xl
        transition-transform duration-300 ease-in-out
        ${zoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}
      `;
    }
    if (mode === 'document') {
      return zoomed
        ? 'block w-auto h-auto rounded shadow-2xl cursor-zoom-out'
        : 'max-w-[90vw] max-h-[90vh] object-contain rounded shadow-2xl cursor-zoom-in';
    }
  };

  const close = () => {
    setOpen(false);
    setZoomed(false);
  };

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
        onError={onError}
      />

      <Dialog open={open} onClose={close} className="fixed inset-0 z-50">
        <div className="fixed inset-0 bg-black/80" onClick={close} />

        <button
          onClick={close}
          className="fixed top-4 right-4 z-50 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 cursor-pointer"
        >
          <IoCloseOutline size={20} />
        </button>

        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className={`pointer-events-auto relative ${containerClass} mx-auto`}
          >
            <img
              src={displaySrc}
              alt={alt}
              onClick={() => {
                if (!isMobile) setZoomed(!zoomed);
              }}
              className={imageClass()}
            />
          </div>
        </div>
      </Dialog>
    </>
  );
};

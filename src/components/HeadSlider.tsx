import React, { useState, useEffect } from 'react';

const slidesImport = import.meta.glob('../assets/images/slider/*.{jpg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const slides: string[] = Object.values(slidesImport) as string[];

const HeadSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative overflow-hidden h-40 sm:h-56 md:h-64 lg:h-72">
      {slides.map((slide, idx) => (
        <img
          key={idx}
          src={slide}
          alt={`Slide ${idx + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default HeadSlider;

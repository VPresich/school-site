import React, { useState, useEffect } from "react";

const slidesImport = import.meta.glob(
  "../../assets/images/slider/*.{jpg,png}",
  { eager: true, as: "url" }
);
const slides = Object.values(slidesImport);

const HeadSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-64 relative overflow-hidden">
      {slides.map((slide, idx) => (
        <img
          key={idx}
          src={slide}
          alt={`Slide ${idx + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default HeadSlider;

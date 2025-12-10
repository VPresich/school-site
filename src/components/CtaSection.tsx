import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface CTAButton {
  label: string;
  slug?: { current: string };
}

interface CTASectionProps {
  heading: string;
  subheading: string;
  buttons: CTAButton[];
}

const CTASection: React.FC<CTASectionProps> = ({
  heading,
  subheading,
  buttons,
}) => {
  const navigate = useNavigate();

  const handleClick = (btn: CTAButton) => {
    if (!btn.slug?.current) {
      navigate('/about');
    } else {
      navigate(`/${btn.slug.current}`);
    }
  };

  return (
    <div
      className="bg-[#b34747]/70 backdrop-blur-lg text-white rounded-xl 
                  p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl
                  transition-shadow duration-300"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 leading-snug">
        {heading}
      </h2>

      <p className="mb-6 sm:mb-8 text-base sm:text-xl leading-relaxed">
        {subheading}
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap">
        {buttons.map((btn, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(btn)}
            className="
            bg-white text-[#993333] font-semibold 
            px-4 py-2 sm:px-6 sm:py-3 
            rounded-lg 
            hover:bg-gray-100 transition-colors cursor-pointer
            w-full sm:w-auto
          "
          >
            {btn.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CTASection;

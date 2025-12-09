// CTASection.tsx
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
      navigate('/departments/piano');
    } else {
      navigate(`/departments/${btn.slug.current}`);
    }
  };

  return (
    <div className="bg-[#b34747] text-white rounded-xl p-8 mb-8 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug">
        {heading}
      </h2>
      <p className="mb-8 text-lg sm:text-xl leading-relaxed">{subheading}</p>
      <div className="flex justify-center gap-4 flex-wrap">
        {buttons.map((btn, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(btn)}
            className="bg-white text-[#993333] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            {btn.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CTASection;

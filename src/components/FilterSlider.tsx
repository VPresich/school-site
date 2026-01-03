import React from 'react';
import { IoClose } from 'react-icons/io5';
import FilterForm from './FilterForm/FilterForm';

interface FilterSliderProps {
  onClose: () => void;
}

const FilterSlider: React.FC<FilterSliderProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
      <div className="w-3/4 max-w-xs bg-white h-dvh p-2 shadow-xl flex flex-col">
        <button
          onClick={onClose}
          className="self-end p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <IoClose size={22} />
        </button>
        <div className="flex-1 overflow-y-auto">
          <FilterForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default FilterSlider;

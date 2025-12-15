import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

interface DDMultySelectorProps<T> {
  options: T[];
  selectedOptions: string[];
  nameOptions: string;
  onChange: (selected: string[]) => void;
  toValue: (item: T) => string;
  transform: (value: string) => { title: string; value: string };
  CheckIcon: IconType;
  error?: string;
}

function DDMultySelector<T>({
  options,
  selectedOptions,
  nameOptions,
  onChange,
  toValue,
  transform,
  CheckIcon,
  error,
}: DDMultySelectorProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (value: string) => {
    const updated = selectedOptions.includes(value)
      ? selectedOptions.filter(v => v !== value)
      : [...selectedOptions, value];
    onChange(updated);
  };

  const allValues = options.map(toValue);

  const handleSelectAllToggle = () => {
    if (selectedOptions.length === allValues.length) {
      onChange([]);
    } else {
      onChange(allValues);
    }
  };

  return (
    <div className="relative inline-block">
      <div className="flex flex-col">
        <span className="text-[#993333]">{nameOptions}</span>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex
              text-[#993333]
              bg-white
              rounded-xl
              py-2.5 px-4
              border border-[#993333]
              cursor-pointer
              transition-colors duration-300 ease-in-out
              hover:bg-[#993333]
              hover:text-white
              "
        >
          <div className="flex items-center gap-4 ">
            <span>Вибрати</span>
            <IoChevronDown
              className={`transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>
        <div className="relative h-5">
          {error && <p className="absolute text-sm text-red-600">{error}</p>}
        </div>
      </div>
      {/* Dropdown list */}
      {isOpen && (
        <div
          className="absolute top-full right-0 w-max flex flex-col gap-2 bg-white rounded-lg shadow-xl
           shadow-black/10 border border-black/5  p-4 z-50"
        >
          <button
            type="button"
            onClick={handleSelectAllToggle}
            className="font-inherit font-normal text-[#993333] bg-transparent  cursor-pointer underline  decoration-transparent  hover:decoration-[#993333] transition-colors  duration-300"
          >
            {selectedOptions.length === allValues.length
              ? 'Скасувати всі'
              : 'Обрати всі'}
          </button>

          <div className="flex flex-col gap-2 bg-white">
            {options.map((option, index) => {
              const value = toValue(option);
              const { title } = transform(value);
              const checked = selectedOptions.includes(value);

              return (
                <label
                  key={value ?? index}
                  className="flex items-center gap-2.5 cursor-pointer select-none relative"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleCheckboxChange(value)}
                    className="absolute opacity-0 pointer-events-none"
                  />
                  <span
                    className={`w-[18px] h-[18px] border border-[#993333] rounded flex items-center justify-center box-border ${
                      checked ? 'bg-[#993333]' : 'bg-white'
                    }`}
                  >
                    {checked && (
                      <CheckIcon className="w-3.5 h-3.5 text-white" />
                    )}
                  </span>
                  <span className="text-sm text-[#993333]">{title}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default DDMultySelector;

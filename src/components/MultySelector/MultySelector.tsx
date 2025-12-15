import React from 'react';
import { IconType } from 'react-icons';

// ===== Generic helpers =====
export interface CategoryItem {
  title: string;
  value: string;
}

export type ToStringFn<T> = (item: T) => string;
export type TransformFn = (value: string) => CategoryItem;

// ===== Props =====
interface MultySelectorProps<T> {
  options: T[];
  selectedOptions: string[];
  nameOptions: string;
  onChange: (selected: string[]) => void;
  toValue: ToStringFn<T>;
  transform: TransformFn;
  CheckIcon: IconType;
  error?: string;
}

// ===== Component =====
function MultySelector<T>({
  options,
  selectedOptions,
  nameOptions,
  onChange,
  toValue,
  transform,
  CheckIcon,
  error,
}: MultySelectorProps<T>) {
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
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-[#993333]">{nameOptions}</span>
          <button
            type="button"
            onClick={handleSelectAllToggle}
            className="font-inherit font-normal text-[#993333] bg-transparent  cursor-pointer underline  decoration-transparent  hover:decoration-[#993333] transition-colors  duration-300"
          >
            {selectedOptions.length === allValues.length
              ? 'Скасувати всі'
              : 'Обрати всі'}
          </button>
        </div>

        <div className="flex flex-col gap-1.5 bg-white">
          {options.map((option, index) => {
            const value = toValue(option);
            const { title } = transform(value);
            const checked = selectedOptions.includes(value);

            return (
              <label
                key={value ?? index}
                className="flex items-center gap-2 cursor-pointer group"
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
                  } group-hover:border-[#d66044] group-hover:bg-[#f0e6e6] transition-colors duration-200 `}
                >
                  {checked && <CheckIcon className="w-3.5 h-3.5 text-white" />}
                </span>

                <span className="text-sm text-[#993333]">{title}</span>
              </label>
            );
          })}
        </div>
      </div>
      <div className="h-2">
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
}

export default MultySelector;

import React from 'react';
import clsx from 'clsx';
import { IconType } from 'react-icons';
import css from './MultySelector.module.css';

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
  onChange: (selected: string[]) => void;

  /** Converts option to string value (stored in selectedOptions) */
  toValue: ToStringFn<T>;

  /** Converts value string to display object */
  transform: TransformFn;

  /** React icon for checked state */
  CheckIcon: IconType;

  optionCSSClass?: string;
}

// ===== Component =====
function MultySelector<T>({
  options,
  selectedOptions,
  onChange,
  toValue,
  transform,
  CheckIcon,
  optionCSSClass,
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
    <div className={css.container}>
      <div className={css.header}>
        <span className={css.title}>Категорії</span>
        <button
          type="button"
          onClick={handleSelectAllToggle}
          className={css.button}
        >
          {selectedOptions.length === allValues.length
            ? 'Скасувати всі'
            : 'Обрати всі'}
        </button>
      </div>

      <div className={css.list}>
        {options.map((option, index) => {
          const value = toValue(option);
          const { title } = transform(value);
          const checked = selectedOptions.includes(value);

          return (
            <label
              key={value ?? index}
              className={clsx(
                css.option,
                { [css.selected]: checked },
                optionCSSClass
              )}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => handleCheckboxChange(value)}
                className={css.input}
              />

              <span className={`${css.box} ${checked ? css.checked : ''}`}>
                {checked && <CheckIcon className={css.icon} />}
              </span>

              <span className={css.label}>{title}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default MultySelector;

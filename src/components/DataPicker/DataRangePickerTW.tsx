import React, { useState, useRef } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { FaRegCalendar } from 'react-icons/fa';
import { uk } from 'date-fns/locale';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('uk', {
  ...uk,
  localize: {
    ...uk.localize,
    day: (n: number) => ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'][n],
  },
});

interface Props {
  onChange: (range: { startDate: Date | null; endDate: Date | null }) => void;
}

export const DateRangePickerTW: React.FC<Props> = ({ onChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const startRef = useRef<DatePicker>(null);
  const endRef = useRef<DatePicker>(null);

  const handleStart = (date: Date | null) => {
    setStartDate(date);
    if (date && endDate && endDate < date) setEndDate(null);
    onChange({ startDate: date, endDate });
  };

  const handleEnd = (date: Date | null) => {
    setEndDate(date);
    onChange({ startDate, endDate: date });
  };

  return (
    <div className="flex flex-col gap-3 date-range">
      {/* Start Date */}
      <div className="flex flex-col gap-1">
        <label className="text-[#993333]">Дата початку</label>

        <div className="relative">
          <DatePicker
            ref={startRef}
            selected={startDate}
            onChange={handleStart}
            locale="uk"
            placeholderText="Оберіть дату"
            maxDate={endDate ?? undefined}
            showYearDropdown
            showMonthDropdown
            dropdownMode="select"
            showPopperArrow={false}
            className="
              w-full h-12 px-3 pr-10 rounded-lg border
              border-black/20 bg-(--inputs) text-(--main)
              focus:border-(--button) focus:ring-2 focus:ring-[#993333]/30
              outline-none transition-all
            "
            calendarClassName="
              rounded-xl border border-black/25 overflow-hidden shadow-lg
            "
            dayClassName={d =>
              'rounded-md transition text-sm p-1 hover:bg-[var(--button)] hover:text-white ' +
              (startDate?.toDateString() === d.toDateString() ||
              endDate?.toDateString() === d.toDateString()
                ? 'bg-[var(--button)] text-white'
                : '')
            }
            popperClassName="z-50"
          />

          <FaRegCalendar
            className="absolute right-3 top-1/2 -translate-y-1/2 text-(--button) text-lg cursor-pointer"
            onClick={() => startRef.current?.setOpen(true)}
          />
        </div>
      </div>

      {/* End Date */}
      <div className="flex flex-col gap-1">
        <label className="text-[#993333]">Дата завершення</label>

        <div className="relative">
          <DatePicker
            ref={endRef}
            selected={endDate}
            onChange={handleEnd}
            locale="uk"
            placeholderText="Оберіть дату"
            minDate={startDate ?? undefined}
            showYearDropdown
            showMonthDropdown
            dropdownMode="select"
            showPopperArrow={false}
            className="
              w-full h-12 px-3 pr-10 rounded-lg border
              border-black/20 bg-(--inputs) text-(--main)
              focus:border-(--button) focus:ring-2 focus:ring-[#993333]/30
              outline-none transition-all
            "
            calendarClassName="
              rounded-xl border border-black/25 overflow-hidden shadow-lg
            "
            dayClassName={d =>
              'rounded-md transition text-sm p-1 hover:bg-[var(--button)] hover:text-white ' +
              (startDate?.toDateString() === d.toDateString() ||
              endDate?.toDateString() === d.toDateString()
                ? 'bg-[var(--button)] text-white'
                : '')
            }
            popperClassName="z-50"
          />

          <FaRegCalendar
            className="absolute right-3 top-1/2 -translate-y-1/2 text-(--button) text-lg cursor-pointer"
            onClick={() => endRef.current?.setOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};

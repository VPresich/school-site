import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import DatePicker, { registerLocale } from 'react-datepicker';
import { FaRegCalendar } from 'react-icons/fa';
import { uk } from 'date-fns/locale';

import 'react-datepicker/dist/react-datepicker.css';
import './DateRangePicker.css';

registerLocale('uk', {
  ...uk,
  localize: {
    ...uk.localize,
    day: (n: number) => ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'][n],
  },
});

interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

interface DateRangePickerProps {
  value: DateRange;
  onChange: (dates: DateRange) => void;
  startError?: string | undefined;
  endError?: string | undefined;
  className?: string;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  value,
  onChange,
  startError,
  endError,
  className,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(value.startDate);
  const [endDate, setEndDate] = useState<Date | null>(value.endDate);

  const startRef = useRef<DatePicker>(null);
  const endRef = useRef<DatePicker>(null);

  const handleStartChange = (date: Date | null) => {
    setStartDate(date);
    if (date && endDate && endDate < date) {
      setEndDate(null);
    }
    onChange({ startDate: date, endDate });
  };

  const handleEndChange = (date: Date | null) => {
    setEndDate(date);
    onChange({ startDate, endDate: date });
  };

  return (
    <div
      className={clsx('date-range-picker', className ?? 'flex flex-col gap-2')}
    >
      <div className="flex flex-col">
        <label className="text-[#993333]">Дата початку</label>

        <div className="drp-wrapper">
          <DatePicker
            ref={startRef}
            selected={startDate}
            onChange={handleStartChange}
            locale="uk"
            placeholderText="Оберіть дату"
            className="drp-input"
            calendarClassName="drp-calendar"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            maxDate={endDate ?? undefined}
            showPopperArrow={false}
            popperContainer={({ children }) => (
              <div className="relative z-10">{children}</div>
            )}
          />
          <FaRegCalendar
            className="drp-icon"
            onClick={() => startRef.current?.setOpen(true)}
          />
        </div>

        <div className="h-3">
          {startError && <p className="text-sm text-red-600">{startError}</p>}
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-[#993333]">Дата завершення</label>

        <div className="drp-wrapper">
          <DatePicker
            ref={endRef}
            selected={endDate}
            onChange={handleEndChange}
            locale="uk"
            placeholderText="Оберіть дату"
            className="drp-input"
            calendarClassName="drp-calendar"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            minDate={startDate ?? undefined}
            showPopperArrow={false}
            popperContainer={({ children }) => (
              <div className="relative z-10">{children}</div>
            )}
          />
          <FaRegCalendar
            className="drp-icon"
            onClick={() => endRef.current?.setOpen(true)}
          />
        </div>

        <div className="relative h-3">
          {endError && (
            <p className="absolute text-sm text-red-600">{endError}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;

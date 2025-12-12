import React, { useState, useRef } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { FaRegCalendar } from 'react-icons/fa';
import { uk } from 'date-fns/locale';

import 'react-datepicker/dist/react-datepicker.css';
import '../DateRangePicker.css';

registerLocale('uk', {
  ...uk,
  localize: {
    ...uk.localize,
    day: (n: number) => ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'][n],
  },
});

interface DateRangePickerProps {
  onChange: (dates: { startDate: Date | null; endDate: Date | null }) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

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
    <div className="range-wrapper">
      {/* START DATE */}
      <div className="datepicker-field">
        <label>Дата початку</label>
        <div className="datepicker__wrapper">
          <DatePicker
            ref={startRef}
            selected={startDate}
            onChange={handleStartChange}
            locale="uk"
            placeholderText="Оберіть дату"
            className="datepicker"
            calendarClassName="datepicker__calendar"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            maxDate={endDate || undefined}
            showPopperArrow={false}
          />
          <FaRegCalendar
            className="datepicker__icon"
            onClick={() => startRef.current?.setOpen(true)}
          />
        </div>
      </div>

      {/* END DATE */}
      <div className="datepicker-field">
        <label>Дата завершення</label>
        <div className="datepicker__wrapper">
          <DatePicker
            ref={endRef}
            selected={endDate}
            onChange={handleEndChange}
            locale="uk"
            placeholderText="Оберіть дату"
            className="datepicker"
            calendarClassName="datepicker__calendar"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            minDate={startDate || undefined}
            showPopperArrow={false}
          />
          <FaRegCalendar
            className="datepicker__icon"
            onClick={() => endRef.current?.setOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;

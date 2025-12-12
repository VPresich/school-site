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

interface DatePickerRangeProps {
  onChange: (range: { startDate: Date | null; endDate: Date | null }) => void;
}

const DatePickerRange: React.FC<DatePickerRangeProps> = ({ onChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const datePickerRef = useRef<DatePicker>(null);

  const handleChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onChange({ startDate: start, endDate: end });
  };

  return (
    <div className="datepicker-field">
      <label>Діапазон пошуку</label>
      <div className="datepicker__wrapper">
        <DatePicker
          ref={datePickerRef}
          selected={startDate}
          onChange={handleChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          placeholderText="Оберіть період"
          className="datepicker"
          calendarClassName="datepicker__calendar"
          locale="uk"
          showPopperArrow={false}
          showYearDropdown
          showMonthDropdown
          dropdownMode="select"
        />
        <FaRegCalendar
          className="datepicker__icon"
          onClick={() => datePickerRef.current?.setOpen(true)}
        />
      </div>
    </div>
  );
};

export default DatePickerRange;

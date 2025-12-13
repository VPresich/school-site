import React, { useState, useRef } from 'react';
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
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  value,
  onChange,
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
    <div className="date-range-picker flex flex-col gap-2">
      <div className="flex flex-col gap-1">
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
          />

          <FaRegCalendar
            className="drp-icon"
            onClick={() => startRef.current?.setOpen(true)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
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
          />

          <FaRegCalendar
            className="drp-icon"
            onClick={() => endRef.current?.setOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;

// import React, { useRef } from 'react';
// import DatePicker, { registerLocale } from 'react-datepicker';
// import { FaRegCalendar } from 'react-icons/fa';
// import { uk } from 'date-fns/locale';

// import 'react-datepicker/dist/react-datepicker.css';

// registerLocale('uk', {
//   ...uk,
//   localize: {
//     ...uk.localize,
//     day: (n: number) => ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'][n],
//   },
// });

// interface DateRange {
//   startDate: Date | null;
//   endDate: Date | null;
// }

// interface DateRangePickerProps {
//   value: DateRange;
//   onChange: (dates: DateRange) => void;
// }

// const DateRangePicker: React.FC<DateRangePickerProps> = ({
//   value,
//   onChange,
// }) => {
//   const startRef = useRef<DatePicker>(null);
//   const endRef = useRef<DatePicker>(null);

//   const handleStartChange = (date: Date | null) => {
//     const newRange = {
//       startDate: date,
//       endDate:
//         value.endDate && date && value.endDate < date ? null : value.endDate,
//     };
//     onChange(newRange);
//   };

//   const handleEndChange = (date: Date | null) => {
//     onChange({ startDate: value.startDate, endDate: date });
//   };

//   return (
//     <div className="date-range-picker">
//       <div className="date-picker-field">
//         <label>Дата початку</label>
//         <div className="drp-wrapper">
//           <DatePicker
//             ref={startRef}
//             selected={value.startDate}
//             onChange={handleStartChange}
//             locale="uk"
//             placeholderText="Оберіть дату"
//             maxDate={value.endDate ?? undefined}
//             showMonthDropdown
//             showYearDropdown
//             dropdownMode="select"
//             showPopperArrow={false}
//             className="drp-input"
//             calendarClassName="drp-calendar"
//           />
//           <FaRegCalendar
//             className="drp-icon"
//             onClick={() => startRef.current?.setOpen(true)}
//           />
//         </div>
//       </div>

//       <div className="date-picker-field">
//         <label>Дата завершення</label>
//         <div className="drp-wrapper">
//           <DatePicker
//             ref={endRef}
//             selected={value.endDate}
//             onChange={handleEndChange}
//             locale="uk"
//             placeholderText="Оберіть дату"
//             minDate={value.startDate ?? undefined}
//             showMonthDropdown
//             showYearDropdown
//             dropdownMode="select"
//             showPopperArrow={false}
//             className="drp-input"
//             calendarClassName="drp-calendar"
//           />
//           <FaRegCalendar
//             className="drp-icon"
//             onClick={() => endRef.current?.setOpen(true)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DateRangePicker;

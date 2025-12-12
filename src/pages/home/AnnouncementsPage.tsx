import React from 'react';
import DateRangePicker from '../../components/DataPicker/DateRangePicker/DateRangePicker';

function AnnouncementsPage(): React.JSX.Element {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4">Події</h1>
      <p>Огляд шкільних подій.</p>
      <DateRangePicker
        onChange={({ startDate, endDate }) => {
          console.log('START:', startDate);
          console.log('END:', endDate);
        }}
      />
    </div>
  );
}

export default AnnouncementsPage;

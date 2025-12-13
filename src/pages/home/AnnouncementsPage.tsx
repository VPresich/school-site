import React from 'react';
import Filter from '../../components/Filter/Filter';

function AnnouncementsPage(): React.JSX.Element {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4">Анонси подій</h1>
      <p>Огляд шкільних подій.</p>
      <Filter />
    </div>
  );
}

export default AnnouncementsPage;

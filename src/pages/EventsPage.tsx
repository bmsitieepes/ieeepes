import React from 'react';
import Events from '../components/events/events';

const EventsPage: React.FC = () => {
  return (
    <main style={{ background: '#f8f9fe', minHeight: '100vh' }}>
      <Events />
    </main>
  );
};

export default EventsPage;

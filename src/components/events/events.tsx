// src/components/events/events.tsx
import React from 'react';
import Card from '../common/Card';  // Changed from '../common/Card' to '../common/Card'
import '../../css/events.css';

const Events: React.FC = () => {
  const events = [
    {
      title: 'Model Test & Eval',
      description: 'Build custom LLMs for your use case with the help of Expert RLHF and SFT.',
      icon: '/icons/model-test.svg'
    },
    {
      title: 'Tutor LLM',
      description: 'Transform your Enterprise with production-grade GenAI applications.',
      icon: '/icons/tutor.svg'
    },
    {
      title: 'Multi-Modal SFT',
      description: 'Mitigate potential safety and sensitivity threats through rigorous testing.',
      icon: '/icons/multi-modal.svg'
    }
  ];

  return (
    <section id="events" className="section">
      <div className="container">
        <h2 className="section-title">Events</h2>
        <div className="events-grid">
          {events.map((event, index) => (
            <Card
              key={index}
              title={event.title}
              description={event.description}
              icon={event.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
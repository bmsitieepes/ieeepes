// src/components/events/EventCard.tsx
import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  registrationLink: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  description,
  image,
  registrationLink
}) => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={image} alt={title} />
      </div>
      <div className="event-content">
        <h3>{title}</h3>
        <div className="event-details">
          <p className="event-date">
            <i className="fas fa-calendar"></i> {date}
          </p>
          <p className="event-time">
            <i className="fas fa-clock"></i> {time}
          </p>
          <p className="event-location">
            <i className="fas fa-map-marker-alt"></i> {location}
          </p>
        </div>
        <p className="event-description">{description}</p>
        <a href={registrationLink} className="event-register">
          Register Now
        </a>
      </div>
    </div>
  );
};

export default EventCard;
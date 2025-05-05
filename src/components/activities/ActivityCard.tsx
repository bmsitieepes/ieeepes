// src/components/activities/ActivityCard.tsx
import React from 'react';

interface ActivityCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  description,
  icon,
  link
}) => {
  return (
    <div className="activity-card">
      <div className="activity-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="/ieeepes/learn-more.html" className="learn-more">
        Learn More
        <span className="arrow">→</span>
      </a>
    </div>
  );
};

export default ActivityCard;
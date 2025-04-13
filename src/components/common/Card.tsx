// src/components/common/Card.tsx
import React from 'react';
import '../../css/card.css';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {icon && <img src={icon} alt="" className="card-icon" />}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
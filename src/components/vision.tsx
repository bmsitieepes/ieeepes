// src/components/Vision.tsx
import React from 'react';
import '../css/vision.css';

const Vision: React.FC = () => {
  return (
    <section id="vision">
      <div className="container">
        <h2 className="unbounded-bold">Our Vision</h2>
        <p className="vision-description">
          To be the leading provider of scientific and engineering information on electric power and 
          energy for the betterment of society, and the preferred professional development source for our members.
        </p>
        
        <div className="vision-grid">
          <div className="vision-card">
            <div className="icon-circle blue">
              {/* Icon */}
            </div>
            <h3>Innovation</h3>
            <p>Drive technological advancement in power and energy sectors</p>
          </div>

          <div className="vision-card">
            <div className="icon-circle pink">
              {/* Icon */}
            </div>
            <h3>Education</h3>
            <p>Provide quality technical education and resources</p>
          </div>

          <div className="vision-card">
            <div className="icon-circle mint">
              {/* Icon */}
            </div>
            <h3>Community</h3>
            <p>Build a strong network of power engineering professionals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
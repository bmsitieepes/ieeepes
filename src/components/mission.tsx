import React from 'react';
import '../css/mission.css';  // Changed from ../../css/mission.css

const Mission: React.FC = () => {
  return (
    <section id="mission">
      <div className="container">
        <h2 className="unbounded-bold">Our Mission</h2>
        
        <div className="mission-grid">
          <div className="mission-card">
            <h3 className="unbounded-medium">Innovation</h3>
            <p className="inter-tight">Drive technological advancement in power and energy sectors</p>
          </div>

          <div className="mission-card">
            <h3 className="unbounded-medium">Education</h3>
            <p className="inter-tight">Provide quality technical education and resources</p>
          </div>

          <div className="mission-card">
            <h3 className="unbounded-medium">Community</h3>
            <p className="inter-tight">Build a strong network of power engineering professionals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
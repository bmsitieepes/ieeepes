import React from 'react';
import '../css/mission.css'; // Reuse mission styles for font consistency

const MissionVision: React.FC = () => {
  return (
    <section id="mission" className="section">
      <div className="container">
        <h2 className="unbounded-bold section-title">Our Mission & Vision</h2>
        <div className="missionvision-flex blended">
          <div className="missionvision-block">
            <h3 className="unbounded-medium">Mission</h3>
            <p className="inter-tight">
              To drive technological advancement, provide quality technical education and resources, and build a strong network of power engineering professionals for the betterment of society.
            </p>
          </div>
          <div className="missionvision-block">
            <h3 className="unbounded-medium">Vision</h3>
            <p className="inter-tight">
              To be the leading provider of scientific and engineering information on electric power and energy, and the preferred professional development source for our members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

import React from 'react';
import '../css/mission.css';  // Changed from ../../css/mission.css

const Mission: React.FC = () => {
  return (
    <section id="mission">
      <div className="container">
        <h2 className="unbounded-bold">Our Mission</h2>
        <p className="mission-description">.
        The IEEE PES Student Chapter at BMSIT is committed to inspiring students to innovate in power and energy through hands-on projects and workshops. Our mission is to empower students to bridge academic knowledge with practical, sustainable energy solutions. We foster a collaborative environment to drive technological progress
        </p>
      </div>
    </section>
  );
};

export default Mission;
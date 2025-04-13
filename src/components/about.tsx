import React from 'react';
import '../css/about.css';  // Changed from ../../css/about.css

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="unbounded-bold">About Us</h2>
        <p className="about-description">
          The IEEE Power & Energy Society (PES) is a worldwide, non-profit association of 
          more than 40,000 industry professionals, academics, and students. Our student 
          chapter is dedicated to advancing technology and fostering innovation in power and energy.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <h3>Research Excellence</h3>
            <p>Promoting scientific and engineering knowledge in power and energy</p>
          </div>

          <div className="feature-card">
            <h3>Student Development</h3>
            <p>Supporting student development through workshops and events</p>
          </div>

          <div className="feature-card">
            <h3>Industry Network</h3>
            <p>Creating networking opportunities with industry professionals</p>
          </div>

          <div className="feature-card">
            <h3>Innovation</h3>
            <p>Fostering innovation in sustainable energy solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import '../css/about.css';  // Changed from ../../css/about.css

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="unbounded-bold">About Us</h2>
        <p className="about-description">
        IEEE PES (Power & Energy Society) BMSIT is a student chapter dedicated to fostering innovation, collaboration, and education in the field of power and energy systems. Through workshops, seminars, hands-on projects, and networking events, we aim to empower future engineers in the field of power and energy systems
        </p>
        <div className="about-learn-more">
          <a href="/ieeepes/learn-more.html" className="about-learn-link">
            Learn More <span className="about-learn-arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
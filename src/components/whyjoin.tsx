// WhyJoin.tsx (remains the same)
import React from 'react';
import '../css/whyjoin.css';

const WhyJoin = () => {
  const benefits = [
    {
      title: "Professional Growth",
      description: "Access to workshops, seminars, and technical resources to enhance your knowledge and skills",
      icon: "📈"
    },
    {
      title: "Networking",
      description: "Connect with industry professionals and fellow students in the power and energy sector",
      icon: "🤝"
    },
    {
      title: "Leadership",
      description: "Opportunities to lead projects and organize events, developing crucial management skills",
      icon: "👥"
    },
    {
      title: "Research",
      description: "Participate in cutting-edge research projects and access latest technological developments",
      icon: "🔬"
    }
  ];

  return (
    <section className="why-join" id="why-join">
      <div className="container">
        <h2 className="section-title">Why Join IEEE PES?</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">{benefit.icon}</span>
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
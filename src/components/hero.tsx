// src/components/hero.tsx
import '../css/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">IEEE Power & Energy Society</h1>
        <p className="hero-subtitle">
          Empowering Innovation in Power and Energy Technology
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Upcoming Events</button>
          <button className="btn btn-secondary">Join Us</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
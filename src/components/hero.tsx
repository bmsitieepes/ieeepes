// src/components/hero.tsx
import '../css/hero.css';


const Hero = () => {
  return (
    <section className="hero" id="hero">
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
      <div className="scroll-arrow" onClick={() => {
        const nextSection = document.getElementById('about');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="15" stroke="#fff" strokeWidth="2" fill="none" />
          <path d="M10 16l6 6 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

  export default Hero;
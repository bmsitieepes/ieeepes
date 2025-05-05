// src/components/hero.tsx
import '../css/hero.css';

// Google Fonts for DM Sans, Inter Tight, Unbounded
const fontLinks = (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Unbounded:wght@200..900&display=swap" rel="stylesheet" />
  </>
);

const Hero = () => {

  return (
    <>
      {fontLinks}
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1 className="hero-title">IEEE Power & Energy Society</h1>
          <p className="hero-subtitle" style={{ fontFamily: '"DM Sans", "Unbounded", "Inter Tight", sans-serif' }}>
            Empowering Innovation in Power and Energy Technology
          </p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href="/ieeepes/upcoming-events.html">Upcoming Events</a>
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
    </>
  );
};

export default Hero;
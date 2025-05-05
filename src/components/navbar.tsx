// src/components/navbar/Navbar.tsx
import { useEffect, useState } from 'react';
import '../css/navbar.css';
import mainLogo from '../../public/bmslogo-imageonline.co-merged-removebg-preview.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  // Debug: log active section whenever it changes
  useEffect(() => { console.log('Active section:', activeSection); }, [activeSection]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }

      // If at the very top, force hero as active
      if (window.scrollY === 0) {
        setActiveSection('hero');
        return;
      }

      // Find the section closest to the top (minus navbar height)
      const sections = document.querySelectorAll('section[id]');
      const navbarHeight = navbar?.offsetHeight || 0;
      let activeId = 'hero';
      let maxVisible = -Infinity;

      sections.forEach(section => {
        const sectionEl = section as HTMLElement;
        const rect = sectionEl.getBoundingClientRect();
        const sectionMid = rect.top + rect.height / 2;
        // The closer the midpoint is to the navbar, the more 'active' it is
        if (sectionMid - navbarHeight < window.innerHeight / 2 && sectionMid > maxVisible) {
          maxVisible = sectionMid;
          activeId = section.getAttribute('id') || '';
        }
      });
      setActiveSection(activeId);
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (sectionId === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.getElementById(sectionId);
    if (!element) return;

    const navbar = document.querySelector('.navbar') as HTMLElement;
    const navbarHeight = navbar?.offsetHeight || 0;
    const elementPosition = element.offsetTop - navbarHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { id: 'Hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'Mission', label: 'Mission' },
    { id: 'Vision', label: 'Vision' },
    { id: 'Why Join', label:'Why Join' },
    { id: 'Activities', label: 'Activities' },
    { id: 'Team', label: 'Team' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar-brand">
          
          <a 
            href="#hero"
            className="brand-text"
            onClick={(e) => scrollToSection(e, 'hero')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}
          >
            <img 
              src={mainLogo} 
              alt="Main Logo" 
              className="navbar-logo" 
              style={{ width: 'auto', background: 'transparent' }}
            />
          </a>
        </div>

        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} style={{listStyle: 'none', margin: 0, padding: 0}}>
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, id)}
              style={{listStyle: 'none'}}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
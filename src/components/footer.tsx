// src/components/Footer.tsx
import React from 'react';
import '../css/footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">IEEE PES</h3>
          <p className="footer-text inter-tight">
            Empowering Innovation in Power and Energy Technology
          </p>
          <div className="social-icons">
            <a href="#" className="social-link" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/about" className="inter-tight">About Us</a></li>
            <li><a href="/events" className="inter-tight">Events</a></li>
            <li><a href="/activities" className="inter-tight">Activities</a></li>
            <li><a href="/team" className="inter-tight">Team</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <p className="footer-text inter-tight">Email: pes@ieee.org</p>
          <p className="footer-text inter-tight">Location: Engineering Building</p>
          <p className="footer-text inter-tight">University Campus</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright inter-tight">
          © 2024 IEEE Power & Energy Society. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
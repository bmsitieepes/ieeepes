// src/components/Footer.tsx
import React from 'react';
import '../css/footer.css';
import {  FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
           
            
            <a href="https://www.instagram.com/ieee.pes_bmsit?igsh=Zm5ob2Z4dnQxempi" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/ieee-pes-bmsit/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            
            <li><a href="/ieeepes/upcoming-events.html" className="inter-tight">Events</a></li>
            <li><a href="/ieeepes/learn-more.html" className="inter-tight">Activities</a></li>
            
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <p className="footer-text inter-tight">Email: powerandenergysociety@gmail.com</p>        
<p className="footer-text inter-tight">Address : BMSIT&M,<br/>
                         Doddaballapur Main Road,<br/>
                        Avalahalli, Yelahanka,<br/>
                         Bengaluru - 560119.</p>
          
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
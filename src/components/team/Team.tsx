// src/components/team/Team.tsx
import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import '../../css/team.css';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  Instagram: string;
}

const Team: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [membersPerPage, setMembersPerPage] = useState(3); // Default 3 for desktop
  const [isClient, setIsClient] = useState(false); // Avoid SSR mismatch
  const teamMembers: TeamMember[] = [
    {
      name: "Rohan Chandan ",
      role: "Chair",
      image: "/ieeepes/assets/images/Rohan.jpg",
      linkedin: "https://www.linkedin.com/in/rohan-c-779126219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Instagram: "#"
    },
    {
      name: "GHANASHYAM BL",
      role: "Vice Chair",
      image: "/ieeepes/assets/images/ghanshyam.jpg",
      linkedin: "https://linkedin.com/in/ghanashyam-bl-666253279",
      Instagram: "https://www.instagram.com/ghanashyam_bl/"
    },
    {
      name: "MEHAK R SHASHIDAR",
      role: "Secretary",
      image: "/ieeepes/assets/images/mehek.jpg",
      linkedin: "https://www.linkedin.com/in/mehak-r-shashidar-41844a362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Instagram: "https://www.instagram.com/mehak_sheesh?igsh=aTdkN2J3aGlyNG00"
    },
    {
      name: "MANU ATHREYA",
      role: "Joint Secretary",
      image: "/ieeepes/assets/images/manu.jpg",
      linkedin: "https://www.linkedin.com/in/manu-athreya-g-604727363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Instagram: "https://www.instagram.com/iconic_wizard?igsh=YXhiMTEzamluajk0"
    },
    {
      name: "SHREYAS M N",
      role: "R&D Head",
      image: "/ieeepes/assets/images/DP - SHREYAS M N EE-2023-26.jpg",
      linkedin: "https://www.linkedin.com/in/shreyas-mn-/",
      Instagram: "https://www.instagram.com/shreyas_m.n?igsh=eXd4cndhaWhnamZh"
    },
  
    {
      name: "Chethan Gowda",
      role: "Treasurer",
      image: "/ieeepes/assets/images/aryan.jpg",
      linkedin: "https://www.linkedin.com/in/aryan-raj",
      Instagram: "aryan.raj@example.cosm"
    },
    
    {
      name: "Nithin ",
      role: "Event Coordinator",
      image: "/ieeepes/assets/images/nithin.jpg",
      linkedin: "https://www.linkedin.com/in/nithin-shetty-l-23b483357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Instagram: "https://www.instagram.com/__nithin__shetty__?igsh=MW9uMmU3MGd1M2h0dw=="
    },
    {
      name: "Ajay D Bhat",
      role: "Event Coordinator",
      image: "/ieeepes/assets/images/.jpg",
      linkedin: "https://www.linkedin.com/in/nithin-shetty-l-23b483357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Instagram: "https://www.instagram.com/__nithin__shetty__?igsh=MW9uMmU3MGd1M2h0dw=="
    },
    
    {
      name: "Neha H ",
      role: "Web Master",
      image: "/ieeepes/assets/images/neha.jpg",
      linkedin: "https://www.linkedin.com/in/neha-h-448409290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Instagram: "#"
    },
    {
      name: "Suman Gs",
      role: "Web Master",
      image: "/ieeepes/assets/images/suman.jpg",
      linkedin: "www.linkedin.com/in/sumangs2005",
      Instagram: "https://www.instagram.com/egggpuffs?igsh=MXJvdGcycmZ2YnJueA=="
    },
  ];

  // Responsive members per page
  React.useEffect(() => {
    setIsClient(true);
    const mediaQueryLg = window.matchMedia('(max-width: 1024px)');
    const mediaQueryMd = window.matchMedia('(max-width: 768px)');
    const handleChange = () => {
      if (mediaQueryMd.matches) {
        setMembersPerPage(1);
      } else if (mediaQueryLg.matches) {
        setMembersPerPage(2);
      } else {
        setMembersPerPage(3);
      }
      setCurrentPage(0); // Reset to first page on layout change
    };
    handleChange();
    mediaQueryLg.addEventListener('change', handleChange);
    mediaQueryMd.addEventListener('change', handleChange);
    return () => {
      mediaQueryLg.removeEventListener('change', handleChange);
      mediaQueryMd.removeEventListener('change', handleChange);
    };
  }, []);

  const totalPages = Math.ceil(teamMembers.length / membersPerPage);
  const handleDotClick = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  // Calculating members to show on this page
  const startIdx = currentPage * membersPerPage;
  const endIdx = startIdx + membersPerPage;
  const visibleMembers = teamMembers.slice(startIdx, endIdx);

  if (!isClient) return null; 

  return (
    <section id="team" className="team-section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <div className="team-slider">
          <div className="team-track-wrapper">
            <div className="team-track">
              {visibleMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="member-content">
                    <div className="member-image-container">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="member-image"
                       
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/assets/images/placeholder.jpg';
                        }}
                      />
                    </div>
                    <div className="member-info">
                      <h3 className="member-name">{member.name.toUpperCase()}</h3>
                      <p className="member-role inter-tight">{member.role}</p>
                      <div className="member-socials">
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <FaLinkedin />
                        </a>
                        <a 
                          href={member.Instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Instagram of ${member.name}`}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_200_1382)">
                              <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8688 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8063 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8063 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="#667085"/>
                              <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="#667085"/>
                              <path d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z" fill="#667085"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_200_1382">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`page-dot ${currentPage === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
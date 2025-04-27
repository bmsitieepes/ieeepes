// src/components/team/Team.tsx
import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../../css/team.css';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  email: string;
}

const Team: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [membersPerPage, setMembersPerPage] = useState(3); // Default 3 for desktop
  const [isClient, setIsClient] = useState(false); // Avoid SSR mismatch
  const teamMembers: TeamMember[] = [
    {
      name: "Rohan lendwani ",
      role: "Chair",
      image: "/assets/team/aditya.jpg",
      linkedin: "https://www.linkedin.com/in/aditya-raj",
      email: "aditya.raj@example.com"
    },
    {
      name: "Amit Mittal",
      role: "Vice Chair",
      image: "/assets/team/anshuman.jpg",
      linkedin: "https://www.linkedin.com/in/anshuman-mishra",
      email: "anshuman.mishra@example.com"
    },
    {
      name: "Anurag Gupta",
      role: "Secretary",
      image: "/assets/team/anurag.jpg",
      linkedin: "https://www.linkedin.com/in/anurag-gupta",
      email: "anurag.gupta@example.com"
    },
    {
      name: "Aryan Raj",
      role: "Treasurer",
      image: "/assets/team/aryan.jpg",
      linkedin: "https://www.linkedin.com/in/aryan-raj",
      email: "aryan.raj@example.com"
    },
    {
      name: "john pork",
      role: "Technical Head",
      image: "/assets/team/shubham.jpg",
      linkedin: "https://www.linkedin.com/in/shubham-kumar",
      email: "shubham.kumar@example.com"
    },
    {
      name: "Nithin ",
      role: "Event Coordinator",
      image: "/assets/team/yash.jpg",
      linkedin: "https://www.linkedin.com/in/yash-raj",
      email: "yash.raj@example.com"
    }
  ];

  // Responsive members per page
  React.useEffect(() => {
    setIsClient(true);
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleChange = () => {
      if (mediaQuery.matches) {
        setMembersPerPage(1);
      } else {
        setMembersPerPage(3);
      }
      setCurrentPage(0); // Always reset to first page on layout change
    };
    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const totalPages = Math.ceil(teamMembers.length / membersPerPage);
  const handleDotClick = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  // Calculate which members to show on this page
  const startIdx = currentPage * membersPerPage;
  const endIdx = startIdx + membersPerPage;
  const visibleMembers = teamMembers.slice(startIdx, endIdx);

  if (!isClient) return null; // Avoid SSR hydration mismatch

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
                          target.src = '/assets/team/placeholder.jpg';
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
                          href={`mailto:${member.email}`}
                          aria-label={`Email ${member.name}`}
                        >
                          <FaEnvelope />
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
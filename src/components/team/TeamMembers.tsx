
   import React from 'react';
import '../../css/team.css';

const TeamMembers = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Faculty Advisor",
      image: "/assets/images/team/advisor.jpg",
      linkedin: "https://linkedin.com",
      email: "sarah.johnson@ieee.org"
    },
    {
      name: "Michael Chen",
      role: "Chapter Chair",
      image: "/assets/images/team/chair.jpg",
      linkedin: "https://linkedin.com",
      email: "michael.chen@ieee.org"
    },
    {
      name: "Emily Rodriguez",
      role: "Vice Chair",
      image: "/assets/images/team/vice-chair.jpg",
      linkedin: "https://linkedin.com",
      email: "emily.rodriguez@ieee.org"
    },
    {
      name: "David Kim",
      role: "Secretary",
      image: "/assets/images/team/secretary.jpg",
      linkedin: "https://linkedin.com",
      email: "david.kim@ieee.org"
    },
    {
      name: "Lisa Wang",
      role: "Treasurer",
      image: "/assets/images/team/treasurer.jpg",
      linkedin: "https://linkedin.com",
      email: "lisa.wang@ieee.org"
    },
    {
      name: "James Smith",
      role: "Technical Coordinator",
      image: "/assets/images/team/tech-coord.jpg",
      linkedin: "https://linkedin.com",
      email: "james.smith@ieee.org"
    }
  ];

  return (
    <div className="team-members-grid">
      {teamMembers.map((member, index) => (
        <div className="team-member-card" key={index}>
          <div className="member-image">
            <img src={member.image} alt={member.name} />
            <div className="member-overlay">
              <div className="member-social">
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img 
                      src="/assets/icons/socials/linkedin.svg" 
                      alt="LinkedIn" 
                    />
                  </a>
                )}
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`}
                    className="social-link"
                  >
                    <img 
                      src="/assets/icons/socials/email.svg" 
                      alt="Email" 
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="member-info">
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers; 


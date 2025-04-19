// src/components/activities/Activities.tsx

import ActivityCard from './ActivityCard';
import '../../css/activities.css';

const Activities = () => {
  const activities = [
    {
      title: "Technical Workshops",
      description: "Hands-on learning experiences with industry-standard tools and technologies.",
      icon: "🔧",
      link: "#"
    },
    {
      title: "Industry Visits",
      description: "Regular visits to power plants and energy facilities.",
      icon: "🏭",
      link: "#"
    },
    {
      title: "Research Projects",
      description: "Collaborate on cutting-edge research in power and energy.",
      icon: "🔬",
      link: "#"
    },
    {
      title: "Networking Events",
      description: "Connect with professionals and peers in the industry.",
      icon: "🫱🏻‍🫲🏼",
      link: "#"
    }
  ];

  return (
    <section className="activities-section" id="activities">
      <div className="container">
        <h2 className="section-title">Our Activities</h2>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
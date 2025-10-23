import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabContent = {
    about: `Hi! I'm Harsh Singh Tomar, a B.Tech Computer Science student from Gwalior, India. 
I love building full-stack web applications and exploring new technologies. Currently, I'm focused on React, Node.js, and MongoDB projects.`,

    experiences: `I've worked on multiple web development projects, including:
- Tolko: A language learning platform with 100+ active users (React, Node.js, MongoDB, Stream API).
- Online Voting System with Face Recognition: Secure voting platform using MERN stack.
- Smart Railway Crossing System: Automated railway crossing simulation using Python-Flask.`,

    recommended: `I'm passionate about web development and always looking to collaborate on interesting projects.
Feel free to connect with me to discuss web apps, full-stack development, or any exciting opportunities!`,
  };

  return (
    <div className="widget tabs-widget">
      <div className="tabs-header">

        {["about", "experiences", "recommended"].map((tab) => (

          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}

      </div>
      <div className="tab-content">
      {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;

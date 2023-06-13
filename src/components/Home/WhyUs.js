import React from 'react';
import './WhyUs.css'; // Import the CSS file for styling
import webinar from './webinar.jpg';
import study from './study.jpg';
import community from './community.jpg'

const WhyUs = () => {
  return (
    <div className="why-us-home">
      <div className="container-home">
        <div className="key-point-home">
          <h2>LIVE CLASSES</h2>
          <div className="description-home">
            <p>Engage in interactive live classes conducted by experienced educators.</p>
            <img src={webinar} alt="Live Classes" />
          </div>
        </div>
      </div>
      <div className="container-home">
        <div className="key-point-home">
          <h2>STUDY MATERIAL</h2>
          <div className="description-home">
            <p>Access comprehensive study material to enhance your learning experience.</p>
            <img src={study} alt="Study Material" />
          </div>
        </div>
      </div>
      <div className="container-home">
        <div className="key-point-home">
          <h2>COMMUNITY</h2>
          <div className="description-home">
            <p>Join a vibrant community of learners and collaborate with peers and mentors.</p>
            <img src={community} alt="Community" />
          </div>
        </div>
      </div>
      <div className="container-home">
        <div className="key-point-home">
          <h2>LIVE CLASSES</h2>
          <div className="description-home">
            <p>Engage in interactive live classes conducted by experienced educators.</p>
            <img src={webinar} alt="Live Classes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

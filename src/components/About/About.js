import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="image-container">
        <img 
          src="/image/khouloud.png" // Replace with actual image path
          alt="Profile"
          className="profile-image animated-element"
        />
      </div>
      <div className="info-container animated-element">
        <h2>About Me</h2>
        <p>
          I'm a highly motivated person with excellent time management skills 
          and an incredible capacity to quickly grasp new concepts. I consistently 
          deliver results on schedule.
        </p>
        <div className="details">
          <div className="detail-item">
            <h4>Phone</h4>
            <p>+216 93023777</p>
          </div>
          <div className="detail-item">
            <h4>Mail</h4>
            <p>kholoud.bhlel@gmail.com</p>
          </div>
          <div className="detail-item">
            <h4>Location</h4>
            <p>19 Beyrout Street, Ariana, Tunisia</p>
          </div>
          <div className="detail-item">
            <h4>Experience</h4>
            <p>2+ Years</p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="video-container">
        <h2 className="animated-element">Watch My Introduction Video</h2>
        <video className="video-element animated-element" controls>
          <source src="path_to_video" type="video/mp4" /> {/* Replace with actual video path */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate(); // Initialize navigate function for page redirection

  return (
    <div className="home">
      {/* Welcome Section */}
      <h1>Welcome to My Portfolio</h1>
      {/* Profile Section */}
      <div className="profile-section">
        <img
          src="/image/banner.png" // Path to your profile image in the public folder
          alt="Khouloud Ben Hlel"
          className="profile-image"
        />
        <div className="profile-text">
          <h2>My name is Khouloud Ben Hlel</h2>
          <p> Hi, I'm Khouloud Ben Hlel. I'm a Full Stack JS Developer passionate about
          creating amazing web experiences.</p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="experience-section">
        <div className="experience-item">
          <h3>2+</h3>
          <p>Years of experience</p>
        </div>
        <div className="experience-item">
          <h3>10+</h3>
          <p>Projects</p>
        </div>
        <div className="experience-item">
          <h3>99%</h3>
          <p>Satisfaction client</p>
        </div>
      </div>

      {/* Activity Section */}
      <div className="activity-section">
        <h2>Activity</h2>
        <div className="activity-grid">
          {/* About Me */}
          <div
            className="activity-item"
            onClick={() => navigate('/about')} // Navigate to About page
          >
            <img
              src="/image/about me.jpeg" // Path to your About image
              alt="About Me"
              className="activity-image"
            />
            <p>About Me</p>
          </div>

          {/* Services */}
          <div
            className="activity-item"
            onClick={() => navigate('/services')} // Navigate to Services page
          >
            <img
              src="/image/services.png" // Path to your Services image
              alt="Services"
              className="activity-image"
            />
            <p>Services</p>
          </div>

          {/* Projects */}
          <div
            className="activity-item"
            onClick={() => navigate('/projects')} // Navigate to Projects page
          >
            <img
              src="/image/projects.png" // Path to your Projects image
              alt="Projects"
              className="activity-image"
            />
            <p>Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

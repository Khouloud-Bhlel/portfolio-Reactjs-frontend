import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="projects-container">
      <h2 className="animated-title">My Creative Projects</h2>
      <div className="project-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card animated-card">
            <div className="card-image-container">
              <img 
                src={project.image_url} // Ensure this field exists in your API response
                alt={project.title} 
                className="project-image"
              />
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a 
                href={project.project_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

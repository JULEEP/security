import React from 'react'
import './ProjectCard.css'

const statusClasses = {
    Ongoing: 'status-ongoing',
    Completed: 'status-completed',
    'On Hold': 'status-onhold'
  };  

 const ProjectCard = ({ project }) =>(

    <div className="project-box">
  <div className="project-info">
    <h3>{project.title}</h3>
    <p>{project.client}</p>
    <p>{project.date}</p>
  </div>

  <div className="progress-info">
    <span className="project-tag">{project.tag}</span>
    <div className="progress-bar-container">
      <div className="progress-bar-fill" style={{width: `${project.progress}%`}}></div>
    </div>
    <span className="progress-text">{project.progress}% completed</span>
  </div>

  <div className="status-badge">
    <span className={`project-status ${statusClasses[project.status]}`}>{project.status}</span>
  </div>
</div>
);

export default ProjectCard


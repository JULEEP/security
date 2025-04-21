import React from 'react'
import './ProjectDashboard.css'
import project from './ProjectData';
import ProjectCard from './ProjectCard';

export default function ProjectDashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Projects</h1>
      </div>
      <div className="container">
  <input type="text" className="search-bar" placeholder="Search projects"/>
  <button className="new-project-btn">+ New Project</button>
  </div>
  <div className="filters">
    <select className="status">
      <option>Status</option>
    </select>
    <select className="client">
      <option>Client</option>
    </select>
    <select className="priority">
      <option>Priority</option>
    </select>
    <select className="dates">
      <option>All Dates</option>
    </select>
</div>
      <div className="project-list">
        {project.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}

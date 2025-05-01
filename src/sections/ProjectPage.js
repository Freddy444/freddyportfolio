import React from 'react';
import { useParams } from 'react-router-dom';

import './ProjectPage.css';

const ProjectPage = () => {
  const { projectId } = useParams();

  return (
    <div className="project-page">
      <header className="project-header">
        <h1 className="project-title">{projectId}</h1>
      </header>

      <div className="project-content">
        <div className="project-image">
          <img src={`/images/${projectId}.jpg`} alt={projectId} />
        </div>

        <div className="project-details">
          <h2 className="details-title">About the Project</h2>
          <p className="details-description">
            detailss
          </p>
          
        </div>
      </div>

      <footer className="project-footer">
      </footer>
    </div>
  );
};

export default ProjectPage;

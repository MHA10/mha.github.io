import { projectData } from "./data";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Featured Projects</h2>
      <p className="projects-subtitle">
        A showcase of my recent work in backend development, blockchain, and full-stack applications
      </p>
      <div className="projects-grid">
        {projectData &&
          projectData.map((project) => (
            <div className="project-card fade-in" key={project.id}>
              <div className="project-header">
                <i className="fa-regular fa-folder-open folder-icon"></i>
                <div className="small-icons">
                  {project.gitHubLink && (
                    <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer" title="View Source Code">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" title="View Live Demo">
                      <i className="fa-solid fa-external-link"></i>
                    </a>
                  )}
                </div>
              </div>
              <div className="project">
                <div className="project-title-section">
                  <h3>{project.title}</h3>
                  <span className="project-duration">{project.duration}</span>
                </div>
                <p>{project.description}</p>
                
                {project.highlights && project.highlights.length > 0 && (
                  <div className="project-highlights">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {project.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.gitHubLink && (
                    <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fa-brands fa-github"></i>
                      Source Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                      <i className="fa-solid fa-external-link"></i>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;

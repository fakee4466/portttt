import { Rocket, Github } from 'lucide-react';
import { PortfolioData } from '../../shared/types';
import { useScrollReveal } from '../hooks/useAnimations';

interface ProjectsSectionProps {
  projects: PortfolioData['projects'];
  sectionTitle: string;
}

const ProjectCard = ({ project }: { project: PortfolioData['projects'][0] }) => {
  const technologies = project.pages ? project.pages.split(', ') : [];
  
  const renderDescription = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="highlight-text">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };
  
  return (
    <article className="project-card-simple">
      <div className="project-header-simple">
        <h3 className="project-title-simple">{project.title}</h3>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-link"
            aria-label={`View ${project.title} on GitHub`}
            title={`View ${project.title} on GitHub`}
          >
            <Github className="w-5 h-5" />
          </a>
        )}
      </div>

      <div className="project-type">{project.category}</div>
      
      {technologies.length > 0 && (
        <div className="project-tech-stack">
          {technologies.map((tech, index) => (
            <span key={tech}>
              {tech.trim()}{index < technologies.length - 1 && ', '}
            </span>
          ))}
        </div>
      )}
      
      {project.description && (
        <div className="project-description-container">
          {project.description.includes('\n') ? (
            <ul className="project-description-list">
              {project.description.split('\n').filter(item => item.trim()).map((item, idx) => (
                <li key={idx} className="project-description-item">
                  <span className="bullet-point">•</span>
                  <span className="description-text">{renderDescription(item.replace(/^•\s?/, ''))}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="project-description-simple">
              {renderDescription(project.description)}
            </div>
          )}
        </div>
      )}
    </article>
  );
};

const ProjectsSection = ({ projects, sectionTitle }: ProjectsSectionProps) => {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="projects" ref={sectionRef}>
      <div className="section-header">
        <Rocket size={24} className="section-icon" />
        <h2 className="section-title">{sectionTitle}</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

import { Briefcase } from 'lucide-react';
import { PortfolioData } from '../../shared/types';
import { useScrollReveal } from '../hooks/useAnimations';

interface ExperienceSectionProps {
  experience: PortfolioData['experience'];
  sectionTitle: string;
}

const ExperienceCard = ({ exp }: { exp: PortfolioData['experience'][0] }) => {
  return (
    <article className="experience-card">
      <div className="experience-header">
        <div className="experience-info">
          <h3 className="experience-title">{exp.title}</h3>
          <p className="company-name">{exp.company}</p>
        </div>
        <div className="date-badge">
          {exp.range}
        </div>
      </div>
      <div className="experience-location">
        <span className="location-text">{exp.location}</span>
      </div>
      <div className="experience-description-container">
        {exp.description?.includes('\n') ? (
          <ul className="experience-description-list">
            {exp.description.split('\n').filter(item => item.trim()).map((item, idx) => (
              <li key={idx} className="experience-description-item">
                <span className="bullet-point">•</span>
                <span className="description-text">{item.replace(/^•\s?/, '')}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="experience-description-item">
            <span className="bullet-point">•</span>
            <span className="description-text">{exp.description}</span>
          </div>
        )}
      </div>
    </article>
  );
};

const ExperienceSection = ({ experience, sectionTitle }: ExperienceSectionProps) => {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="experience" ref={sectionRef}>
      <div className="section-header">
        <Briefcase size={24} className="section-icon" />
        <h2 className="section-title">{sectionTitle}</h2>
      </div>
      <div className="experience-grid">
        {experience.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

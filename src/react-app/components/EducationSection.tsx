import { GraduationCap, Calendar } from 'lucide-react';
import { PortfolioData } from '../../shared/types';
import { useScrollReveal } from '../hooks/useAnimations';

interface EducationSectionProps {
  education: PortfolioData['education'];
  sectionTitle: string;
}

const EducationCard = ({ education, allEducation }: { 
  education: PortfolioData['education'][0], 
  allEducation: PortfolioData['education'] 
}) => {
  if (education.type === "bachelor") {
    const honorsEducation = allEducation.find(edu => edu.type === "honors");
    
    return (
      <article className="education-card">
        <div className="education-header">
          <div className="education-info">
            <h3>{education.title}</h3>
            <p className="institution-name">{education.institution}</p>
          </div>
          <div className="education-icon">
            <GraduationCap className="w-5 h-5" />
          </div>
        </div>

        <div className="education-meta">
          <div className="education-year">
            <Calendar className="w-4 h-4" />
            <span>{education.range}</span>
          </div>
        </div>

        <div className="education-grades">
          <div className="grade-main">{education.grade}</div>
          {honorsEducation && (
            <div className="grade-honors">{honorsEducation.title} ({honorsEducation.grade})</div>
          )}
        </div>
      </article>
    );
  }

  if (education.type === "honors") {
    return null;
  }

  return (
    <article className="education-card">
      <div className="education-header">
        <div className="education-info">
          <h3>{education.title}</h3>
          <p className="institution-name">{education.institution}</p>
        </div>
        <div className="education-icon">
          <GraduationCap className="w-5 h-5" />
        </div>
      </div>

      <div className="education-meta">
        <div className="education-year">
          <Calendar className="w-4 h-4" />
          <span>{education.range}</span>
        </div>
      </div>

      <div className="education-grades">
        <div className="grade-main">{education.grade}</div>
      </div>
    </article>
  );
};

const EducationSection = ({ education, sectionTitle }: EducationSectionProps) => {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="education" ref={sectionRef}>
      <div className="section-header">
        <GraduationCap size={24} className="section-icon" />
        <h2 className="section-title">{sectionTitle}</h2>
      </div>
      
      <div className="education-grid">
        {education.map((edu, index) => (
          <EducationCard key={index} education={edu} allEducation={education} />
        )).filter(Boolean)}
      </div>
    </section>
  );
};

export default EducationSection;

import { Code2, Globe, Shield, Database, Cloud, Wrench as WrenchIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import { PortfolioData } from '../../shared/types';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const SkillCategory = ({ title, icon, skills, color }: SkillCategoryProps) => {
  return (
    <div className="skill-category">
      <div className="skill-category-header" style={{ borderLeftColor: color }}>
        <div className="skill-category-icon" style={{ color }}>
          {icon}
        </div>
        <h3 className="skill-category-title">{title}</h3>
      </div>
      <div className="skill-category-content">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

interface ToolsSectionProps {
  skills: PortfolioData['skills'];
  sectionTitle: string;
  skillCategoryIcons: PortfolioData['skillCategoryIcons'];
}

const ToolsSection = ({ skills, sectionTitle, skillCategoryIcons }: ToolsSectionProps) => {
  const sectionRef = useScrollReveal();

  const getIconForCategory = (title: string) => {
    const iconName = skillCategoryIcons[title] || skillCategoryIcons['default'];
    
    switch (iconName) {
      case 'Code2': return <Code2 size={20} />;
      case 'Globe': return <Globe size={20} />;
      case 'Shield': return <Shield size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Cloud': return <Cloud size={20} />;
      case 'WrenchIcon': return <WrenchIcon size={20} />;
      default: return <WrenchIcon size={20} />;
    }
  };

  return (
    <section className="section" id="tools" ref={sectionRef}>
      <div className="section-header">
        <WrenchIcon size={24} className="section-icon" />
        <h2 className="section-title">{sectionTitle}</h2>
      </div>
      <div className="skills-grid">
        {skills.map((category, index) => (
          <SkillCategory 
            key={index}
            title={category.title}
            icon={getIconForCategory(category.title)}
            skills={category.skills}
            color={category.color}
          />
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;

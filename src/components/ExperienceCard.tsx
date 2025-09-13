import React from 'react';
import { Briefcase } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  range: string;
  logo: string;
  description: string;
}

interface ExperienceCardProps {
  experiences: Experience[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experiences }) => {
  return (
    <section className="mb-16">
      <div className="section-title">
        <Briefcase size={20} />
        <h2>Experience</h2>
      </div>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="content-card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
                    {exp.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    {exp.company}
                  </p>
                </div>
              </div>
              <span className="date-badge">{exp.range}</span>
            </div>
            <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceCard;
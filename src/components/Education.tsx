import React from 'react';
import { GraduationCap } from 'lucide-react';

interface EducationItem {
  title: string;
  institution: string;
  range: string;
  description: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="mb-16">
      <div className="section-title">
        <GraduationCap size={20} />
        <h2>Education</h2>
      </div>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="content-card">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text)' }}>
                  {edu.title}
                </h3>
                <p style={{ color: 'var(--muted)' }}>{edu.institution}</p>
              </div>
              <span className="date-badge">{edu.range}</span>
            </div>
            <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
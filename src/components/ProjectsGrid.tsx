import React from 'react';
import { Rocket, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  pages: string;
  thumb: string;
  description: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <section className="mb-16">
      <div className="section-title">
        <Rocket size={20} />
        <h2>Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {projects.map((project, index) => (
          <div key={index} className="content-card overflow-hidden group">
            <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden mb-4">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-4 right-4">
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-105">
                  <ExternalLink size={16} />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl mb-1">{project.title}</h3>
                <p className="text-sm opacity-90">{project.description}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold" style={{ color: 'var(--text)' }}>
                  {project.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  {project.category} • {project.pages}
                </p>
              </div>
              <button className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105">
                <ExternalLink size={14} style={{ color: 'var(--muted)' }} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <button className="btn-ghost">
          Load More
        </button>
      </div>
    </section>
  );
};

export default ProjectsGrid;
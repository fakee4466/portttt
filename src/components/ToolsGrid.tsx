import React from 'react';
import { Layers } from 'lucide-react';

interface Tool {
  name: string;
  desc: string;
  icon: string;
}

interface ToolsGridProps {
  tools: Tool[];
}

// Icon color mapping for different tools
const getIconColor = (name: string): string => {
  const colorMap: { [key: string]: string } = {
    'Figma': '#F24E1E',
    'Framer': '#0055FF',
    'Lemon Squeezy': '#FFC233',
    'Notion': '#000000',
    'Illustrators': '#FF9A00',
    'SS Icons': '#3B82F6'
  };
  return colorMap[name] || '#666666';
};

const ToolsGrid: React.FC<ToolsGridProps> = ({ tools }) => {
  return (
    <section className="mb-16">
      <div className="section-title">
        <Layers size={20} />
        <h2>Stakes</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {tools.map((tool, index) => (
          <div key={index} className="content-card hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg font-bold"
                style={{ backgroundColor: getIconColor(tool.name) }}
              >
                {tool.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: 'var(--text)' }}>
                  {tool.name}
                </h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  {tool.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsGrid;
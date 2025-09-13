import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t pt-8 mt-16" style={{ borderColor: 'var(--border)' }}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm" style={{ color: 'var(--muted)' }}>
            Built in Framer
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img 
              src="/assets/profile-600.webp" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm" style={{ color: 'var(--muted)' }}>
            John Anderson
          </span>
        </div>
        
        <div className="text-sm" style={{ color: 'var(--muted)' }}>
          Created by FramerGeeks
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useEffect, useState } from 'react';
import ProfileCard from '@/components/ProfileCard';
import Hero from '@/components/Hero';
import StatsRow from '@/components/StatsRow';
import ExperienceCard from '@/components/ExperienceCard';
import ProjectsGrid from '@/components/ProjectsGrid';
import Education from '@/components/Education';
import ToolsGrid from '@/components/ToolsGrid';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

// Mobile responsive sidebar component (simplified for this implementation)
const MobileMenu: React.FC = () => (
  <div className="lg:hidden fixed top-4 left-4 z-50">
    <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
  </div>
);

const Index: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/data.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin mx-auto mb-4"
               style={{ borderColor: 'var(--accent)', borderTopColor: 'transparent' }}></div>
          <p style={{ color: 'var(--muted)' }}>Loading...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg)' }}>
        <p style={{ color: 'var(--text)' }}>Failed to load portfolio data</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <MobileMenu />
      
      <div className="container-main">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block sidebar-column">
          <ProfileCard profile={data.profile} />
        </div>
        
        {/* Mobile Profile Card */}
        <div className="lg:hidden w-full p-4">
          <div className="max-w-sm mx-auto">
            <ProfileCard profile={data.profile} />
          </div>
        </div>
        
        {/* Main Content */}
        <main className="content-column lg:content-column">
          <Hero hero={{ titleLines: data.profile.titleLines, about: data.profile.about }} />
          <StatsRow stats={data.stats} />
          <ExperienceCard experiences={data.experience} />
          <ProjectsGrid projects={data.projects} />
          <Education education={data.education} />
          <ToolsGrid tools={data.tools} />
          <ContactForm contact={data.contact} />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;

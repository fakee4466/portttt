import { usePortfolioData } from '../hooks/usePortfolioData';
import ProfileCard from '../components/ProfileCard';
import Hero from '../components/Hero';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import ToolsSection from '../components/ToolsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const { data, loading, error } = usePortfolioData();

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">
          <Loader2 className="w-10 h-10 animate-spin text-accent" />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="error-screen">
        <h1>{data?.errorMessages?.loadingTitle || 'Error loading portfolio data'}</h1>
        <p>{error || data?.errorMessages?.unknownError || 'Unknown error occurred'}</p>
      </div>
    );
  }

  return (
    <>
      <ThemeToggle />
      <div className="portfolio-container">
        <ProfileCard profile={data.profile} />
        
        <main className="main-content">
          <Hero profile={data.profile} />
          <ExperienceSection experience={data.experience} sectionTitle={data.sectionTitles.experience} />
          <ProjectsSection projects={data.projects} sectionTitle={data.sectionTitles.projects} />
          <EducationSection education={data.education} sectionTitle={data.sectionTitles.education} />
                <ToolsSection 
        skills={data.skills} 
        sectionTitle={data.sectionTitles.skills}
        skillCategoryIcons={data.skillCategoryIcons}
      />
          <ContactSection 
            social={data.social.contact} 
            sectionTitle={data.sectionTitles.contact} 
            contactForm={data.contactForm}
            socialPlatforms={data.socialPlatforms}
          />
        </main>
      </div>
      <Footer />
    </>
  );
}

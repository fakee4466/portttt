import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Stakes from "@/components/Stakes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Sidebar */}
      <MobileSidebar />
      
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 lg:py-12">
            <Hero />
            <Stats />
            <Experience />
            <Projects />
            <Education />
            <Stakes />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

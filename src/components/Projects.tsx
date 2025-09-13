import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Rocket } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "HelloBot",
      category: "SaaS & Startup",
      pages: "8 Pages",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      description: "Revolutionize Your Customer Experience with Smart AI Chatbots"
    },
    {
      title: "Flexisoft",
      category: "SaaS & Startup",
      pages: "6 Pages", 
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      description: "Full-Suite Software Solutions for Startups"
    },
    {
      title: "Excludia",
      category: "Digital Agency",
      pages: "8 Pages",
      image: "bg-gradient-to-br from-green-400 to-green-600",
      description: "Transform your digital presence to grow your business"
    },
    {
      title: "CryptoraHub",
      category: "Crypto & Web3",
      pages: "7 Pages",
      image: "bg-gradient-to-br from-cyan-400 to-blue-600",
      description: "Trusted platform for crypto investments"
    }
  ];

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Rocket className="w-5 h-5 text-foreground" />
        <h2 className="text-2xl font-semibold text-foreground">Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card border-border overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className={`h-48 ${project.image} relative`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-4 right-4">
                <Button variant="ghost" size="icon" className="bg-white/10 hover:bg-white/20 text-white">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl mb-1">{project.title}</h3>
                <p className="text-sm opacity-90">{project.description}</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-foreground">{project.title}</h3>
                <Button variant="ghost" size="icon">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-text-muted text-sm">
                {project.category} • {project.pages}
              </p>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <Button variant="secondary" className="bg-muted hover:bg-secondary text-foreground">
          Load More
        </Button>
      </div>
    </section>
  );
};

export default Projects;
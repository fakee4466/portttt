import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Mail, Instagram, Twitter, Youtube, Dribbble } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Sidebar = () => {
  return (
    <div className="w-80 bg-sidebar-bg p-6 flex flex-col items-center sticky top-0 h-screen">
      <Card className="bg-muted border-border p-6 w-full mb-6">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-3xl overflow-hidden mb-4">
            <img 
              src={profilePhoto} 
              alt="John Anderson"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-available rounded-full"></div>
            <span className="text-sm text-text-muted">Available for work</span>
          </div>
          
          <h2 className="text-xl font-semibold text-foreground mb-4">John Anderson</h2>
          
          <div className="flex gap-3 mb-6">
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Instagram className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Youtube className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Dribbble className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Dribbble className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="w-full space-y-3">
            <Button variant="ghost" className="w-full justify-start text-text-muted hover:bg-secondary">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
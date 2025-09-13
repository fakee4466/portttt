import profilePhoto from "@/assets/profile-photo.jpg";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-text-muted">Built in</span>
          <span className="text-foreground font-semibold">⚡ Framer</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img 
              src={profilePhoto} 
              alt="John Anderson"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-foreground font-semibold italic">John Anderson</span>
        </div>
        
        <div className="text-text-muted">
          Created by <span className="text-foreground font-semibold">Framergeeks</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
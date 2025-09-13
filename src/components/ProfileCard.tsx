import React from 'react';
import { Download, Mail, Instagram, Twitter, Youtube, Dribbble } from 'lucide-react';

interface ProfileData {
  name: string;
  status: string;
  photo: string;
  social: Array<{
    name: string;
    url: string;
    aria: string;
  }>;
  cvUrl: string;
}

interface ProfileCardProps {
  profile: ProfileData;
}

const iconMap = {
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  dribbble: Dribbble,
  behance: Dribbble, // Using Dribbble icon for Behance as fallback
};

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <aside className="profile-card animate-fade-up">
      <div className="profile-image">
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      
      <div className="status-pill">
        <div className="status-dot"></div>
        <span>{profile.status}</span>
      </div>
      
      <h2 className="profile-name">{profile.name}</h2>
      
      <div className="social-icons">
        {profile.social.map((social, index) => {
          const IconComponent = iconMap[social.name as keyof typeof iconMap] || Dribbble;
          return (
            <a
              key={index}
              href={social.url}
              className="social-icon"
              aria-label={social.aria}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent size={16} />
            </a>
          );
        })}
      </div>
      
      <div className="button-row">
        <a href={profile.cvUrl} className="btn-ghost" download>
          <Download size={16} />
          Download CV
        </a>
        <a href="#contact" className="btn-primary">
          <Mail size={16} />
          Contact Me
        </a>
      </div>
    </aside>
  );
};

export default ProfileCard;
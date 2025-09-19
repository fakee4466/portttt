export interface Profile {
  name: string;
  status: string;
  titleLines: string[];
  typingWords: string[];
  passionStatement: string;
  greeting: string;
  resumeButtonText: string;
  about: string;
  photo: string;
  social: { name: string; url: string; aria: string; displayText: string }[];
  cvUrl: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  range: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  pages: string;
  url?: string;
  description: string;
}

export interface Education {
  title: string;
  institution: string;
  range: string;
  grade: string;
  type: string;
}

export interface Skill {
  title: string;
  skills: string[];
  color: string;
}

export interface SocialContact {
  name: string;
  platform: string;
  url: string;
  icon: string;
}

export interface Social {
  links: SocialContact[];
  contact: SocialContact[];
}

export interface Footer {
  builtBy: string;
  copyright: string;
}

export interface SectionTitles {
  contact: string;
  projects: string;
  education: string;
  experience: string;
  skills: string;
}

export interface ContactForm {
  labels: {
    fullName: string;
    email: string;
    message: string;
  };
  placeholders: {
    fullName: string;
    email: string;
    message: string;
  };
  buttons: {
    send: string;
    sending: string;
  };
  messages: {
    success: string;
    error: string;
  };
}

export interface SocialPlatform {
  displayName: string;
  iconType: string;
}

export interface SocialPlatforms {
  [key: string]: SocialPlatform;
}

export interface SkillCategoryIcons {
  [key: string]: string;
}

export interface PortfolioData {
  profile: Profile;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  skills: Skill[];
  social: Social;
  footer: Footer;
  sectionTitles: SectionTitles;
  contactForm: ContactForm;
  skillCategoryIcons: SkillCategoryIcons;
  socialPlatforms: SocialPlatforms;
  errorMessages: {
    loadingTitle: string;
    unknownError: string;
  };
}

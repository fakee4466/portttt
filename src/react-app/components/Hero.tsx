import { Hand } from 'lucide-react';
import { PortfolioData } from '../../shared/types';
import TypingAnimation from './TypingAnimation';
import { useScrollReveal } from '../hooks/useAnimations';

interface HeroProps {
  profile: PortfolioData['profile'];
}

const Hero = ({ profile }: HeroProps) => {
  const heroRef = useScrollReveal();

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-greeting">
          <Hand size={20} className="wave-icon" />
          <span>{profile.greeting}</span>
        </div>

        <h1 className="hero-title">
          <span className="title-line">{`I'm ${profile.name},`}</span>
          <span className="title-line title-accent">
            <TypingAnimation
              words={profile.typingWords}
            />
          </span>
          <span className="title-line">{profile.passionStatement}</span>
        </h1>

        <p className="hero-description">{profile.about}</p>
      </div>
    </section>
  );
};

export default Hero;

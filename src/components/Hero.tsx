import React from 'react';

interface HeroData {
  titleLines: string[];
  about: string;
}

interface HeroProps {
  hero: HeroData;
}

const Hero: React.FC<HeroProps> = ({ hero }) => {
  return (
    <section className="mb-16 animate-fade-up-delay">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">👋</span>
        <span className="text-lg" style={{ color: 'var(--muted)' }}>Say Hello</span>
      </div>
      
      <h1 className="hero-title">
        {hero.titleLines[0]}<br />
        <span className="hero-accent">{hero.titleLines[1]}</span>
      </h1>
      
      <p className="hero-location mb-8">
        {hero.titleLines[2]}
      </p>
      
      <p className="text-lg leading-relaxed max-w-4xl" style={{ color: 'var(--muted)' }}>
        {hero.about}
      </p>
    </section>
  );
};

export default Hero;
import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  value: string;
  label: string;
}

interface StatsRowProps {
  stats: Stat[];
}

const StatsRow: React.FC<StatsRowProps> = ({ stats }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<string[]>(stats.map(() => '0'));
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const target = parseInt(stat.value.replace(/\D/g, '')) || 0;
      const suffix = stat.value.replace(/\d/g, '');
      let current = 0;
      const increment = target / 60; // 60 frames for smooth animation
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = target + suffix;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current) + suffix;
            return newCounts;
          });
        }
      }, 16); // ~60fps
    });
  };

  return (
    <section ref={ref} className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <span className="stat-number">{counts[index]}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </section>
  );
};

export default StatsRow;
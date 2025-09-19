import { useEffect, useRef } from 'react';

export const useCountUp = (target: number, duration: number = 2000) => {
  const countRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = countRef.current;
    if (!element) return;

    const startCount = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(easeOut * target);
            
            element.textContent = currentValue.toString();
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              element.textContent = target.toString();
            }
          };

          requestAnimationFrame(animate);
          observerRef.current?.unobserve(element);
        }
      });
    };

    observerRef.current = new IntersectionObserver(startCount, {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    });

    observerRef.current.observe(element);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [target, duration]);

  return countRef;
};

export const useScrollReveal = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return elementRef;
};

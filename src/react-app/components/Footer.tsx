import { useEffect, useRef, useState } from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Footer = () => {
  const { data } = usePortfolioData();
  const [isFixed, setIsFixed] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(entry.isIntersecting);
      },
      { root: null, threshold: 0.01 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="footer-sentinel" aria-hidden="true" />
      <footer ref={footerRef} className={`footer ${isFixed ? 'footer-fixed' : 'footer-hidden'}`} role="contentinfo">
        <div className="footer-content">
          <div className="footer-center">
            <div className="footer-text">
              <span>Built with ❤️ by {data?.footer?.builtBy}</span>
            </div>
            <div className="footer-text">
              <span>{data?.footer?.copyright}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

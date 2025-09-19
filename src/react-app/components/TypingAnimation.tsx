import { useEffect, useMemo, useState } from 'react';

interface TypingAnimationProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorColor?: string;
}

export default function TypingAnimation({
  words,
  typingSpeed = 120,
  deletingSpeed = 100,
  pauseDuration = 1400,
  className,
  cursorColor = 'var(--accent)',
}: TypingAnimationProps) {
  const safeWords = useMemo(() => (Array.isArray(words) && words.length > 0 ? words : ['']), [words]);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = safeWords[index % safeWords.length];
    let timer: number;

    if (isDeleting) {
      if (text.length > 0) {
        timer = window.setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
      } else {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % safeWords.length);
      }
    } else {
      if (text.length < current.length) {
        timer = window.setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
      } else {
        timer = window.setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    }

    return () => window.clearTimeout(timer);
  }, [text, isDeleting, index, safeWords, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '0.8em',
          backgroundColor: cursorColor,
          marginLeft: 6,
          verticalAlign: 'baseline',
          animation: 'blink 1s step-end infinite',
        }}
      />
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </span>
  );
}
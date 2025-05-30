import React, { useEffect, useRef } from 'react';

interface TypedTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypedText: React.FC<TypedTextProps> = ({ 
  text, 
  speed = 80, 
  className = '',
  onComplete
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<string>('');
  const indexRef = useRef<number>(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    textRef.current = '';
    indexRef.current = 0;
    
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    
    containerRef.current.textContent = '';
    
    const typeText = () => {
      if (indexRef.current < text.length) {
        textRef.current += text.charAt(indexRef.current);
        if (containerRef.current) {
          containerRef.current.textContent = textRef.current + '█';
        }
        indexRef.current += 1;
      } else {
        if (containerRef.current) {
          containerRef.current.textContent = textRef.current;
        }
        if (intervalRef.current) {
          window.clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        if (onComplete) {
          onComplete();
        }
      }
    };
    
    intervalRef.current = window.setInterval(typeText, speed);
    
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [text, speed, onComplete]);

  return <div ref={containerRef} className={className}></div>;
};
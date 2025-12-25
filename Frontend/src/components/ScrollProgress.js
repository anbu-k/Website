import React, { useEffect, useRef } from 'react';
import '../App.css';

const ScrollProgress = () => {
  const progressRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Use requestAnimationFrame for smooth, throttled updates
      rafRef.current = requestAnimationFrame(() => {
        if (progressRef.current) {
          const scrollPx = window.scrollY || document.documentElement.scrollTop;
          const winHeightPx = document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = winHeightPx > 0 ? (scrollPx / winHeightPx) * 100 : 0;
          progressRef.current.style.width = `${scrolled}%`;
        }
      });
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    
    // Initial update
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="scroll-progress-container">
      <div ref={progressRef} className="scroll-progress-bar" style={{ width: '0%' }} />
    </div>
  );
};

export default ScrollProgress;


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '@/styles/components/LoadingAnimation.module.css';

const LoadingAnimation = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    // Create a timeline with a small delay to ensure DOM is ready
    const tl = gsap.timeline({
      delay: 0.1, // Small delay to ensure everything is rendered
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Initial setup - make sure text is hidden
    gsap.set(textRef.current, {
      y: 20,
      opacity: 0,
      visibility: 'hidden',
    });

    // Animation sequence with no gaps between animations
    tl.to(textRef.current, {
      duration: 0.1,
      visibility: 'visible',
      ease: 'none',
    })
      .to(textRef.current, {
        duration: 1.2,
        y: 0,
        opacity: 1,
        ease: 'power3.out',
      })
      .to(textRef.current, {
        duration: 0.7,
        y: -20,
        opacity: 0,
        delay: 0.3,
        ease: 'power3.in',
      })
      .to(overlayRef.current, {
        duration: 1.2,
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'power4.inOut',
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={containerRef} className={styles.loadingContainer}>
      <div ref={overlayRef} className={styles.overlay}></div>
      <div ref={textRef} className={styles.loadingText}>
        <span className={styles.name}>Emmanuel Akinlosotu</span>
        <span className={styles.title}>Software Developer</span>
      </div>
    </div>
  );
};

export default LoadingAnimation;

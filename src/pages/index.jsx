import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import LeftContentContainer from '@/components/LeftContentContainer';
import RightContentContainer from '@/components/RightContentContainer';
import LoadingAnimation from '@/components/LoadingAnimation';
import { gsap } from 'gsap';

export default function Home({}) {
  const [activeSection, setActiveSection] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Pre-hide content with GSAP as backup to CSS
  useEffect(() => {
    gsap.set('.animate-left', { opacity: 0, x: -30 });
    gsap.set('.animate-right', { opacity: 0, x: 30 });
  }, []);

  const handleAnimationComplete = () => {
    setIsLoading(false);

    // Animate in the content
    const tl = gsap.timeline();

    // Animate left container elements
    tl.to(
      '.animate-left',
      {
        duration: 0.8,
        x: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'power3.out',
      },
      0
    );

    // Animate right container sections
    tl.to(
      '.animate-right',
      {
        duration: 0.8,
        x: 0,
        opacity: 1,
        stagger: 0.2,
        ease: 'power3.out',
      },
      0.2
    );
  };

  return (
    <>
      <NextSeo
        title="Emmanuel Akinlosotu | Portfolio"
        description="Get to learn about my professional experiences!"
      />

      {isLoading && <LoadingAnimation onComplete={handleAnimationComplete} />}

      <LeftContentContainer
        setActiveSection={setActiveSection}
        activeSection={activeSection}
        className="animate-left"
      />
      <RightContentContainer
        activeSection={activeSection}
        className="animate-right"
      />
    </>
  );
}

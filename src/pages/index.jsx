import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import LeftContentContainer from '@/components/LeftContentContainer';
import RightContentContainer from '@/components/RightContentContainer';

export default function Home({}) {
  const [activeSection, setActiveSection] = useState('all');

  return (
    <>
      <NextSeo
        title="Emmanuel Akinlosotu | Portfolio"
        description="Get to learn about my professional experiences!"
      />
      <LeftContentContainer
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <RightContentContainer activeSection={activeSection} />
    </>
  );
}

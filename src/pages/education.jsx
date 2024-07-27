import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import LeftContentContainer from '@/components/LeftContentContainer';
import RightContentContainer from '@/components/RightContentContainer';

export default function Education({}) {
  const [activeSection, setActiveSection] = useState('all');

  return (
    <>
      <NextSeo
        title="Emmanuel Akinlosotu | Education"
        description="Explore my educational background"
      />
      <p>Hello world</p>
    </>
  );
}

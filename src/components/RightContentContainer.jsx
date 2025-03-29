import React from 'react';
import styles from '@/styles/components/RightContentContainer.module.css';
import Education from '@/components/sections/Education';
import WorkExperience from '@/components/sections/WorkExperience';
import Projects from '@/components/sections/Projects';

const RightContentContainer = ({ activeSection, className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      {(activeSection === 'all' || activeSection === 'education') && (
        <Education className="animate-right" />
      )}
      {(activeSection === 'all' || activeSection === 'experience') && (
        <WorkExperience className="animate-right" />
      )}
      {(activeSection === 'all' || activeSection === 'projects') && (
        <Projects className="animate-right" />
      )}
    </div>
  );
};

export default RightContentContainer;

import React from 'react';
import styles from '@/styles/components/RightContentContainer.module.css';
import Education from '@/components/sections/Education';
import WorkExperience from '@/components/sections/WorkExperience';
import Projects from '@/components/sections/Projects';

const RightContentContainer = ({ activeSection }) => {
  return (
    <div className={styles.container}>
      {(activeSection === 'all' || activeSection === 'education') && (
        <Education />
      )}
      {(activeSection === 'all' || activeSection === 'experience') && (
        <WorkExperience />
      )}
      {(activeSection === 'all' || activeSection === 'projects') && (
        <Projects />
      )}
    </div>
  );
};

export default RightContentContainer;

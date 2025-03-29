import React from 'react';
import TitleComponent from '@/components/TitleComponent';
import Navigation from '@/components/Navigation';
import styles from '@/styles/components/LeftContentContainer.module.css';

const LeftContentContainer = ({
  setActiveSection,
  activeSection,
  className,
}) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.navigationWrapper}>
        <TitleComponent className={`${styles.title} animate-left`} />
        <Navigation
          setActiveSection={setActiveSection}
          activeSection={activeSection}
          className="animate-left"
        />
      </div>
    </div>
  );
};

export default LeftContentContainer;

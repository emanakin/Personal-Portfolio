import React from 'react';
import TitleComponent from '@/components/TitleComponent';
import Navigation from '@/components/Navigation';
import styles from '@/styles/components/LeftContentContainer.module.css';

const LeftContentContainer = ({ setActiveSection, activeSection }) => {
  return (
    <div className={styles.container}>
      <div className={styles.navigationWrapper}>
        <TitleComponent className={styles.title} />
        <Navigation
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
      </div>
    </div>
  );
};

export default LeftContentContainer;

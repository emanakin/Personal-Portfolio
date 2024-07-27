import React from 'react';
import WorkCard from '@/components/cards/WorkCard';
import styles from '@/styles/components/sections/WorkExperience.module.css';
import { civiconnectData, opentextData, cooperatorsData } from '@/mockData';

const WorkExperience = () => {
  return (
    <div className={styles.workExperience}>
      <h2>WORK EXPERIENCE</h2>
      <WorkCard data={civiconnectData} />
      <WorkCard data={opentextData} />
      <WorkCard data={cooperatorsData} />
    </div>
  );
};

export default WorkExperience;

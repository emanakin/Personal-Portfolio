import React from 'react';
import EducationCard from '@/components/cards/EducationCard';
import styles from '@/styles/components/sections/Education.module.css';

const Education = () => {
  return (
    <div className={styles.education}>
      <h2>EDUCATION</h2>
      <EducationCard
        data={{
          title: 'Honours BSc Computer Science',
          description: 'Details here...',
        }}
        expanded={false}
      />
    </div>
  );
};

export default Education;

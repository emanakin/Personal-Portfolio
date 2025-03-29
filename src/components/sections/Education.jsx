import React from 'react';
import EducationCard from '@/components/cards/EducationCard';
import styles from '@/styles/components/sections/Education.module.css';

const Education = ({ className }) => {
  return (
    <div className={`${styles.education} ${className || ''}`}>
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

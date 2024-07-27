import React, { useState } from 'react';
import styles from '@/styles/components/cards/EducationCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const EducationCard = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`${styles.card} ${expanded ? styles.expanded : styles.condensed}`}
    >
      <div className={styles.logoContainer}>
        <Image
          src="/images/education/wilfrid-laurier-logo.png"
          alt="Wilfrid Laurier University Logo"
          width={100}
          height={100}
          className={styles.logo}
        />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>Wilfrid Laurier University</h3>
        <h4 className={styles.subtitle}>Honours BSc Computer Science</h4>
        <p className={styles.location}>Waterloo Ontario, Canada</p>
        <p className={styles.duration}>Study duration: 2020 - 2024</p>
        {expanded && (
          <div className={styles.expandedContent}>
            <p className={styles.detail}>
              <strong>Minor:</strong> Religion and Culture
            </p>
            <p className={styles.detail}>
              <strong>Concentration:</strong> Big Data Systems
            </p>
            <p className={styles.detail}>
              <strong>Co-operative:</strong> Work and study program
            </p>
            <p className={styles.detail}>
              <strong>Previous:</strong> Laurier Computing Society Executive
            </p>
            <p className={styles.redirect}>Education Page →</p>
          </div>
        )}
        {!expanded && (
          <button className={styles.redirect} onClick={handleToggleExpand}>
            Learn more →
          </button>
        )}
      </div>
      {expanded && (
        <FontAwesomeIcon
          icon={faTimes}
          className={styles.closeIcon}
          onClick={handleToggleExpand}
        />
      )}
    </div>
  );
};

export default EducationCard;

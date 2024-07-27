import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/components/cards/ProjectCard.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faCircle,
  faExternalLinkAlt,
  faCode,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState('4.5rem');
  const contentRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (expanded) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(`${contentHeight}px`);
    } else {
      setHeight('4.5rem');
    }
  }, [expanded]);

  const handleTransitionEnd = () => {
    if (expanded) {
      setHeight('auto');
    }
  };

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div
      className={`${styles.card} ${expanded ? styles.expanded : styles.condensed}`}
      style={{ height }}
      onTransitionEnd={handleTransitionEnd}
      ref={contentRef}
    >
      <div className={styles.topContainer}>
        <div className={styles.leftContainer}>
          <Image
            src={data.logo}
            alt={`${data.title} Logo`}
            width={50}
            height={50}
            className={styles.logo}
          />
          <h3 className={styles.title}>{data.title}</h3>
        </div>
        <div className={styles.rightContainer}>
          <p className={styles.description}>{data.description}</p>
          {!expanded && (
            <button className={styles.redirect} onClick={handleToggleExpand}>
              Explore project →
            </button>
          )}
        </div>
      </div>
      {expanded && (
        <div className={styles.expandedContent}>
          <h4 className={styles.subtitle}>Core Contributions</h4>
          <ul className={styles.detailsList}>
            {data.details.map((detail, index) => (
              <li key={index} className={styles.detailItem}>
                <FontAwesomeIcon
                  icon={faCircle}
                  className={styles.detailIcon}
                />
                {detail}
              </li>
            ))}
          </ul>
          <div className={styles.links}>
            <button
              className={styles.redirect}
              onClick={() => handleRedirect(data.projectBreakdown)}
            >
              Project Breakdown <FontAwesomeIcon icon={faBook} />
            </button>
            <button
              className={styles.redirect}
              onClick={() => handleRedirect(data.codeBase)}
            >
              Code Base <FontAwesomeIcon icon={faCode} />
            </button>
            <button
              className={styles.redirect}
              onClick={() => handleRedirect(data.liveSite)}
            >
              Live Site <FontAwesomeIcon icon={faExternalLinkAlt} />
            </button>
            <button
              className={styles.redirect}
              onClick={() => handleRedirect(data.documentation)}
            >
              Documentation <FontAwesomeIcon icon={faBook} />
            </button>
          </div>
        </div>
      )}
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

export default ProjectCard;

import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/components/cards/WorkCard.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const WorkCard = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState('auto');
  const contentRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (expanded) {
      setHeight(contentRef.current.scrollHeight + 145);
    } else {
      setHeight('6rem');
    }
  }, [expanded]);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleRedirect = () => {
    router.push('/experience');
  };

  return (
    <div
      className={`${styles.card} ${expanded ? styles.expanded : styles.condensed}`}
      style={{ height }}
    >
      <div className={styles.topContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.header}>
            <Image
              src={data.logo}
              alt={`${data.company} Logo`}
              width={386}
              height={81}
              className={styles.logo}
            />
            <h4 className={styles.location}>{data.location}</h4>
          </div>
          <div className={`${styles.roles} ${expanded ? styles.expanded : ''}`}>
            {data.roles.map((role, index) => (
              <div
                key={index}
                className={`${styles.role} ${
                  expanded || index === 0 ? styles.visible : styles.hidden
                }`}
              >
                <h3 className={styles.title}>{role.title}</h3>
                <h5 className={styles.duration}>{role.duration}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rightContainer}>
          <p className={expanded ? '' : styles.ellipsis}>{data.description}</p>
          {expanded && (
            <div className={styles.expandedContent} ref={contentRef}>
              <div className={styles.detailsContainer}>
                {data.details.map((detail, index) => (
                  <div key={index} className={styles.detailItem}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      className={styles.detailIcon}
                    />
                    <p className={styles.detail}>{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {!expanded && (
            <button className={styles.redirect} onClick={handleToggleExpand}>
              View more →
            </button>
          )}
        </div>
      </div>
      {expanded && (
        <div className={styles.bottomContainer}>
          <hr />
          <div>
            {data.skills.map((skill, index) => (
              <span key={index} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
          <button className={styles.redirect} onClick={handleRedirect}>
            Experience Page →
          </button>
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

export default WorkCard;

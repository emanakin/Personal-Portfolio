import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/components/NavigationComponent.module.css';

const Navigation = ({ setActiveSection, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [isMobile, setIsMobile] = useState();

  const toggleMenu = () => {
    isMobile ? setMenuOpen(!menuOpen) : null;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(true);
        setIsMobile(false);
      } else if (window.innerWidth < 900) {
        setMenuOpen(false);
        setIsMobile(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`${styles.navigationContainer} ${menuOpen ? styles.menuOpen : ''}`}
    >
      <FontAwesomeIcon
        icon={menuOpen ? faTimes : faBars}
        className={styles.menuIcon}
        onClick={toggleMenu}
      />
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <button
          onClick={() => {
            setActiveSection('all');
            toggleMenu();
          }}
          className={activeSection === 'all' ? `${styles.active}` : ''}
        >
          Home
        </button>
        <button
          onClick={() => {
            setActiveSection('education');
            toggleMenu();
          }}
          className={activeSection === 'education' ? `${styles.active}` : ''}
        >
          Education
        </button>
        <button
          onClick={() => {
            setActiveSection('experience');
            toggleMenu();
          }}
          className={activeSection === 'experience' ? `${styles.active}` : ''}
        >
          Experience
        </button>
        <button
          onClick={() => {
            setActiveSection('projects');
            toggleMenu();
          }}
          className={activeSection === 'projects' ? `${styles.active}` : ''}
        >
          Projects
        </button>
      </nav>
    </div>
  );
};

export default Navigation;

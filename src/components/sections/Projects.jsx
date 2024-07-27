import React from 'react';
import ProjectCard from '@/components/cards/ProjectCard';
import styles from '@/styles/components/sections/Projects.module.css';
import { edutrackData } from '@/mockData';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2>PROJECTS</h2>
      <ProjectCard data={edutrackData} />
    </div>
  );
};

export default Projects;

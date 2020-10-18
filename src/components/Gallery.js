import React from 'react';

import Project from 'components/Project';
import projects from 'assets/data/projects.json';
import styles from './Gallery.module.scss';

export default () => (
  <main className={styles.Gallery}>
    {projects.map((project, index) => (
      <Project project={project} key={index} />
    ))}
  </main>
);

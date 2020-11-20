import React from 'react';

import Figure from 'components/Figure';
import projects from 'assets/data/projects.json';

import Page from './Page';
import styles from './Gallery.module.scss';

export default function Projects() {
  return (
    <Page style={styles.Gallery} title="~gminteer/projects">
      {projects.map((project, index) => (
        <Figure
          imgCfg={project.img}
          style={styles.figure}
          title={<h3>{project.name}</h3>}
          body={
            <>
              <p>{project.blurb}</p>
              <p>
                <a href={project.live}>Live demo</a>
              </p>
              <p>
                <a href={project.repo}>View source</a>
              </p>
            </>
          }
          key={index}
        />
      ))}
    </Page>
  );
}

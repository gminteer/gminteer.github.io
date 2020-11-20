import React from 'react';

import Tile from 'components/Tile';
import projects from 'assets/data/projects.json';

import Page from './Page';
import styles from './Gallery.module.scss';

export default function Projects() {
  return (
    <Page style={styles.Gallery} title="~gminteer/projects">
      <div className={styles.tileContainer}>
        {projects.map((project, index) => (
          <Tile
            imgCfg={project.img}
            style={`${styles.Tile}`}
            isTall={project.isTall}
            isWide={project.isWide}
            title={<h3>{project.name}</h3>}
            body={
              <div className={styles.cardBody}>
                <p>{project.blurb}</p>
                <nav>
                  <span>
                    <a href={project.live}>Live demo</a>
                  </span>
                  <span>
                    <a href={project.repo}>View source</a>
                  </span>
                </nav>
              </div>
            }
            key={index}
          />
        ))}
      </div>
    </Page>
  );
}

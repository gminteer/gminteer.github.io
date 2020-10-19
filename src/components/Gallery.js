import React from 'react';

import Figure from 'components/Figure';
import projects from 'assets/data/projects.json';

export default () => (
  <main>
    {projects.map((project, index) => (
      <Figure
        imgCfg={project.img}
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
  </main>
);

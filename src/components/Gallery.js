import React from 'react';

import Project from 'components/Project';
import projects from 'assets/data/projects.json';

export default () => (
  <main>
    {projects.map((project, index) => (
      <Project project={project} key={index} />
    ))}
  </main>
);

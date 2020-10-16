import React from 'react';

import Project from 'components/Project';
import projects from 'assets/data/projects.json';

function Gallery(props) {
  return (
    <main>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </main>
  );
}

export default Gallery;

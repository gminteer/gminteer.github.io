import React, { useState, useEffect } from 'react';

import styles from './Project.module.scss';

export default function Project({ project }) {
  const [img, setImg] = useState();

  useEffect(() => {
    async function getImg() {
      const imgData = await import(`assets/img/${project.img}`);
      setImg(imgData.default);
    }
    getImg();
  }, [project.img, img]);

  return (
    <span className={styles.Project}>
      <figure>
        <a href={project.href}>
          <img src={img} alt={`${project.name} in action`} />
        </a>
        <figcaption>
          <h3>{project.name}</h3>
          <p>{project.tag}</p>
        </figcaption>
      </figure>
    </span>
  );
}

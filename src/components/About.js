import React, { useState, useEffect } from 'react';

import data from 'assets/data/about.json';
import styles from './About.module.scss';

export default function About() {
  const [img, setImg] = useState();

  useEffect(() => {
    async function getImg() {
      const imgData = await import(`assets/img/${data.img}`);
      setImg(imgData.default);
    }
    getImg();
  }, [img]);

  return (
    <main className={styles.About}>
      <figure>
        <img src={img} alt={data.name} />
        <figcaption>
          <div className={styles.title}>
            <h3>{data.name}</h3>
          </div>
          <div className={styles.body}>
            <p>{data.blurb}</p>
          </div>
        </figcaption>
      </figure>
    </main>
  );
}

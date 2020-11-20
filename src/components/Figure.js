import React, { useState, useEffect } from 'react';

import styles from './Figure.module.scss';
import placeholder from 'assets/img/placeholder.jpg';

export default function Figure({ style, title, body, imgCfg }) {
  const [img, setImg] = useState();
  const className = style ? `${styles.Figure} ${style}` : styles.Figure;
  useEffect(() => {
    async function getImg() {
      const imgData = await import(`assets/img/${imgCfg.src}`);
      setImg(imgData.default);
    }
    getImg();
  }, [imgCfg.src, img]);

  return (
    <figure className={className}>
      <div className={styles.imgContainer}>
        <img src={img ? img : placeholder} alt={imgCfg.alt} />
      </div>
      <figcaption>
        <section className={styles.title}>{title}</section>
        <section className={styles.body}>{body}</section>
      </figcaption>
    </figure>
  );
}

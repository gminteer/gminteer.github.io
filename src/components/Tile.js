import React, { useState, useEffect } from 'react';

import Card from './Card';

import styles from './Tile.module.scss';
import placeholder from 'assets/img/placeholder.jpg';

export default function Tile({ style, title, isTall, isWide, body, imgCfg }) {
  const [img, setImg] = useState();
  useEffect(() => {
    async function getImg() {
      const imgData = await import(`assets/img/${imgCfg.src}`);
      setImg(imgData.default);
    }
    getImg();
  }, [imgCfg.src, img]);

  let className = styles.Tile;
  if (style) className += ` ${style}`;
  if (isTall) className += ` ${styles.isTall}`;
  if (isWide) className += ` ${styles.isWide}`;

  return (
    <figure className={className}>
      <div className={styles.imgContainer}>
        <img src={img ? img : placeholder} alt={imgCfg.alt} />
      </div>
      <figcaption>
        <Card styles={styles}>
          <div className={styles.cardTitle}>{title}</div>
          <div className={styles.cardBody}>{body}</div>
        </Card>
      </figcaption>
    </figure>
  );
}

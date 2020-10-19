import React from 'react';

import Figure from 'components/Figure';
import data from 'assets/data/about.json';
import styles from './About.module.scss';

export default function About() {
  return (
    <main className={styles.About}>
      <Figure
        imgCfg={data.img}
        title={<h3>{data.title}</h3>}
        body={<p>{data.blurb}</p>}
      />
    </main>
  );
}

import React from 'react';

import Figure from 'components/Figure';
import data from 'assets/data/about.json';

import Page from './Page';
import styles from './About.module.scss';

export default function About() {
  return (
    <Page style={styles.About} title="~gminteer/about">
      <Figure
        imgCfg={data.img}
        style={styles.Figure}
        title={
          <div className={styles.cardHeader}>
            <h3>{data.title}</h3>
          </div>
        }
        body={
          <div className={styles.cardBody}>
            <p>{data.blurb}</p>
            <div className={styles.currentlyLearning}>
              <h4>Currently trying to pick up:</h4>
              <ul>
                {data.currently_learning.map((thing) => (
                  <li key={thing}>{thing}</li>
                ))}
              </ul>
            </div>
          </div>
        }
      />
    </Page>
  );
}

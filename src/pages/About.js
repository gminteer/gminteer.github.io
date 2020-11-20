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
        style={styles.figure}
        title={<h3>{data.title}</h3>}
        body={
          <>
            <p>{data.blurb}</p>
            <div>
              <h4>Things I'm currently learning:</h4>
              <ul>
                {data.currently_learning.map((thing) => (
                  <li key={thing}>{thing}</li>
                ))}
              </ul>
            </div>
          </>
        }
      />
    </Page>
  );
}

import React, { useEffect } from 'react';

import Figure from 'components/Figure';
import data from 'assets/data/about.json';
import styles from './About.module.scss';

export default function About() {
  useEffect(() => {
    document.title = '~gminteer/about';
  }, []);

  return (
    <main className={styles.About}>
      <Figure
        imgCfg={data.img}
        title={<h3>{data.title}</h3>}
        body={
          <>
            <p>{data.blurb}</p>
            <div>
              <h4>Things I'm currently learning:</h4>
              <ul>
                {data.currently_learning.map((thing) => (
                  <li>{thing}</li>
                ))}
              </ul>
            </div>
          </>
        }
      />
    </main>
  );
}

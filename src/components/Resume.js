import React, { useEffect } from 'react';

import Tree from 'components/Tree';
import treeData from 'assets/data/tree.json';
import data from 'assets/data/resume.json';
import styles from './Resume.module.scss';

export default function Resume() {
  useEffect(() => {
    document.title = '~gminteer/resume';
  }, []);

  return (
    <main className={styles.Resume}>
      <div className={styles.card}>
        <section className={styles.title}>
          <h3>
            <a href={data.href}>View full resume here</a>
          </h3>
        </section>
        <section className={styles.body}>
          <Tree data={treeData} />
        </section>
      </div>
    </main>
  );
}

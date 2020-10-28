import React from 'react';
import { say } from 'cowsay-browser';

import styles from './ErrorPage.module.scss';

export default function ErrorPage({ message }) {
  return (
    <main className={styles.ErrorPage}>
      <div className={styles.card}>
        <header>
          <span className={styles.activeTab}>Terminal</span>
          <span className={styles.tabBackground}>&nbsp;</span>
        </header>
        <pre>
          {say({ text: message, e: 'xx', n: true })}
          <br />
          <br />
          <span className={styles.dir}>react-portfolio</span> on{' '}
          <span className={styles.branch}>&#xE0A0; master</span> via{' '}
          <span className={styles.node}>⬢ v12.19.0</span>
          <br />
          <span className={styles.prompt}>❯</span>
        </pre>
      </div>
    </main>
  );
}

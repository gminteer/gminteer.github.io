import React from 'react';

import styles from './FakeTerminal.module.scss';

export default function FakeTerminal({ message, isError = false }) {
  return (
    <main className={styles.FakeTerminal}>
      <div className={styles.card}>
        <header>
          <span className={styles.activeTab}>Terminal</span>
          <span className={styles.tabBackground}>&nbsp;</span>
        </header>
        <pre>
          {message}
          <br />
          <br />
          <span className={styles.dir}>react-portfolio</span> on{' '}
          <span className={styles.branch}>&#xE0A0; master</span> via{' '}
          <span className={styles.node}>⬢ v12.19.0</span>
          <br />
          <span className={isError ? styles.errorPrompt : styles.prompt}>
            ❯
          </span>
        </pre>
      </div>
    </main>
  );
}

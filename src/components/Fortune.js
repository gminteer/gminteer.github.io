import React, { useState, useEffect } from 'react';
import { say } from 'cowsay-browser';

import styles from './Fortune.module.scss';
export default function Fortune() {
  const [fortune, setFortune] = useState({});

  useEffect(() => {
    async function getFortune() {
      const response = await fetch('https://api.ef.gy/fortune', {
        headers: { Accept: 'text/json' },
      });
      if (!response.ok) {
        setFortune({
          cookie: say({
            text: `something went wrong :(\nAPI returned ${response.status}\n    -- This website`,
            e: 'xx',
            n: true,
          }),
        });
        return;
      }
      const data = await response.json();
      if (data.file.includes('/off/')) {
        setFortune({
          cookie: say({
            text:
              "You miss 100% of the shots you don't take.\n    -- Albert Einstein",
            e: 'oO',
            n: true,
          }),
        });
        return;
      } else {
        setFortune({
          cookie: say({
            text: `${data.cookie.replace(/\t/g, '  ')} (${data.file}#${
              data['file-id']
            })`,
            e: 'oo',
            n: true,
          }),
        });
        return;
      }
    }
    getFortune();
  }, []);

  return (
    <main className={styles.Fortune}>
      <div className={styles.card}>
        <header>
          <span className={styles.activeTab}>Terminal</span>
          <span className={styles.tabBackground}>&nbsp;</span>
        </header>
        <pre>
          {fortune.cookie}
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

import React from 'react';

import Card from 'components/Card';

import iconify from 'assets/icons/iconify.png';
import resize from 'assets/icons/resize.png';

import Page from './Page';
import styles from './FakeTerminal.module.scss';

export default function FakeTerminal({ title, message, isError = false }) {
  return (
    <Page style={styles.FakeTerminal} title={title}>
      <div className={styles.container}>
        <Card>
          <div className={styles.cardBody}>
            <header>
              <span className={styles.icon}>
                <img src={iconify} alt="fake window button" />
              </span>
              <span className={styles.windowName}>xterm</span>
              <span className={styles.activeWindow}>&nbsp;</span>
              <span className={styles.icon}>
                <img src={resize} alt="fake window button" />
              </span>
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
        </Card>
      </div>
    </Page>
  );
}

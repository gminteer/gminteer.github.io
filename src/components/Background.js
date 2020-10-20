import React from 'react';

import styles from './Background.module.scss';

export default () => (
  <div className={styles.Background}>
    <div className={`${styles.stripe} ${styles.primaryDarker}`} />
    <div className={`${styles.stripe} ${styles.primary}`} />
    <div className={`${styles.stripe} ${styles.primaryLighter}`} />
    <div className={`${styles.stripe} ${styles.primaryInvert}`} />
    <div className={`${styles.stripe} ${styles.white}`} />
    <div className={styles.overlay} />
    <div className={styles.stripe} />
  </div>
);

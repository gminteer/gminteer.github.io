import React from 'react';

import styles from './Background.module.scss';

export default () => (
  <div className={styles.Background}>
    <div className={`${styles.stripe} ${styles.prussianBlue}`} />
    <div className={`${styles.stripe} ${styles.celadonBlue}`} />
    <div className={`${styles.stripe} ${styles.powderBlue}`} />
    <div className={`${styles.stripe} ${styles.honeydew}`} />
    <div className={`${styles.stripe} ${styles.white}`} />
    <div className={styles.overlay} />
    <div className={styles.stripe} />
  </div>
);

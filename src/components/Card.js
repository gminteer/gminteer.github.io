import React from 'react';

import styles from './Card.module.scss';

export default function Card({ title, children }) {
  return (
    <div className={styles.Card}>
      {title && <header className={styles.title}>{title}</header>}
      <section className={styles.body}>{children}</section>
    </div>
  );
}

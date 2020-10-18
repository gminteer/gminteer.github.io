import React from 'react';

import data from 'assets/data/footer.json';
import styles from './Footer.module.scss';

export default () => (
  <footer className={styles.Footer}>
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </ul>
  </footer>
);

import React from 'react';

import styles from './Navigation.module.scss';

export default ({ tabs, setCurrentTab }) => (
  <nav className={styles.Navigation}>
    <ul>
      {tabs.map((tab, index) => (
        <li key={index}>
          <h2>
            <a
              href={`#${tab.toLowerCase()}`}
              onClick={() => setCurrentTab(tab)}
            >
              {tab}
            </a>
          </h2>
        </li>
      ))}
    </ul>
  </nav>
);

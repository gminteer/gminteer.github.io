import React from 'react';

import styles from './Navigation.module.scss';

export default function Navigation({ title, tabs, currentTab, setCurrentTab }) {
  return (
    <nav className={styles.Navigation}>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={tab === currentTab ? styles.activeTab : undefined}
          >
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
}

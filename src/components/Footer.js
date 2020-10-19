import React, { useState, useEffect } from 'react';

import data from 'assets/data/footer.json';
import styles from './Footer.module.scss';

export default function Footer() {
  const [icons, setIcons] = useState({});
  useEffect(() => {
    async function loadIcons() {
      const data = await import('assets/data/footer.json');
      const iconRefs = await Promise.all(
        data.default.map((item) => import(`assets/icons/${item.icon}`))
      );
      const iconEntries = data.default.map((item, index) => [
        item.name,
        iconRefs[index].default,
      ]);
      setIcons(Object.fromEntries(iconEntries));
    }
    loadIcons();
  }, []);

  return (
    <footer className={styles.Footer}>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <a href={item.href}>
              <img
                className={
                  item.mono ? `${styles.icon} ${styles.mono}` : styles.icon
                }
                src={icons[item.name]}
                alt={item.name}
              />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

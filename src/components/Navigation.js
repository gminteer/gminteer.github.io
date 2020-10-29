import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Navigation.module.scss';

export default function Navigation({ pages }) {
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '');

  return (
    <nav className={styles.Navigation}>
      <ul>
        {pages.map((page, index) => (
          <li
            key={index}
            className={page === currentPage ? styles.activeTab : undefined}
          >
            <h2>
              <Link to={`/${page}`}>{page}</Link>
            </h2>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from 'components/Navigation';
import styles from './Header.module.scss';

export default (props) => (
  <header className={styles.Header}>
    <h1>
      <Link to="/">~gminteer/ $</Link>
    </h1>
    <Navigation {...props} />
  </header>
);

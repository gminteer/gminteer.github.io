import React from 'react';
import Navigation from 'components/Navigation';

import styles from './Header.module.scss';

export default (props) => (
  <header className={styles.Header}>
    <h1>~gminteer/ $</h1>
    <Navigation {...props} />
  </header>
);

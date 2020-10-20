import React from 'react';

import Navigation from 'components/Navigation';
import styles from './Header.module.scss';

export default (props) => {
  const { setCurrentTab } = props;
  return (
    <header className={styles.Header}>
      <h1>
        <a href="#" onClick={() => setCurrentTab('ROOT')}>
          ~gminteer/ $
        </a>
      </h1>
      <Navigation {...props} />
    </header>
  );
};

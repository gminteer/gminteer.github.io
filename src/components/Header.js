import React from 'react';
import Navigation from 'components/Navigation';

function Header(props) {
  return (
    <header>
      <h1>~gminteer/ $</h1>
      <Navigation {...props} />
    </header>
  );
}

export default Header;

import React from 'react';

function Navigation(props) {
  const { tabs, setCurrentTab } = props;
  return (
    <ul>
      {tabs.map((tab, index) => (
        <li key={index}>
          <a href={`#${tab}`} onClick={() => setCurrentTab(tab)}>
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;

import React from 'react';

function Navigation(props) {
  const { tabs, setCurrentTab } = props;
  return (
    <ul>
      {tabs.map((tab, index) => (
        <li>
          <a href={`#${tab}`} key={index} onClick={() => setCurrentTab(tab)}>
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;

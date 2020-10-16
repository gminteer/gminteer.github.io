import React from 'react';

function Navigation(props) {
  const { tabs, setCurrentTab } = props;
  return (
    <ul>
      {tabs.map((tab, index) => (
        <li key={index}>
          <h2>
            <a href={`#${tab}`} onClick={() => setCurrentTab(tab)}>
              {tab}
            </a>
          </h2>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;

import React from 'react';

export default ({ tabs, setCurrentTab }) => (
  <ul>
    {tabs.map((tab, index) => (
      <li key={index}>
        <h2>
          <a href={`#${tab.toLowerCase()}`} onClick={() => setCurrentTab(tab)}>
            {tab}
          </a>
        </h2>
      </li>
    ))}
  </ul>
);

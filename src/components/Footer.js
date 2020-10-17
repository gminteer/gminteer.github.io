import React from 'react';

import data from 'assets/data/footer.json';

export default () => (
  <footer>
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </ul>
  </footer>
);

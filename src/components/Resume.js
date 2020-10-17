import React from 'react';

import Tree from 'components/Tree';
import data from 'assets/data/tree.json';

export default () => (
  <main>
    <h3>
      <a href="https://1drv.ms/b/s!AokXDTRqU_ReguAdwBdF9Dq9d6Vg8Q">
        View full resume here
      </a>
    </h3>
    <section>
      <Tree data={data} />
    </section>
  </main>
);

import React from 'react';

import Tree from 'components/Tree';
import treeData from 'assets/data/tree.json';
import data from 'assets/data/resume.json';

export default () => (
  <main>
    <h3>
      <a href={data.href}>View full resume here</a>
    </h3>
    <section>
      <Tree data={treeData} />
    </section>
  </main>
);

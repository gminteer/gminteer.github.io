import React from 'react';

import styles from './Tree.module.scss';

export default function Tree({ data }) {
  return (
    <ul className={styles.Tree}>
      <li>{data.name}</li>
      {data.children &&
        data.children.map((child, index) => <Tree data={child} key={index} />)}
    </ul>
  );
}

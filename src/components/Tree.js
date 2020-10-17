import React from 'react';

export default function Tree({ data }) {
  return (
    <ul>
      <li>{data.name}</li>
      {data.children &&
        data.children.map((child, index) => <Tree data={child} key={index} />)}
    </ul>
  );
}

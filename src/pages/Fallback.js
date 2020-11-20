import React from 'react';
import { say } from 'cowsay-browser';

import FakeTerminal from './FakeTerminal';

export default function Fallback({
  text,
  e = 'oo',
  n = true,
  isError = false,
}) {
  if (isError && e === 'oo') e = 'xx';
  return (
    <FakeTerminal
      title="Something went wrong :("
      isError
      message={say({ text, e, n })}
    />
  );
}

import React, { useEffect } from 'react';
import { say } from 'cowsay-browser';

import FakeTerminal from './FakeTerminal';

export default function Fallback({
  text,
  e = 'oo',
  n = true,
  isError = false,
}) {
  useEffect(() => {
    document.title = 'Something went wrong :(';
  }, []);
  if (isError && e === 'oo') e = 'xx';
  return <FakeTerminal isError message={say({ text, e, n })} />;
}

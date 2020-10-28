import React, { useEffect } from 'react';
import { say } from 'cowsay-browser';

import FakeTerminal from './FakeTerminal';

export default function ErrorPage({ text, e = 'oo', n = true }) {
  useEffect(() => {
    document.title = 'Something went wrong :(';
  });

  return <FakeTerminal isError message={say({ text, e, n })} />;
}

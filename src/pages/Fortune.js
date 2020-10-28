import React, { useState, useEffect } from 'react';

import FakeTerminal from './FakeTerminal';
import { cowsayFortune } from 'utils/api';

export default function Fortune() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function applyFortune() {
      setMessage(await cowsayFortune());
    }
    applyFortune();
    document.title = '~gminteer/';
  }, []);

  return <FakeTerminal message={message} />;
}

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () =>
  it("shouldn't explode", () => expect(render(<App />)).toBeTruthy()));

import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';

import App from '../App';

afterEach(cleanup);

it('Renders App correctly', () => {
  const { getByText } = render(<App />);
  expect(getByText('Fetching')).toBeInTheDocument();
});

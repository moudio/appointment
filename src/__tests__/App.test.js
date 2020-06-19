import React from 'react';
import ReactDOM from 'react-dom';
import {
  render, fireEvent, cleanup, screen,
} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

afterEach(cleanup);

it('can render with redux with defaults', () => {
  render(<App />);
  expect(screen.getByTestId('App')).toBeInTheDocument();
});

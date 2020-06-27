import React from 'react';
import { createStore } from 'redux';

import { render, fireEvent, screen } from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('can render with redux with defaults', () => {
  render(<App />);
  expect(screen.getAllByAltText('bars')[0]).toBeInTheDocument();
});

test('can render the loading page after the loadinganimation has bet set to false', () => {
  render(<App />, {
    initialState: { userReducer: { loadingBeforeWelcome: false } },
  });
  expect(screen.getByTestId('jumbotron')).toBeInTheDocument();
});

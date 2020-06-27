import React from 'react';
// import { createStore } from 'redux';

import { render, fireEvent, screen } from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
// import { getByRole, getByTestId } from '@testing-library/react';

test('can render with redux with defaults', () => {
  render(<App />);
  expect(screen.getByAltText('bars')).toBeInTheDocument();
});

test('can render the loading page after the loadinganimation has bet set to false', () => {
  render(<App />, {
    initialState: { userReducer: { loadingBeforeWelcome: false } },
  });
  expect(screen.getByTestId('jumbotron')).toBeInTheDocument();
});

test('redirect to the loggin page if user tries to see the cars without logging in', () => {
  const { container } = render(<App />);
  const breadcrumb = container.querySelector('.breadcrumb');
  fireEvent.click(breadcrumb);
  const carsPageLink = container.querySelector('.cars-link');
  fireEvent.click(carsPageLink);
  expect(screen.getByTestId('login-div')).toBeInTheDocument();
});

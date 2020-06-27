import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render, fireEvent, screen } from '../test-utils';
import Login from '../components/Login/Login';
import '@testing-library/jest-dom/extend-expect';
import { handleLogin } from '../actions/actions';
import userEvent from '@testing-library/user-event';

jest.mock('../actions/actions');
// import {} from '../actions/actions'

test('the login page can render correctly', () => {
  render(
    <Router>
      <Route>
        <Login />
      </Route>
    </Router>
  );
  expect(screen.getByTestId('login-div')).toBeInTheDocument();
});

test('the user can type in the fields in correctly', async () => {
  const { getByTestId } = render(
    <Router>
      <Route>
        <Login />
      </Route>
    </Router>
  );
  await userEvent.type(getByTestId('username-login-field'), 'User');
  await userEvent.type(getByTestId('password-login-field'), 'password');
  expect(getByTestId('username-login-field').value).toBe('User');
});

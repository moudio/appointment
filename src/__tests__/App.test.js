import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import userEvent from '@testing-library/user-event';
import { fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  userReducer: {
    user: {},
    isLoggedIn: false,
    loadingBeforeWelcome: true,
  },
  carsReducer: { cars: [], isFetching: false },
};

const store = mockStore(initialState);
store.dispatch = jest.fn();
let component;

describe('tesing the ui', () => {
  beforeEach(() => {
    component = document.createElement('div');
    document.body.appendChild(component);
  });

  afterEach(() => {
    unmountComponentAtNode(component);
    component.remove();
    component = null;
  });

  test('can render with redux with defaults', () => {
    act(() => {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
        component,
      );
    });
    expect(screen.getByAltText('bars')).toBeInTheDocument();
  });

  test('shows the loading animation on the front page', () => {
    act(() => {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
        component,
      );
    });
    expect(screen.getByTestId('welcome-loading')).toBeInTheDocument();
  });

  test('show the login page after user clicks on the login from menu', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      component,
    );
    fireEvent.click(screen.getByText(/login/i));
    expect(screen.getByTestId('login-div')).toBeInTheDocument();
  });

  test('test the login page dispatches the handleLogin action', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      component,
    );
    fireEvent.click(screen.getByTestId('login'));
    await userEvent.type(screen.getByTestId('username-login-field'), 'User');
    await userEvent.type(
      screen.getByTestId('password-login-field'),
      'password',
    );
    fireEvent.click(screen.getByTestId('submit-login'));
  });

  test('displays the user dashboard correctly', async () => {
    const newState = {
      userReducer: {
        user: {},
        isLoggedIn: true,
        loadingBeforeWelcome: true,
      },
      carsReducer: { cars: [], isFetching: false },
    };
    const newStore = mockStore(newState);
    render(
      <Provider store={newStore}>
        <App />
      </Provider>,
      component,
    );
    expect(screen.getByTestId('user-dashboard')).toBeInTheDocument();
  });
});

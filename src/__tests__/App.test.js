import React from 'react';
// import { createStore } from 'redux';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, screen, wait } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import thunk from 'redux-thunk';
import { handleLogin } from '../actions/actions';
// import { getByRole, getByTestId } from '@testing-library/react';
import configureStore from 'redux-mock-store';
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
jest.mock('../actions/actions');

beforeEach(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
test('can render with redux with defaults', () => {
  expect(screen.getByAltText('bars')).toBeInTheDocument();
});

test('shows the loading animation on the front page', () => {
  expect(screen.getByTestId('welcome-loading')).toBeInTheDocument();
});

// test('show the login dashboard after user logs in', () => {
//   const { getByText } = render(<App />, {
//     initialState: {
//       userReducer: { user: { username: 'Mouha' } },
//     },
//   });
//   fireEvent.click(getByText(/login/i));

//   expect(screen.getByText('Welcome')).toBeInTheDocument();
// });

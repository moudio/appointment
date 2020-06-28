// import React from 'react';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import { shallow } from 'enzyme';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';
// import { render, fireEvent, screen, wait, cleanup } from '../test-utils';
// import Login from '../components/Login/Login';
// import '@testing-library/jest-dom/extend-expect';
// import { handleLogin } from '../actions/actions';

// const middlewares = [thunk];

// const initialState = {
//   userReducer: {
//     user: {},
//     isLoggedIn: false,
//     loadingBeforeWelcome: true,
//   },
//   carsReducer: { cars: [], isFetching: false },
// };
// const mockStore = configureStore(middlewares);
// let wrapper;
// let store;

// beforeEach(() => {
//   store = mockStore(initialState);
//   wrapper = shallow(<Login store={store} />);
// });

// jest.mock('../actions/actions');
// describe('login page', () => {
//   beforeEach(() => {
//     render(
//       <Router>
//         <Route>
//           <Login />
//         </Route>
//       </Router>
//     );
//   });

//   afterEach(() => cleanup());

//   test('the login page can render correctly', () => {
//     expect(screen.getByTestId('login-div')).toBeInTheDocument();
//   });

//   test('the user can type in the fields in correctly', async () => {
//     await userEvent.type(screen.getByTestId('username-login-field'), 'User');
//     await userEvent.type(
//       screen.getByTestId('password-login-field'),
//       'password'
//     );
//     expect(screen.getByTestId('username-login-field').value).toBe('User');
//   });
// });

// describe('loading spinner showing', () => {
//   test('show the loading spinner when the user types login', async () => {
//     render(
//       <Router>
//         <Route>
//           <Login />
//         </Route>
//       </Router>,
//       { initialState: { userReducer: { isChecking: true } } }
//     );

//     expect(screen.getByAltText('loading')).toBeInTheDocument();
//   });
// });

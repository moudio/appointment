import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, cleanup, screen } from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { carsReducer } from '../reducers/carReducer';

const mockStore = configureStore({
  userReducer: {},
  carsReducer: {},
});
describe('The App Component receives props from the Redux store', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      userReducer: {},
      carsReducer: {},
    });
    component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('should rnder with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on button click', () => {});
});

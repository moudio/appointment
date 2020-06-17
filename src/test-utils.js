import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  defaultState as reducerInitialState,
  carsReducer,
} from './reducers/car_reducer';

function render(
  ui,
  {
    initialState = reducerInitialState,
    store = createStore(carsReducer, initialState),
    ...renderOptions
  } = []
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };

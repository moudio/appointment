// import React from 'react';
// import { render as rtlRender } from '@testing-library/react';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';
// import reducer from './reducers/index';

// function render(
//   ui,
//   {
//     initialState = {
//       userReducer: {
//         user: {},
//         isLoggedIn: false,
//         loadingBeforeWelcome: true,
//       },
//     },
//     store = createStore(reducer, initialState, applyMiddleware(thunk)),
//     ...renderOptions
//   } = []
// ) {
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>;
//   }
//   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
// }

// export * from '@testing-library/react';
// export { render };

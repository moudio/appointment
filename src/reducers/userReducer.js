import axios from 'axios';

const defaultUserState = {
  user: {},
  isLoggedIn: false,
};

export const userReducer = (state = defaultUserState, action) => {
  console.log('user reducer is called');
  return state;
};

import axios from 'axios';

const defaultUserState = {
  user: {},
  isLoggedIn: false,
};

export const userReducer = (state = defaultUserState, action) => {
  return state;
};

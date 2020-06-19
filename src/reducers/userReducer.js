import * as ACTION_TYPE from '../actions/actions';

const defaultUserState = {
  user: {},
  isLoggedIn: false,
};

export const userReducer = (state = defaultUserState, action) => {
  console.log(action);
  switch (action.type) {
    case ACTION_TYPE.LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

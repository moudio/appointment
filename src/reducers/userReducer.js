import * as ACTION_TYPE from '../actions/actions';

const defaultUserState = {
  user: {},
  isLoggedIn: false,
};

const userReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case ACTION_TYPE.IS_FETCHING:
      return {
        ...state,
        isChecking: true,
      };
    case ACTION_TYPE.LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: true,
        isChecking: false,
      };
    case ACTION_TYPE.USER_LOGGED_IN:
      return {
        ...state,
        user: action.data.user,
        isLoggedIn: true,
        loginErrors: [],
        isChecking: false,
        cars: action.data.cars,
        books: action.data.books,
      };
    case ACTION_TYPE.LOGIN_ERROR:
      return {
        ...state,
        loginErrors: action.data.errors,
        isLoggedIn: false,
        isChecking: false,
      };

    case ACTION_TYPE.SIGNUP_SUCCES:
      return {
        ...state,
        signupErrors: [],
        isLoggedIn: true,
        user: action.data.user,
        status: action.data.status,
        isChecking: false,
        cars: action.data.cars,
      };
    case ACTION_TYPE.SIGNUP_ERROR:
      return {
        ...state,
        signupErrors: action.data.errors,
        isLoggedIn: false,
        status: action.data.status,
        isChecking: false,
      };
    case ACTION_TYPE.LOGGED_OUT:
      return {
        ...defaultUserState,
      };
    default:
      return state;
  }
};

export default userReducer;

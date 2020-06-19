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
      };
    case ACTION_TYPE.USER_LOGGED_IN:
      return {
        ...state,
        user: action.data.user,
        isLoggedIn: true,
        errors: null,
      };
    case ACTION_TYPE.LOGIN_ERROR:
      return {
        ...state,
        errors: action.data.errors,
        isLoggedIn: false,
      };

    case ACTION_TYPE.SIGNUP_SUCCES:
      return {
        ...state,
        errors: [],
        isLoggedIn: true,
        user: action.data.user,
        status: action.data.status,
        isChecking: false,
      };
    case ACTION_TYPE.SIGNUP_ERROR:
      console.log(action);
      return {
        ...state,
        errors: action.data.errors,
        isLoggedIn: false,
        status: action.data.status,
        isChecking: false,
      };
    default:
      return state;
  }
};

export default userReducer;

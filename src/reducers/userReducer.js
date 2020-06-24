import * as ACTION_TYPE from '../actions/actions';
import { act } from 'react-dom/test-utils';

const defaultUserState = {
  user: {},
  isLoggedIn: false,
};

const userReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case ACTION_TYPE.IS_FETCHING_USER:
      return {
        ...state,
        isChecking: true,
      };

    case ACTION_TYPE.FETCH_USER_BOOKS_AND_CARS:
      return {
        ...state,
        books: action.books,
        cars: action.cars,
        fetch_user_books: true,
      };

    case ACTION_TYPE.MAKE_DELETE_BOOK_PROP_FALSE:
      return {
        ...state,
        deleting_booking: 'mouha',
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

    case ACTION_TYPE.DELETING_BOOKING:
      return {
        ...state,
        deleting_booking: true,
        book_to_destroy: action.book_to_destroy,
      };

    case ACTION_TYPE.BOOK_DELETED:
      return {
        ...state,
        deleting_booking: false,
        book_to_destroy: null,
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

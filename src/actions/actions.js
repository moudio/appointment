import axios from 'axios';

export const END_LOADING_BEFORE_WELCOME = 'END_LOADING_BEFORE_WELCOME';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const IS_FETCHING_CAR = 'IS_FETCHING_CAR';
export const IS_FETCHING_USER = 'IS_FETCHING_USER';
export const LOGIN_STATUS = 'LOGIN_STATUS';
export const FAIL_STATUS_FETCH = 'FAIL_STATUS_FETCH';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNUP_SUCCES = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const ONE_CAR_FETCH_SUCCESS = 'ONE_CAR_FETCH_SUCCESS';
export const BOOKING_CREATED = 'BOOKING_CREATED';
export const CREATING_BOOKING = 'CREATING_BOOKING';
export const BOOKING_FALSE = 'BOOKING_FALSE';
export const REDIRECT_FALSE = 'REDIRECT_FALSE';
export const LOGGED_OUT = 'LOGGED_OUT';
export const DELETING_BOOKING = 'DELETING_BOOKING';
export const BOOK_DELETED = 'BOOK_DELETED';
export const BOOKING_CREATION_FAIL = 'BOOKING_CREATION_FAIL';
export const RESET_BOOKING_FAIL_PARAMS = 'RESET_BOOKING_FAIL_PARAMS';
export const FETCH_USER_BOOKS_AND_CARS = 'FETCH_USER_BOOKS_AND_CARS';
export const MAKE_DELETE_BOOK_PROP_FALSE = 'MAKE_DELETE_BOOK_PROP_FALSE';
export const FETCHING_BOOK_FOR_UPDATE = 'FETCHING_BOOK_FOR_UPDATE';
export const FOUND_BOOK_FOR_UPDATE = 'FOUND_BOOK_FOR_UPDATE';
export const PATCHING_BOOK = 'PATCHING_BOOK';
export const PATCHING_BOOK_SUCCESS = 'PATCHING_BOOK_SUCCESS';
export const REDIRECT_AFTER_PATCHING = 'REDIRECT_AFTER_PATCHING';

export const endLoadingBeforeWelcomePage = () => ({
  type: END_LOADING_BEFORE_WELCOME,
});
export const fetchCars = () => (dispatch) => {
  dispatch({
    type: IS_FETCHING_CAR,
  });

  axios
    .get('http://localhost:3001/api/v1/cars')
    .then((cars) => {
      setTimeout(() => {
        dispatch({
          type: FETCH_SUCCESS,
          cars: cars.data,
        });
      }, 1000);
    })
    .catch(() =>
      setTimeout(() => {
        dispatch({
          type: FETCH_FAILURE,
        });
      }, 1000)
    );
};

export const loginStatus = () => (dispatch) => {
  dispatch({
    type: IS_FETCHING_USER,
  });

  axios
    .get('http://localhost:3001/logged_in')
    .then((status) => {
      setTimeout(() => {
        dispatch({
          type: LOGIN_STATUS,
          data: status.data,
        });
      }, 1000);
    })
    .catch(() => {
      setTimeout(() => {
        dispatch({
          type: FAIL_STATUS_FETCH,
        });
      });
    });
};

export const handleLogin = (user) => (dispatch) => {
  dispatch({
    type: IS_FETCHING_USER,
  });
  axios
    .post('http://localhost:3001/login', { user }, { withCredentials: true })
    .then((response) => {
      console.log(response);
      setTimeout(() => {
        if (response.data.logged_in === true) {
          localStorage.setItem('token', response.data.token);
          dispatch({
            type: USER_LOGGED_IN,
            data: response.data,
          });
        } else {
          dispatch({
            type: LOGIN_ERROR,
            data: response.data,
          });
        }
      }, 1000);
    });
};

export const signupUser = (user) => (dispatch) => {
  dispatch({
    type: IS_FETCHING_USER,
  });
  axios
    .post(
      'http://localhost:3001/api/v1/users',
      { user },
      { withCredentials: true }
    )
    .then((response) => {
      setTimeout(() => {
        if (response.data.status === 'created') {
          dispatch({
            type: SIGNUP_SUCCES,
            data: response.data,
          });
        } else {
          dispatch({
            type: SIGNUP_ERROR,
            data: response.data,
          });
        }
      }, 1000);
    });
};

export const getOneCar = (carId) => (dispatch) => {
  dispatch({
    type: IS_FETCHING_CAR,
  });
  setTimeout(() => {
    axios.get(`http://localhost:3001/api/v1/cars/${carId}`).then((response) =>
      dispatch({
        type: ONE_CAR_FETCH_SUCCESS,
        carToShow: response.data,
        redirect: true,
      })
    );
  }, 1000);
};

export const createBooking = (book) => (dispatch) => {
  dispatch({
    type: CREATING_BOOKING,
  });

  setTimeout(() => {
    axios
      .post(
        'http://localhost:3001/api/v1/books/',
        { book },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === 'book_created') {
          dispatch({
            type: BOOKING_CREATED,
          });
        } else {
          dispatch({
            type: BOOKING_CREATION_FAIL,
          });
        }
      });
  }, 1000);
};

export const logout = () => (dispatch) => {
  axios.delete('http://localhost:3001/logout').then((response) => {
    dispatch({
      type: LOGGED_OUT,
      logged_out: response.data.logged_out,
    });
  });
};

export const makeBookingPropertyFalse = () => ({
  type: BOOKING_FALSE,
});

export const redirectFalse = () => ({
  type: REDIRECT_FALSE,
});

export const cancelBooking = (bookId) => (dispatch) => {
  dispatch({
    type: DELETING_BOOKING,
    book_to_destroy: bookId,
  });
  setTimeout(() => {
    axios.delete(`http://localhost:3001/api/v1/books/${bookId}`).then(() => {
      dispatch({
        type: BOOK_DELETED,
      });
    });
  }, 1000);
};

export const fetchUserBookings = (username) => (dispatch) => {
  axios
    .get(`http://localhost:3001/users/${username}/books_cars`)
    .then((response) => {
      dispatch({
        type: FETCH_USER_BOOKS_AND_CARS,
        books: response.data.books,
        cars: response.data.cars,
      });
    });
};

export const resetBookingFailParams = () => ({
  type: RESET_BOOKING_FAIL_PARAMS,
});

export const makeDeleteBookPropFalse = () => ({
  type: MAKE_DELETE_BOOK_PROP_FALSE,
});

export const bookUpdateAction = (bookId) => (dispatch) => {
  dispatch({
    type: FETCHING_BOOK_FOR_UPDATE,
  });

  axios.get(`http://localhost:3001/api/v1/books/${bookId}`).then((response) => {
    dispatch({
      type: FOUND_BOOK_FOR_UPDATE,
      book: response.data.book,
      car: response.data.car,
    });
  });
};

export const patchBookFromUpdateComponent = (book) => (dispatch) => {
  dispatch({
    type: PATCHING_BOOK,
  });

  setTimeout(() => {
    axios
      .patch(`http://localhost:3001/api/v1/books/${book.book_id}`, {
        book,
      })
      .then((response) => {
        if (response.data.status === 'patched') {
          dispatch({
            type: PATCHING_BOOK_SUCCESS,
          });
          setTimeout(() => {
            dispatch({
              type: REDIRECT_AFTER_PATCHING,
            });
          }, 2000);
        }
      });
  }, 1000);
};

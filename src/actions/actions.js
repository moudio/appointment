import axios from 'axios';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const IS_FETCHING = 'IS_FETCHING';
export const LOGIN_STATUS = 'LOGIN_STATUS';
export const FAIL_STATUS_FETCH = 'FAIL_STATUS_FETCH';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNUP_SUCCES = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const ONE_CAR_FETCH_SUCCESS = 'ONE_CAR_FETCH_SUCCESS';
export const BOOKING_CREATED = 'BOOKING_CREATED';
export const fetchCars = () => (dispatch) => {
  dispatch({
    type: IS_FETCHING,
  });

  axios
    .get('http://localhost:3001/api/v1/cars')
    .then((cars) =>
      setTimeout(() => {
        dispatch({
          type: FETCH_SUCCESS,
          cars: cars.data,
        });
      }, 1000)
    )
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
    type: IS_FETCHING,
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
    .catch((error) => {
      setTimeout(() => {
        dispatch({
          type: FAIL_STATUS_FETCH,
        });
      });
    });
};

export const handleLogin = (user) => (dispatch) => {
  dispatch({
    type: IS_FETCHING,
  });
  axios
    .post('http://localhost:3001/login', { user }, { withCredentials: true })
    .then((response) => {
      console.log(response);
      setTimeout(() => {
        if (response.data.logged_in === true) {
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
    })
    .catch((error) => console.log('api errors', error));
};

export const signupUser = (user) => (dispatch) => {
  dispatch({
    type: IS_FETCHING,
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
    })
    .catch((error) => console.log(error));
};

export const getOneCar = (carId) => (dispatch) => {
  console.log('get one car called with carId ', carId);
  dispatch({
    type: IS_FETCHING,
  });
  setTimeout(() => {
    axios
      .get(`http://localhost:3001/api/v1/cars/${carId}`)
      .then((response) =>
        dispatch({
          type: ONE_CAR_FETCH_SUCCESS,
          carToShow: response.data,
        })
      )
      .catch((error) => console.log(error));
  }, 1000);
};

export const createBooking = (book) => (dispatch) => {
  console.log('create booking called');
  axios
    .post(
      'http://localhost:3001/api/v1/books/',
      { book },
      { withCredentials: true }
    )
    .then((response) => {
      dispatch({
        type: BOOKING_CREATED,
      });
    })
    .catch((error) => console.log(error));
};

export const logout = () => (dispatch) => {
  console.log('logging out..');
  axios
    .delete('http://localhost:3001/logout')
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

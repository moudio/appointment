import axios from 'axios';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const IS_FETCHING = 'IS_FETCHING';
export const LOGIN_STATUS = 'LOGIN_STATUS';
export const FAIL_STATUS_FETCH = 'FAIL_STATUS_FETCH';

export const fetchCars = () => (dispatch) => {
  console.log('user is logged in, fecthing cars');
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
  console.log('Login status called');
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
      console.log(error);
      setTimeout(() => {
        dispatch({
          type: FAIL_STATUS_FETCH,
        });
      });
    });
};

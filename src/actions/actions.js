import axios from 'axios';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const IS_FETCHING = 'IS_FETCHING';

export const fetchCars = () => (dispatch) => {
  dispatch({
    type: IS_FETCHING,
    loading: true,
  });

  axios
    .get('http://localhost:3001/cars')
    .then((cars) => {
      dispatch({
        type: FETCH_SUCCESS,
        cars: cars.data,
        loading: false,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: FETCH_FAILURE,
        loading: false,
      });
    });
};
